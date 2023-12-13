import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";  

// This middleware execute when the route is matched
export const config = {
    matcher: ['/dashboard/:path*']
}