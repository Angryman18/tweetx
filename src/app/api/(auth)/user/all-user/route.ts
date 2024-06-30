import dbConnect, { dbDisconnect } from "@/db/connect";
import User, { TUser } from "@/models/UserModel";
import { getUser } from "@/utils/commonUtil";
import { verifyJWT } from "@/utils/jwt";
import mongoose, { Schema } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await dbConnect();
    const user = await getUser(req);
    const getAllUsers = await User.find({}).select("fullname followers");
    const refine = getAllUsers.map((i: any) => ({
      fullname: i.fullname,
      followingCount: i?.followersCount,
      id: i.id,
      isFollowing: i.followers
        .map((x: Schema.Types.ObjectId) => x.toString())
        .includes(user._id?.toString()),
    }));
    return NextResponse.json(refine);
  } catch (err) {
    return NextResponse.json({ error: "Error Occured" }, { status: 401 });
  } finally {
    await dbDisconnect().catch(console.log);
  }
};
