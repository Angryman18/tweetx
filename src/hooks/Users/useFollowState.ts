import { TUserProfile } from "@/types/const";

export default function useFollowState() {
  const followUnfollowCallback = (
    data: TUserProfile[],
    callback: React.Dispatch<React.SetStateAction<TUserProfile[]>>
  ) => {
    return (toFollow: boolean, id: string) => {
      const freshUserList = data.map((i) => {
        if (i.id === id && !toFollow) {
          const obj = { ...i, isFollowing: false };
          if (Object.hasOwn(i, "followersCount")) obj.followersCount = --i.followersCount!;
          else obj.followingCount = --i.followingCount!;
          return obj;
        } else if (i.id === id && toFollow) {
          const obj = { ...i, isFollowing: true };
          if (Object.hasOwn(i, "followersCount")) obj.followersCount = ++i.followersCount!;
          else obj.followingCount = ++i.followingCount!;
          return obj;
        } else return i;
      });
      callback(freshUserList);
    };
  };

  return followUnfollowCallback;
}
