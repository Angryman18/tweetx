import dbConnect, { dbDisconnect } from "@/db/connect";
import User from "@/models/UserModel";
import { verifyJWT } from "@/utils/jwt";
import { MongooseError } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    verifyJWT(req);
    await dbConnect()
    const { userId } = body;
    const findFollowings = await User.findOne({ _id: userId })
      .populate({ path: "following", select: "fullname followers -_id" })
      .select("following")
      .lean({ virtuals: true });
    const finalData = (findFollowings as any)?.following?.map((item: any) => {
      const { followers, ...rest } = item;
      return rest;
    });
    return NextResponse.json(finalData);
  } catch (err: unknown) {
    if (err instanceof MongooseError) {
      return NextResponse.json({ error: "Something went wrong" }, { status: 400 });
    }
    return NextResponse.json({ error: (err as Error).message }, { status: 400 });
  } finally {
    await dbDisconnect().catch(console.log);
  }
};
