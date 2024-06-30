import axiosClient from "@/service/axios-client";
import { TUserProfile } from "@/types/const";
import { axiosErrorMsg } from "@/utils/fe-utils/error";
import { toastError } from "@/utils/fe-utils/toast";
import { useCallback, useEffect, useState } from "react";

export default function useFetchUsers() {
  const [users, setUsers] = useState<TUserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = useCallback(async () => {
    try {
      const resp = await axiosClient.get("/api/user/all-user");
      setUsers(resp.data);
    } catch (err: unknown) {
      toastError(axiosErrorMsg(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, setUsers, loading };
}
