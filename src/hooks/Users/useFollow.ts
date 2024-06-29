import axiosClient from "@/service/axios-client";
import { axiosErrorMsg } from "@/utils/fe-utils/error";
import { AxiosError } from "axios";

export default function useFollow() {
  const followUnfollow = async (toFollow: boolean, id: string) => {
    try {
      const resp = await axiosClient.post("/api/user/follow", { toFollow, id });
      return resp.data;
    } catch (err: unknown) {
      return Promise.reject(axiosErrorMsg(err as AxiosError));
    }
  };
  return followUnfollow;
}
