import axiosClient from "@/service/axios-client";
import { axiosErrorMsg } from "@/utils/fe-utils/error";
import { useCallback, useEffect, useState } from "react";
import useStore from "../useStore";
import { TCurrentUserProfile } from "@/types/const";

export default function useUserProfile(getUseratFirstMount: boolean = true) {
  const { retrieve } = useStore();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<TCurrentUserProfile>();
  const getUserProfile = useCallback(async (id?: string) => {
    try {
      const resp = await axiosClient.get<{ user: TCurrentUserProfile }>(
        `/api/user/user-profile/${id}`
      );
      setUser(resp.data.user);
      return resp.data.user;
    } catch (err: unknown) {
      return Promise.reject(axiosErrorMsg(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!getUseratFirstMount) return;
    const user = retrieve("user");
    const id = user?.data._id;
    getUserProfile(id);
  }, [getUserProfile, getUseratFirstMount, retrieve]);

  return { getUserProfile, user, loading };
}
