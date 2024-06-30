import axiosClient from "@/service/axios-client";
import useStore from "../useStore";
import { useCallback, useEffect, useState } from "react";
import { TUserProfile } from "@/types/const";
import { toastError } from "@/utils/fe-utils/toast";
import { axiosErrorMsg } from "@/utils/fe-utils/error";

export default function useGetUserFollowing() {
  const { retrieve } = useStore();
  const [followings, setFollowings] = useState<TUserProfile[]>([]);
  const [loading, setLoading] = useState(true)

  const getUserFollowing = useCallback(async () => {
    try {
      const userId = retrieve("user")?.data._id;
      if (!userId) throw new Error("User not found");
      const resp = await axiosClient.post("/api/user/user-followings", { userId });
      if (resp.data.length) setFollowings(resp.data);
    } catch (err) {
      if (err instanceof Error) {
        return toastError(err.message);
      } else return toastError(axiosErrorMsg(err));
    } finally {
      setLoading(false)
    }
  }, [retrieve]);

  useEffect(() => {
    getUserFollowing();
  }, [getUserFollowing]);

  return { followings, loading };
}
