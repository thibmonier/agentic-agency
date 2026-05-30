import nextConfig from "../../../next.config";

describe("Security Headers", () => {
  it("should define security headers in next.config", async () => {
    expect(nextConfig.headers).toBeDefined();

    const headers = await nextConfig.headers!();
    expect(headers).toHaveLength(1);

    const globalHeaders = headers[0];
    expect(globalHeaders.source).toBe("/(.*)");

    const headerMap = new Map(globalHeaders.headers.map((h) => [h.key, h.value]));

    expect(headerMap.get("X-Content-Type-Options")).toBe("nosniff");
    expect(headerMap.get("X-Frame-Options")).toBe("DENY");
    expect(headerMap.get("X-XSS-Protection")).toBe("1; mode=block");
    expect(headerMap.get("Strict-Transport-Security")).toBe("max-age=31536000; includeSubDomains");
    expect(headerMap.get("Referrer-Policy")).toBe("strict-origin-when-cross-origin");
    expect(headerMap.get("Permissions-Policy")).toBe("geolocation=(), camera=(), microphone=()");
    expect(headerMap.get("Content-Security-Policy")).toContain("default-src 'self'");
    expect(headerMap.get("Content-Security-Policy")).toContain("frame-ancestors 'none'");
  });

  it("should configure image optimization", () => {
    expect(nextConfig.images).toBeDefined();
    expect(nextConfig.images!.formats).toContain("image/avif");
    expect(nextConfig.images!.formats).toContain("image/webp");
  });
});
