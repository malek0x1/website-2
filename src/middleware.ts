import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith("/starlake/") &&
    !pathname.endsWith(".html") &&
    !pathname.endsWith("/")
  ) {
    return NextResponse.redirect(
      new URL(`${pathname}/index.html`, request.url)
    );
  }

  return NextResponse.next();
}
