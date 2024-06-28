import { NextRequest } from "next/server";
import { decodeAndGetUser } from "./jwt";
import { TUser } from "@/models/UserModel";

export const getUser = async (req: NextRequest) => {
  try {
    const getToken = req.headers.get("Authorization");
    if (!getToken) throw new Error("Token is required");
    const user = (await decodeAndGetUser(getToken)) as TUser & { _id: string };
    return user;
  } catch (err) {
    return Promise.reject(err);
  }
};
