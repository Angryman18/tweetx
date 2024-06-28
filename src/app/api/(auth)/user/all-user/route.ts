import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const getAllUsers = await User.find({});
    //   .select("fullname followersCount followingCount postCount")
    console.log(getAllUsers);
    return NextResponse.json(getAllUsers);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Error Occured" }, { status: 401 });
  }
};
