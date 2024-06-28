import Post from "@/models/PostModel";
import { TUser } from "@/models/UserModel";
import { decodeAndGetUser } from "@/utils/jwt";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const getToken = req.headers.get("Authorization");
    if (!getToken) throw new Error("JWT Token is Required");
    const user = (await decodeAndGetUser(getToken)) as TUser & { _id: string };
    const follwers = [...user.followers, user!._id];
    const getPosts = await Post.find({ _id: { $in: follwers } });
    return NextResponse.json(getPosts);
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message ?? "Something Went Wrong" });
  }
};