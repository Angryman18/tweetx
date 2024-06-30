import dbConnect, { dbDisconnect } from "@/db/connect";
import User from "@/models/UserModel";
import { getUser } from "@/utils/commonUtil";
import { decryptToken } from "@/utils/jwt";
import mongoose, { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { toFollow, id } = body;
    await dbConnect();
    const user = await getUser(req);

    const followUser = await User.findById(id);
    if (toFollow) {
      await User.findByIdAndUpdate(
        user._id,
        { $push: { following: followUser?._id } },
        { new: true }
      ).select("fullname followers");
      await User.findByIdAndUpdate(id, { $push: { followers: user._id } });
      return NextResponse.json({ message: "Success" });
    } else {
      await User.findByIdAndUpdate(
        user._id,
        { $pull: { following: followUser?._id } },
        { new: true }
      ).select("fullname followers");
      await User.findByIdAndUpdate(followUser?._id, { $pull: { followers: user._id } });
    }
    return NextResponse.json({ message: "Success" });
  } catch (err: unknown) {
    return NextResponse.json({ error: "Error Occured" }, { status: 401 });
  } finally {
    await dbDisconnect().catch(console.log);
  }
};
