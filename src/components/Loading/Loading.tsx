import React from "react";
import style from "./style.module.css";

const Loading = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <>
      {isLoading && (
        <div className='text-center flex justify-center'>
          <span className={style.loader}></span>
        </div>
      )}
    </>
  );
};

export default Loading;
