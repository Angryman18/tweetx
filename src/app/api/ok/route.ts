import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) => {
  return NextResponse.json({ message: "Server is Okay" });
};
