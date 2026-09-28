import "server-only";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 20;
const attempts = new Map<string, number[]>();

/**
 * Simple sliding-window limit, per server instance. Not a hard guarantee on
 * Vercel (instances don't share memory), but it blunts scripted abuse.
 */
export function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);

  if (attempts.size > 10_000) {
    for (const [otherKey, times] of attempts) {
      if (times.every((time) => now - time >= WINDOW_MS)) attempts.delete(otherKey);
    }
  }

  return recent.length > MAX_ATTEMPTS;
}
