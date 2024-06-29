import { TUser } from "@/models/UserModel";
import { useCallback, useEffect, useState } from "react";

type User = {
  avatar: string;
  fullname: string;
  email: string;
  token: string;
  _id: string;
};
type UserData = {
  data: User;
};

export default function useStore() {
  const [userData, setUserData] = useState<UserData>();

  const store = useCallback(<T>(data: T, key: string) => {
    localStorage.setItem(key, JSON.stringify(data));
  }, []);

  const retrieve = useCallback(<T>(key: string): T | undefined => {
    const getData = localStorage.getItem(key);
    try {
      return JSON.parse(getData!) as T;
    } catch (err) {
      return undefined;
    }
  }, []);

  useEffect(() => {
    const data = retrieve<UserData>("user");
    if (data) setUserData(data);
  }, [retrieve]);

  return { store, retrieve, userData };
}
