import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const requestStore = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const existing = requestStore.get(ip);

  if (!existing || existing.resetAt < now) {
    requestStore.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }

  if (existing.count > 30) return false;
  existing.count += 1;
  return true;
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/auth')) {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    if (request.method !== 'GET') {
      const csrf = request.headers.get('x-csrf-token');
      const cookie = request.cookies.get('csrf-token')?.value;
      if (!csrf || !cookie || csrf !== cookie) {
        return NextResponse.json({ error: 'Invalid CSRF token' }, { status: 403 });
      }
    }
  }

  return NextResponse.next();
}

export const config = { matcher: ['/api/:path*'] };
