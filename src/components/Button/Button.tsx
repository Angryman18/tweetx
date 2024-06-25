import { TButton } from "@/types/const";
import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";

const Button = (
  props: ButtonHTMLAttributes<HTMLButtonElement> & { bType: TButton; text: string }
) => {
  let className = "";
  const { bType, text, ...rest } = props;
  switch (bType) {
    case TButton.Normal:
      className =
        "w-44 disabled:bg-opacity-60 text-LightBlack border-slate-500 outline-none rounded-xl border py-2 text-sm font-bold border-opacity-70";
      break;
    case TButton.Classic:
      className =
        "bg-Text px-4 disabled:bg-opacity-60 py-2 rounded-md shadow-md text-sm text-[#fff]";
      break;
    default:
      break;
  }
  return (
    <button {...rest} className={className}>
      {text}
    </button>
  );
};

export default Button;
