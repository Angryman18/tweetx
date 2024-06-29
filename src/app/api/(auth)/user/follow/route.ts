import dbConnect from "@/db/connect";
import User from "@/models/UserModel";
import { getUser } from "@/utils/commonUtil";
import { decryptToken } from "@/utils/jwt";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { toFollow, id } = body;

    await dbConnect();
    const user = await getUser(req);

    const followUser = await User.findById(id);
    if (toFollow) {
      const updateUser = await User.findByIdAndUpdate(
        user._id,
        { $push: { followers: followUser?._id } },
        { new: true }
      ).select("fullname followers");
      await User.findByIdAndUpdate(id, { $push: { following: user._id } });
      return NextResponse.json({ message: "Success" });
    } else {
      const updateUser = await User.findByIdAndUpdate(
        user._id,
        { $pull: { followers: followUser?._id } },
        { new: true }
      ).select("fullname followers");
      await User.findByIdAndUpdate(followUser?._id, { $pull: { following: user._id } });
    }
    return NextResponse.json({ message: "Success" });
  } catch (err: unknown) {
    console.log((err as any).message);
    return NextResponse.json({ error: "Error Occured" }, { status: 401 });
  }
};
