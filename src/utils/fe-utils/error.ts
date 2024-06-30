import { CustomError } from "@/types/const";
import { AxiosError } from "axios";

export const axiosErrorMsg = (error: unknown) => {
  if (error instanceof AxiosError) {
    const errorMsg = (error?.response?.data as CustomError)?.error;
    return typeof errorMsg !== "string"
      ? (errorMsg as any)?.error ?? "Something went wrong"
      : errorMsg ?? "Something Went Wrong";
  }
  if (error instanceof Error) return error.message;
  else return "Something went wrong";
};
