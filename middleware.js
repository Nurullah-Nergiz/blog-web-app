import { NextResponse } from "next/server";

export function middleware(req) {
   const { url, nextUrl, cookies } = req;
   const { pathname } = nextUrl;
   
   console.log('middleware:', pathname);
   console.log("cookies:", cookies)
   NextResponse.next();
}
