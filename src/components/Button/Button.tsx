import { TButton } from "@/types/const";
import React from "react";

const Button = ({ type, text }: { type: TButton; text: string }) => {
  let className = "";
  switch (type) {
    case TButton.Normal:
      className =
        "px-16 text-LightBlack border-slate-500 outline-none rounded-xl border py-2 text-sm font-bold border-opacity-70";
      break;
    case TButton.Classic:
      className = "bg-Text px-4 py-2 rounded-md shadow-md text-sm text-[#fff]";
      break;
    default:
      break;
  }
  return <button className={className}>{text}</button>;
};

export default Button;
