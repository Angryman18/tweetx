import axiosClient from "@/service/axios-client";
import { TPost } from "@/types/const";
import { useCallback, useEffect, useState } from "react";
import useStore from "../useStore";
import { toastError } from "@/utils/fe-utils/toast";
import { axiosErrorMsg } from "@/utils/fe-utils/error";

export default function useFetchPosts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<TPost[]>([]);
  const { retrieve } = useStore();

  const fetchPosts = useCallback(async () => {
    try {
      if (!!posts.length) return;
      setLoading(true);
      const userId = retrieve("user")?.data._id;
      if (!userId) throw new Error("User not found");
      const resp = await axiosClient.post<TPost[]>("/api/user/user-post", { userId });
      if (!resp.data.length) return;
      setPosts(resp.data);
    } catch (err: unknown) {
      toastError(axiosErrorMsg(err));
    } finally {
      setLoading(false);
    }
  }, [retrieve, posts]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { posts, loading };
}
