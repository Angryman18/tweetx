import Post from "@/models/PostModel";
import { TUser } from "@/models/UserModel";
import { decodeAndGetUser } from "@/utils/jwt";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const getToken = req.headers.get("Authorization");
    const user = (await decodeAndGetUser(getToken!)) as TUser & { _id: string };
    const follwers = [...user.followers, user!._id];
    const getPosts = await Post.find({ createdBy: { $in: follwers } })
      .sort({ createdOn: -1 })
      .select("-__v")
      .populate({path: "createdBy", select: "fullname -_id"});
    return NextResponse.json(getPosts);
  } catch (err: unknown) {
    return NextResponse.json(
      { error: (err as Error).message ?? "Something Went Wrong" },
      { status: 400 }
    );
  }
};
