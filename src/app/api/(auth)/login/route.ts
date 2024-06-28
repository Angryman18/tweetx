import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User, { type TUser } from "@/models/UserModel";
import { genToken } from "@/utils/jwt";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();
    const { email, password } = body;
    if (!email || !password) throw new Error("Invalid email or password");
    const [getUser] = await User.find<TUser>({ email }).lean();
    if (!getUser) throw new Error("Email not found");
    const isCorrect = await bcrypt.compare(password, getUser.hash);
    if (!isCorrect) throw new Error("Invalid Email or Password");
    const { fullname, email: userEmail, avatar } = getUser;
    const token = genToken({ email });
    return NextResponse.json({ data: { fullname, email: userEmail, avatar, token } });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 400 });
  }
};
