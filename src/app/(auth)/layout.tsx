"use client"
import Image from "next/image";
import bgImage from "../../../public/img/Log in.png";
import { Toaster } from "react-hot-toast";
import useAuthRedirect from "@/hooks/useAuthRedirect";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isAuth = useAuthRedirect();
  if (isAuth) return null;
  return (
    <main>
      <div className='mx-16 mt-12 relative'>
        <div className='text-Text text-2xl font-bold my-8'>TweetX</div>
        <Toaster
          position='top-center'
          reverseOrder={false}
          gutter={8}
          containerClassName=''
          containerStyle={{}}
        />
        {children}
      </div>
      <Image
        className='absolute hidden xl:block right-0 -bottom-0'
        width={800}
        src={bgImage}
        alt='bgimage'
      />
    </main>
  );
}
