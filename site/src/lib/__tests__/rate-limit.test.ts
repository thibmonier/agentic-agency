import { checkRateLimit } from "../rate-limit";

describe("checkRateLimit", () => {
  beforeEach(() => {
    // Clear the rate map by making requests expire
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("allows requests under limit", () => {
    const ip = "192.168.1.1";

    // Make 10 requests (the limit)
    for (let i = 0; i < 10; i++) {
      const result = checkRateLimit(ip);
      expect(result.allowed).toBe(true);
      expect(result.remaining).toBe(10 - i - 1);
    }
  });

  it("blocks requests over limit", () => {
    const ip = "192.168.1.2";

    // Make 10 requests (reach the limit)
    for (let i = 0; i < 10; i++) {
      checkRateLimit(ip);
    }

    // 11th request should be blocked
    const result = checkRateLimit(ip);
    expect(result.allowed).toBe(false);
    expect(result.remaining).toBe(0);
  });

  it("resets after window expires", () => {
    const ip = "192.168.1.3";

    // Make 10 requests
    for (let i = 0; i < 10; i++) {
      checkRateLimit(ip);
    }

    // 11th request blocked
    let result = checkRateLimit(ip);
    expect(result.allowed).toBe(false);

    // Advance time by 61 seconds (past the 60-second window)
    jest.advanceTimersByTime(61_000);

    // Should be allowed again
    result = checkRateLimit(ip);
    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(9);
  });

  it("tracks different IPs separately", () => {
    const ip1 = "192.168.1.4";
    const ip2 = "192.168.1.5";

    // Make 10 requests for IP1
    for (let i = 0; i < 10; i++) {
      checkRateLimit(ip1);
    }

    // IP1 should be blocked
    const result1 = checkRateLimit(ip1);
    expect(result1.allowed).toBe(false);

    // IP2 should still be allowed
    const result2 = checkRateLimit(ip2);
    expect(result2.allowed).toBe(true);
    expect(result2.remaining).toBe(9);
  });
});
