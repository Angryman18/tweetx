import React from "react";
import UserPageCard from "@/components/Users/UserPageCard";

const Users = () => {
  return (
    <div>
      <UserPageCard isFollowing={false} name='Shyam Mahanta' followCount={500} />
      <UserPageCard isFollowing={false} name='Arjun Reddy' followCount={212} />
      <UserPageCard isFollowing={true} name='Rohit Sharma' followCount={641} />
    </div>
  );
};

export default Users;
