import axiosClient from "@/service/axios-client";
import { axiosErrorMsg } from "@/utils/fe-utils/error";

export default function useCreatePost() {
  const createPost = async (post: string) => {
    try {
      const resp = await axiosClient.post("/api/feed/create", { content: post });
      return resp.data.message;
    } catch (err: unknown) {
      return Promise.reject(axiosErrorMsg(err));
    }
  };
  return { createPost };
}
