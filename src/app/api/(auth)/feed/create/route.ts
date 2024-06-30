import dbConnect, { dbDisconnect } from "@/db/connect";
import Post from "@/models/PostModel";
import User from "@/models/UserModel";
import { getUser } from "@/utils/commonUtil";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();
    const { content } = body;
    await dbConnect();
    const user = await getUser(req);
    const createPost = new Post({
      createdOn: Date.now(),
      postContent: content,
      createdBy: user._id,
    });
    const post = await createPost.save();
    await User.findOneAndUpdate({ _id: user._id }, { $push: { posts: post._id } });
    return NextResponse.json({ message: "Success" });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 400 });
  } finally {
    await dbDisconnect().catch(console.log);
  }
};
