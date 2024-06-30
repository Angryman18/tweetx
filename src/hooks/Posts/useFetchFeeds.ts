import axiosClient from "@/service/axios-client";
import { TPost } from "@/types/const";
import { axiosErrorMsg } from "@/utils/fe-utils/error";
import { toastError } from "@/utils/fe-utils/toast";
import { useCallback, useEffect, useState } from "react";

export default function useFetchFeeds() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<TPost[]>([]);

  const fetchPosts = useCallback(async (): Promise<any> => {
    try {
      setLoading(true);
      const res = await axiosClient.get<TPost[]>("/api/feed");
      setPosts(res.data);
    } catch (err: unknown) {
      toastError(axiosErrorMsg(err));
      return Promise.reject(axiosErrorMsg(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { fetchPosts, loading, posts };
}
