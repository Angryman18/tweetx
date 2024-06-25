"use client";
import Input from "./Input";
import Image from "next/image";
import eyeOpen from "../../../public/img/eye_open.png";
import eyeClose from "../../../public/img/eye_close.png";
import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";

export default function PasswordInput({ onChange }: { onChange: ChangeEventHandler }) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className='relative'>
      <Input
        onChange={onChange}
        name='password'
        type={show ? "text" : "password"}
        placeholder='Password'
      />
      {show ? (
        <Image
          className='absolute cursor-pointer opacity-50 top-[50%] right-4 -translate-y-[50%]'
          src={eyeOpen}
          onClick={() => setShow(!show)}
          width={16}
          height={16}
          alt='eye_open'
        />
      ) : (
        <Image
          className='absolute cursor-pointer opacity-50 top-[50%] right-4 -translate-y-[50%]'
          src={eyeClose}
          onClick={() => setShow(!show)}
          width={16}
          height={16}
          alt='eye_close'
        />
      )}
    </div>
  );
}
