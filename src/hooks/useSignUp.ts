import { axiosErrorMsg } from "@/utils/fe-utils/error";
import axios, { AxiosError } from "axios";

export default function useSignUp() {
  const signUp = async <T>(data: T) => {
    try {
      const resp = await axios.post<{ message: string }>("api/signup", data);
      if (resp.data.message !== "Success") {
        throw new Error("Failed to sign up");
      }
      return resp.data;
    } catch (err: unknown) {
      return Promise.reject(axiosErrorMsg(err as AxiosError));
    }
  };
  return signUp;
}
