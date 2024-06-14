"use client";
import React, {
  ChangeEvent,
  HTMLInputTypeAttribute,
  SyntheticEvent,
} from "react";

type TProps = {
  onChange?: (event: ChangeEvent) => void;
  type: HTMLInputTypeAttribute;
  placeholder: string;
};

const Input = ({ onChange, type, placeholder }: TProps) => {
  return (
    <input
      onChange={onChange}
      type={type}
      className="bg-LightGray outline-none px-4 py-4 rounded-md text-sm w-96"
      placeholder={placeholder}
    />
  );
};

export default Input;
