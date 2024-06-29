import dbConnect from "@/db/connect";
import User, { TUser } from "@/models/UserModel";
import { getUser } from "@/utils/commonUtil";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await dbConnect();
    const user = await getUser(req);
    const userFollwer = user.followers;
    const getAllUsers = await User.find({}).select("fullname following");
    const users = userFollwer.map((i) => i.toString());
    const refine = getAllUsers.map((i: any) => ({
      fullname: i.fullname,
      followingCount: i?.followingCount,
      id: i.id,
      isFollowing: users.includes(i.id),
    }));
    return NextResponse.json(refine);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Error Occured" }, { status: 401 });
  }
};
