import dbConnect, { dbDisconnect } from "@/db/connect";
import User from "@/models/UserModel";
import { CustomError } from "@/types/const";
import { verifyJWT } from "@/utils/jwt";
import { MongooseError, Schema } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const userId = body.userId;
    if (!userId) throw new Error("No User ID provided");
    verifyJWT(req);
    await dbConnect();
    const findUser = await User.findOne({ _id: userId })
      .populate({ path: "followers", select: "fullname followers following" })
      .select("followers")
      .lean({ virtuals: true });
    const finalData = findUser?.followers.map((item: any) => {
      const { followers, following, followingCount, _id, ...rest } = item;
      if (followers.map((i: Schema.Types.ObjectId) => i.toString()).includes(userId))
        rest.isFollowing = true;
      else rest.isFollowing = false;
      return rest;
    });
    return NextResponse.json(finalData);
  } catch (err: unknown) {
    if (err instanceof MongooseError) {
      return NextResponse.json({ error: "Something went wrong" }, { status: 400 });
    }
    return NextResponse.json(
      { error: (err as Error).message || (err as CustomError).error },
      { status: 400 }
    );
  } finally {
    await dbDisconnect().catch(console.log);
  }
};
