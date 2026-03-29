import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const WINDOW_MS = 60_000;
const LIMIT = 20;
const buckets = new Map<string, { count: number; start: number }>();

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/api/auth')) return NextResponse.next();

  const key = request.ip ?? 'unknown';
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now - bucket.start > WINDOW_MS) {
    buckets.set(key, { count: 1, start: now });
    return NextResponse.next();
  }

  bucket.count += 1;
  if (bucket.count > LIMIT) {
    return NextResponse.json({ success: false, message: 'Too many requests' }, { status: 429 });
  }

  return NextResponse.next();
}

export const config = { matcher: ['/api/auth/:path*'] };
