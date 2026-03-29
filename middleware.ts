import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const authHits = new Map<string, { count: number; resetAt: number }>();

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/api/auth')) {
    const ip = req.ip ?? 'local';
    const now = Date.now();
    const entry = authHits.get(ip);

    if (!entry || now > entry.resetAt) {
      authHits.set(ip, { count: 1, resetAt: now + 60_000 });
    } else {
      entry.count += 1;
      if (entry.count > 40) {
        return NextResponse.json({ error: 'Too many auth requests' }, { status: 429 });
      }
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*']
};
