import React from "react";
import ProtectedNav from "@/components/Nav/ProtectedNav";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className='h-16 w-screen flex items-center shadow-lg'>
        <div className='mx-48 flex justify-between w-full h-full items-center'>
          <div className='text-Text text-2xl font-bold'>TweetX</div>
          <ProtectedNav />
        </div>
      </div>
      <div className='w-[50vw] mx-auto my-4'>{children}</div>
    </main>
  );
}
