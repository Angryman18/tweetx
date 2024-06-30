import { TUser } from "@/models/UserModel";
import { axiosErrorMsg } from "@/utils/fe-utils/error";
import axios from "axios";

export default function useLogin() {
  const login = async (data: { email: string; password: string }) => {
    try {
      const req = await axios.post<TUser>("/api/login", data);
      return req.data;
    } catch (err: unknown) {
      return Promise.reject(axiosErrorMsg(err));
    }
  };
  return login;
}
