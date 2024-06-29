import { CustomError } from "@/types/const";
import { AxiosError } from "axios";

export const axiosErrorMsg = (error: AxiosError) => {
  const errorMsg = (error.response?.data as CustomError).error;
  return typeof errorMsg !== "string"
    ? (errorMsg as any)?.error ?? "Something went wrong"
    : "Something Went Wrong";
};
