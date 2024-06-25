"use client";
import Button from "@/components/Button/Button";
import CreateAccount from "@/components/Heading/CreateAccount";
import Input from "@/components/Input/Input";
import { TButton } from "@/types/const";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/router";
import useAuthRedirect from "@/hooks/useAuthRedirect";

export default function Signup() {
  useAuthRedirect();
  const router = useRouter();
  return (
    <div>
      <Button onClick={() => router.push(ROUTES.Login)} text='Login' bType={TButton.Normal} />
      <div className='mt-16 mb-8'>
        <CreateAccount />
      </div>
      <div className='flex flex-col space-y-8 w-96'>
        <Input type='text' placeholder='Name' />
        <Input type='text' placeholder='Email' />
        <Input type='text' placeholder='Password' />
        <Input type='text' placeholder='Confirm Password' />
        <div className='flex justify-end'>
          <Button onClick={() => console.log("Hello")} text='Sign up' bType={TButton.Classic} />
        </div>
      </div>
    </div>
  );
}
