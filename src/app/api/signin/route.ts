import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req: NextRequest, res: NextApiResponse) => {
  const body = await req.json();
  // const pass = bcrypt
  try {
    const { username = "", password = "" } = body;
    if (!username || !password)
      throw new Error("Username or Password is not provided");
    const passwd = await bcrypt.hash("hello", 2);
    return NextResponse.json({ data: passwd });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message });
  }
};
