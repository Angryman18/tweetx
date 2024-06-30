import dbConnect, { dbDisconnect } from "@/db/connect";
import Post from "@/models/PostModel";
import { verifyJWT } from "@/utils/jwt";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    verifyJWT(req)
    await dbConnect()
    const { userId } = body;
    const getPosts = await Post.find({ createdBy: userId }).populate({
      path: "createdBy",
      select: "fullname -_id",
    });
    return NextResponse.json(getPosts);
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 400 });
  } finally {
    await dbDisconnect().catch(console.log);
  }
};
