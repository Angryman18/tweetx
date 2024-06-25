import jwt from "jsonwebtoken";

import config from "@/constants/config";
const secret = config.JWT_SECRET;

export const genToken = (payload: any) => {
  const token = jwt.sign(payload, secret, { algorithm: "HS256" });
  return token;
};

export const decryptToken = <Data>(token: string): Data => {
  const data = jwt.verify(token, secret);
  return data as Data;
};
