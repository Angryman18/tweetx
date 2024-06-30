import dbConnect, { dbDisconnect } from "@/db/connect";
import User from "@/models/UserModel";
import { verifyJWT } from "@/utils/jwt";
import { MongooseError } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    if (!params.id) throw new Error("User Id is required");
    verifyJWT(req);
    await dbConnect();
    const user = await User.findById(params.id)
      .select("-hash -__v -_id -id")
      .lean({ virtuals: true });
    if (!user) throw new Error("User not found");
    const { followers, following, posts, ...rest } = user;
    return NextResponse.json({ user: rest });
  } catch (err: unknown) {
    if (err instanceof MongooseError) {
      return NextResponse.json({ error: "Error! User Not Found" }, { status: 400 });
    }
    return NextResponse.json({ error: (err as Error).message }, { status: 400 });
  } finally {
    await dbDisconnect().catch(console.log);
  }
};
