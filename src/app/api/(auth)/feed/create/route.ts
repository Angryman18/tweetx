import Post from "@/models/PostModel";
import { getUser } from "@/utils/commonUtil";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();
    const { content } = body;
    const user = await getUser(req);
    const createPost = new Post({
      createdOn: Date.now(),
      postContent: content,
      createdBy: user._id,
    });
    await createPost.save();
    return NextResponse.json({ message: "Success" });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 400 });
  }
};
