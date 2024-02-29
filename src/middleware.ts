import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get("isAuthenticated")?.value;
  const loginUserNotAccessPath = request.nextUrl.pathname === "/login";
  if (loginUserNotAccessPath) {
    if (isAuthenticated === "true") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    console.log(typeof isAuthenticated, "dasd");

    if (isAuthenticated === "false" || isAuthenticated === undefined) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/login", "/home", "/dashboard"],
};
