import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get('auth')?.value;
  if (cookie !== process.env.SESSION_TOKEN) {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('from', req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }
  const res = NextResponse.next();
  res.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  return res;
}

export const config = {
  matcher: ['/profiles'], // 👈 change to your protected route(s)
};