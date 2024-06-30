"use client";
import React from "react";
import UserPageCard from "@/components/Users/UserPageCard";
import useFetchUsers from "@/hooks/Users/useFetchUsers";

const Users = () => {
  const { users, setUsers } = useFetchUsers();

  const callback = (toFollow: boolean, id: string) => {
    const freshUserList = users.map((i) => {
      if (i.id === id && !toFollow) {
        return { ...i, isFollowing: false, followingCount: --i.followingCount };
      } else if (i.id === id && toFollow)
        return { ...i, isFollowing: true, followingCount: ++i.followingCount };
      else return i;
    });
    setUsers(freshUserList);
  };

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
            callback={callback}
          />
        );
      })}
      {!users.length && <div className='text-xs opacity-50 text-center'>No users found</div>}
    </div>
  );
};

export default Users;
