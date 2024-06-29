import dbConnect from "@/db/connect";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await dbConnect();
    const getAllUsers = await User.find({}).lean();
    //   .select("fullname followersCount followingCount postCount")
    // console.log(getAllUsers);
    return NextResponse.json(getAllUsers);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Error Occured" }, { status: 401 });
  }
};
