import React from "react";

const Loading = ({ isLoading }: { isLoading: boolean }) => {
  return <>{isLoading && <div className='opacity-50 text-center'>Loading...</div>}</>;
};

export default Loading;
