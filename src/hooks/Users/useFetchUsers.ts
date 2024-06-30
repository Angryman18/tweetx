import axiosClient from "@/service/axios-client";
import { TUserProfile } from "@/types/const";
import { useEffect, useState } from "react";

export default function useFetchUsers() {
  const [users, setUsers] = useState<TUserProfile[]>([]);

  useEffect(() => {
    axiosClient.get("/api/user/all-user").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return {users, setUsers};
}
