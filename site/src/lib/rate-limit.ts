const rateMap = new Map<string, number[]>();

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 10;

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const timestamps = rateMap.get(ip) || [];

  // Remove expired timestamps
  const valid = timestamps.filter((t) => now - t < WINDOW_MS);

  if (valid.length >= MAX_REQUESTS) {
    rateMap.set(ip, valid);
    return { allowed: false, remaining: 0 };
  }

  valid.push(now);
  rateMap.set(ip, valid);
  return { allowed: true, remaining: MAX_REQUESTS - valid.length };
}

// Cleanup old entries periodically (prevent memory leak)
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, timestamps] of rateMap.entries()) {
      const valid = timestamps.filter((t) => now - t < WINDOW_MS);
      if (valid.length === 0) {
        rateMap.delete(ip);
      } else {
        rateMap.set(ip, valid);
      }
    }
  }, WINDOW_MS);
}
