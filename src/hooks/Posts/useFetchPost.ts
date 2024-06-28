import axiosClient from "@/service/axios-client";
import { TPost } from "@/types/const";
import { axiosErrorMsg } from "@/utils/fe-utils/error";
import { toastError } from "@/utils/fe-utils/toast";
import { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";

export default function useFetchPosts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<TPost[]>([]);

  const fetchPosts = useCallback(async (): Promise<undefined> => {
    try {
      setLoading(true);
      const res = await axiosClient.get<TPost[]>("/api/feed");
      setPosts(res.data);
    } catch (err: unknown) {
      toastError(axiosErrorMsg(err as AxiosError));
      return Promise.reject(err as string);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { fetchPosts, loading, posts };
}
