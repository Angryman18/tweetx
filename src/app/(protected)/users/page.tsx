"use client";
import React, { useEffect } from "react";
import UserPageCard from "@/components/Users/UserPageCard";
import axiosClient from "@/service/axios-client";

const Users = () => {
  useEffect(() => {
    axiosClient.get("/api/user/all-user").then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <UserPageCard isFollowing={false} name='Shyam Mahanta' followCount={500} />
      <UserPageCard isFollowing={false} name='Arjun Reddy' followCount={212} />
      <UserPageCard isFollowing={true} name='Rohit Sharma' followCount={641} />
    </div>
  );
};

export default Users;
