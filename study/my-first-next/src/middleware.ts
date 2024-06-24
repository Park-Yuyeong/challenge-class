import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const helloCode = request.cookies.get("hello");

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
