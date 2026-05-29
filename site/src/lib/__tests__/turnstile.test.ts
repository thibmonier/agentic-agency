import { verifyTurnstile } from "../turnstile";

// Mock fetch globally
global.fetch = jest.fn();

describe("verifyTurnstile", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    delete process.env.TURNSTILE_SECRET_KEY;
  });

  it("returns success when no secret key", async () => {
    const result = await verifyTurnstile("test-token");
    expect(result.success).toBe(true);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("returns success for valid token", async () => {
    process.env.TURNSTILE_SECRET_KEY = "test-secret";

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({ success: true }),
    });

    const result = await verifyTurnstile("valid-token", "192.168.1.1");
    expect(result.success).toBe(true);
    expect(fetch).toHaveBeenCalledWith(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: "test-secret",
          response: "valid-token",
          remoteip: "192.168.1.1",
        }),
      })
    );
  });

  it("returns failure for invalid token", async () => {
    process.env.TURNSTILE_SECRET_KEY = "test-secret";

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({
        success: false,
        "error-codes": ["invalid-input-response"],
      }),
    });

    const result = await verifyTurnstile("invalid-token");
    expect(result.success).toBe(false);
    expect(result.error).toBe("invalid-input-response");
  });

  it("returns success on API error", async () => {
    process.env.TURNSTILE_SECRET_KEY = "test-secret";

    // Mock console.error to avoid noise in test output
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

    (fetch as jest.Mock).mockRejectedValueOnce(new Error("Network error"));

    const result = await verifyTurnstile("test-token");
    expect(result.success).toBe(true);
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Turnstile verification error:",
      expect.any(Error)
    );

    consoleErrorSpy.mockRestore();
  });
});
