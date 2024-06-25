"use client";
import React, { InputHTMLAttributes } from "react";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input {...props} className='bg-LightGray outline-none px-4 py-4 rounded-md text-sm w-96' />
  );
};

export default Input;
