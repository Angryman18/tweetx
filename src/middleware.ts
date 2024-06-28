import { NextRequest, NextResponse } from "next/server";

const unprotectedRoutes = ["/api/login", "/api/signup"];
const protectedPages = ["/feed", "/profile", "/users"];

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const token = req.headers.get("Authorization");
  if (pathname.startsWith("/api") && !unprotectedRoutes.includes(pathname)) {
    if (!token) return NextResponse.json({ error: "Token is required" }, { status: 400 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/(.*)"],
};
