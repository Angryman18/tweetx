import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/UserModel";
import mongoose from "mongoose";
import dbConnect from "@/db/connect";
import { genPassword } from "@/utils/bcrypt";

export const POST = async (req: NextRequest, res: NextApiResponse) => {
  try {
    const body = await req.json();
    const { name = "", password = "", email = "" } = body;
    if (!name || !password || !email) throw new Error("Name, Password and Email are mandatory");
    await dbConnect();
    const isExist = await User.findOne({ email });
    if (isExist) throw new Error("User already exists");
    const hash = await genPassword(password);
    const user = new User({ fullname: name, email, hash, password });
    await user.save();
    mongoose.connection.close();
    return NextResponse.json({ message: "Success" }, { statusText: "Success" });
  } catch (err: unknown) {
    mongoose.connection.close();
    return NextResponse.json({ error: (err as Error).message }, { status: 400 });
  }
};
