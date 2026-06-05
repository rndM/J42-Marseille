import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (password === process.env.PAGE_PASSWORD) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set('auth', process.env.SESSION_TOKEN!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });
    return res;
  }

  return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
}