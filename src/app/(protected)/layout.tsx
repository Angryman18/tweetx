"use client";
import React from "react";
import ProtectedNav from "@/components/Nav/ProtectedNav";
import useAuthRedirect from "@/hooks/useAuthRedirect";
import { ROUTES } from "@/constants/router";
import { useRouter } from "next/navigation";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const isValid = useAuthRedirect();
  const router = useRouter();

  if (!isValid) return null;

  return (
    <main>
      <div className='h-16 w-screen flex items-center shadow-lg'>
        <div className='mx-48 flex justify-between w-full h-full items-center'>
          <div
            onClick={() => router.push(ROUTES.Feed)}
            className='text-Text text-2xl font-bold cursor-pointer'
          >
            TweetX
          </div>
          <ProtectedNav />
        </div>
      </div>
      <div className='w-[50vw] mx-auto my-4'>{children}</div>
    </main>
  );
}
