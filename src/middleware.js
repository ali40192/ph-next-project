import { NextResponse } from "next/server";

export function middleware(request) {
  const auth = request.cookies.get("auth");
  const pathname = request.nextUrl.pathname;

  if (!auth && (pathname === "/add-item" || pathname.startsWith("/items/"))) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }
}
