import { NextRequest, NextResponse } from "next/server";
import User from "@/models/UserModel";
import { genPassword } from "@/utils/bcrypt";
import dbConnect from "@/db/connect";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();
    const { name = "", password = "", email = "" } = body;
    if (!name || !password || !email) throw new Error("Name, Password and Email are mandatory");
    await dbConnect()
    const isExist = await User.findOne({ email });
    if (isExist) throw new Error("User already exists");
    const hash = await genPassword(password);
    const user = new User({ fullname: name, email, hash, password });
    await user.save();
    return NextResponse.json({ message: "Success" }, { statusText: "Success" });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 400 });
  }
};
