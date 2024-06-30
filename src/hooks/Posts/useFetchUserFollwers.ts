import axiosClient from "@/service/axios-client";
import useStore from "../useStore";
import { useCallback, useEffect, useState } from "react";
import { TUserProfile } from "@/types/const";
import { toastError } from "@/utils/fe-utils/toast";
import { axiosErrorMsg } from "@/utils/fe-utils/error";

export default function useGetUserFollowers() {
  const { retrieve } = useStore();
  const [loading, setLoading] = useState(true);
  const [followers, setFollowers] = useState<TUserProfile[]>([]);

  const getUserFollowers = useCallback(async () => {
    try {
      const userId = retrieve("user")?.data._id;
      if (!userId) throw new Error("User ID not Found");
      const resp = await axiosClient.post<TUserProfile[]>("/api/user/user-followers", { userId });
      if (!resp.data) return;
      setFollowers(resp.data);
      return resp.data;
    } catch (err: unknown) {
      if (err instanceof Error) return toastError(err.message);
      toastError(axiosErrorMsg(err));
    } finally {
      setLoading(false);
    }
  }, [retrieve]);

  useEffect(() => {
    getUserFollowers();
  }, [getUserFollowers]);

  return { followers, setFollowers, loading };
}
