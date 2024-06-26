"use client";
import Button from "@/components/Button/Button";
import Heading1 from "@/components/Heading/Heading1";
import Input from "@/components/Input/Input";
import PasswordInput from "@/components/Input/PasswordInput";
import { ROUTES } from "@/constants/router";
import useLogin from "@/hooks/useLogin";
import useStore from "@/hooks/useStore";
import { TButton } from "@/types/const";
import { toastError, toastSuccess } from "@/utils/fe-utils/toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useReducer } from "react";
import toast from "react-hot-toast";

// REDUCER DEFINE
const initialState = { email: "", password: "", isLoading: false };
const reducer = (state: typeof initialState, action: Partial<typeof initialState>) => ({
  ...state,
  ...action,
});

export default function Login() {
  const router = useRouter();
  const login = useLogin();
  const { store } = useStore();
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  const getInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({ [name]: value });
  };

  const handleLogin = async () => {
    try {
      dispatch({ isLoading: true });
      toast.loading("Please Wait");
      const { email, password } = state;
      if (!email || !password) return toastError("Emai or Password cannot be empty!");
      const response = await login({ email, password });
      store(response, "user");
      dispatch({ isLoading: false });
      toastSuccess("Logged in successfully");
      router.push(ROUTES.Feed);
    } catch (err: unknown) {
      toastError(err as string);
      dispatch({ isLoading: false });
    }
  };
  return (
    <div>
      <Button
        onClick={() => router.push(ROUTES.Signup)}
        text='Create Account'
        bType={TButton.Normal}
        disabled={state.isLoading}
      />
      <div className='mt-16 mb-8'>
        <Heading1 text='Login' />
      </div>
      <div className='flex flex-col space-y-8 w-96'>
        <div className='relative'>
          <Input onChange={getInputs} name='email' type='text' placeholder='Email' />
          {/* <p className='absolute -bottom-5 text-xs text-Red py-0 pl-0 my-0'>Email is empty</p> */}
        </div>
        <div className='relative'>
          <PasswordInput onChange={getInputs} />
          {/* <p className='absolute -bottom-5 text-xs text-Red py-0 pl-0 my-0'>
            Password can't be blank
          </p> */}
        </div>
        <div className='flex items-center justify-between text-sm'>
          <Link href='/' className='hover:text-LBlue'>
            Forgot Password ?
          </Link>
          <div className='flex justify-end'>
            <Button
              disabled={state.isLoading}
              onClick={handleLogin}
              text='Login'
              bType={TButton.Classic}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
