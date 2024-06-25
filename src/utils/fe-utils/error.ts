import { CustomError } from "@/types/const";
import { AxiosError } from "axios";

export const axiosErrorMsg = (error: AxiosError) => {
  return (error.response?.data as CustomError).error || "Something went wrong";
};
