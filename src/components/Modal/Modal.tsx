import React, { MouseEventHandler } from "react";

type TProps = {
  open: boolean;
  children: React.ReactNode;
  width?: "sm" | "md" | "lg";
  onClose: MouseEventHandler<HTMLDivElement>;
};
const widthC = {
  sm: "w-96",
  md: "w-[550px]",
  lg: "w-[800px]",
};

const Modal = ({ open, children, width = "sm", onClose }: TProps) => {
  const modalWidth = widthC[width];

  if (!open) return null;
  return (
    <div className='duration-200 fixed z-50 top-0 right-0 left-0 bottom-0 h-screen  backdrop-blur-md !overflow-hidden !overflow-y-hidden'>
      <div className='h-full relative'>
        <div
          className={`${modalWidth} duration-200 rounded-xl absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 z-10`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
