"use client";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { TButton } from "@/types/const";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/router";
import { ChangeEvent, useReducer } from "react";
import { toastError, toastLoading, toastSuccess } from "@/utils/fe-utils/toast";
import useSignUp from "@/hooks/useSignUp";
import { validateSignupInfo } from "@/utils/fe-utils/validate";
import Heading1 from "@/components/Heading/Heading1";

const initialState = { email: "", password: "", confirmPassword: "", name: "", isLoading: false };
const reducer = (state: typeof initialState, action: Partial<typeof initialState>) => ({
  ...state,
  ...action,
});

export default function Signup() {
  const router = useRouter();
  const signup = useSignUp();
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  const getInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({ [name]: value });
  };

  const handleSignup = async () => {
    const { name, password, email } = state;
    const error = validateSignupInfo(state);
    if (error) return;

    try {
      dispatch({ isLoading: true });
      toastLoading("Please wait...");
      await signup({ name, password, email });
      toastSuccess("Signup was Successfull. Please Login");
      dispatch({ isLoading: false });
      router.push(ROUTES.Login);
    } catch (err: unknown) {
      dispatch({ isLoading: false });
      toastError(err as string);
    }
  };
  return (
    <div>
      <Button
        disabled={state.isLoading}
        onClick={() => router.push(ROUTES.Login)}
        text='Login'
        bType={TButton.Normal}
      />
      <div className='mt-16 mb-8'>
        <Heading1 text='Create Account' />
      </div>
      <div className='flex flex-col space-y-8 w-96'>
        <Input
          disabled={state.isLoading}
          onChange={getInputs}
          name='name'
          type='text'
          placeholder='Name'
        />
        <Input
          disabled={state.isLoading}
          onChange={getInputs}
          name='email'
          type='email'
          placeholder='Email'
        />
        <Input
          disabled={state.isLoading}
          onChange={getInputs}
          name='password'
          type='password'
          placeholder='Password'
        />
        <Input
          disabled={state.isLoading}
          onChange={getInputs}
          name='confirmPassword'
          type='password'
          placeholder='Confirm Password'
        />
        <div className='flex justify-end'>
          <Button
            disabled={state.isLoading}
            onClick={handleSignup}
            text='Sign up'
            bType={TButton.Classic}
          />
        </div>
      </div>
    </div>
  );
}
