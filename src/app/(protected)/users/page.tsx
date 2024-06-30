"use client";
import React from "react";
import UserPageCard from "@/components/Users/UserPageCard";
import useFetchUsers from "@/hooks/Users/useFetchUsers";
import useFollowState from "@/hooks/Users/useFollowState";
import Loading from "@/components/Loading/Loading";

const Users = () => {
  const { users, setUsers, loading } = useFetchUsers();
  const callback = useFollowState();
  if (loading) return <Loading isLoading={loading} />;
  return (
    <div>
      {users.map((user, _idx) => {
        return (
          <UserPageCard
            key={_idx}
            isFollowing={user.isFollowing}
            name={user.fullname}
            id={user.id}
            followCount={user.followingCount}
            callback={callback(users, setUsers)}
          />
        );
      })}
      {!users.length && <div className='text-xs opacity-50 text-center'>No users found</div>}
    </div>
  );
};

export default Users;
