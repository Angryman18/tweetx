import dbConnect from "@/db/connect";
import Post from "@/models/PostModel";
import { getUser } from "@/utils/commonUtil";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    await dbConnect();
    const user = await getUser(req);
    const follwers = [...user.followers, user!._id];
    console.log(follwers);
    const getPosts = await Post.find({ createdBy: { $in: follwers } })
      .populate({ path: "createdBy", select: "fullname -_id" })
      .sort({ createdOn: -1 })
      .select("-__v");
    return NextResponse.json(getPosts);
  } catch (err: unknown) {
    return NextResponse.json(
      { error: (err as Error).message ?? "Something Went Wrong" },
      { status: 400 }
    );
  }
};
