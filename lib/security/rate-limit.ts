const requestMap = new Map<string, { count: number; resetAt: number }>();

export function isRateLimited(key: string, max = 15, windowMs = 60_000) {
  const now = Date.now();
  const current = requestMap.get(key);

  if (!current || current.resetAt < now) {
    requestMap.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (current.count >= max) return true;

  current.count += 1;
  return false;
}
