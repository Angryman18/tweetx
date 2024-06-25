"use client";
import { ROUTES } from "@/constants/router";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ProtectedNav = () => {
  const pathname = usePathname();
  const isUsersPage = pathname.includes(ROUTES.Users);
  const isProfilePage = pathname.includes(ROUTES.Profile);
  const isFeedPage = pathname.includes(ROUTES.Feed);
  return (
    <div className='flex space-x-8 font-bold items-center text-Text h-full'>
      <Link
        href={ROUTES.Feed}
        className={`${
          isFeedPage ? "hover:bg-Gray" : "hover:bg-LightGray text-Gray"
        } cursor-pointer px-4 flex items-center h-full duration-75`}
      >
        Feeds
      </Link>
      <Link
        href={ROUTES.Users}
        className={`${
          isUsersPage ? "hover:bg-Gray" : "hover:bg-LightGray text-Gray"
        } cursor-pointer px-4 flex items-center h-full duration-75`}
      >
        Users
      </Link>
      <Link
        href={ROUTES.Profile}
        className={`${
          isProfilePage ? "hover:bg-Gray" : "hover:bg-LightGray text-Gray"
        } cursor-pointer px-4 flex items-center h-full duration-75`}
      >
        Profile
      </Link>
    </div>
  );
};

export default ProtectedNav;
