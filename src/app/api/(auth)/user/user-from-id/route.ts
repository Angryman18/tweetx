import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { users } = body;
    const getUsers = await User.find({ _id: { $in: users } })
      .lean()
      .select("fullname _id");
    return NextResponse.json({ data: getUsers });
  } catch (err: unknown) {}
};
