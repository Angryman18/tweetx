import jwt, { JsonWebTokenError } from "jsonwebtoken";

import config from "@/constants/config";
import User, { TUser } from "@/models/UserModel";
import { NextRequest } from "next/server";
const secret = config.JWT_SECRET;

export const genToken = (payload: any) => {
  const token = jwt.sign(payload, secret, { algorithm: "HS256" });
  return token;
};

export const decryptToken = <Data>(token: string): Data => {
  const data = jwt.verify(token, secret);
  return data as Data;
};

export const verifyJWT = (req: NextRequest) => {
  const token = req.headers.get("Authorization");
  try {
    return decryptToken(token!);
  } catch (err) {
    throw err;
  }
};

export const decodeAndGetUser = async (token: string): Promise<any> => {
  try {
    const data = decryptToken<{ email: string }>(token);
    const getUser = await User.findOne({ email: data.email }).lean().select("-hash -__v -password");
    if (!getUser) throw new Error("User Not Found");
    return getUser;
  } catch (err: unknown) {
    return Promise.reject({ error: "No User Found" });
  }
};
