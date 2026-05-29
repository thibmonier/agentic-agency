interface TurnstileResult {
  success: boolean;
  error?: string;
}

export async function verifyTurnstile(token: string, ip?: string): Promise<TurnstileResult> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  // Skip verification if no secret key configured (dev mode)
  if (!secretKey) {
    return { success: true };
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: secretKey,
        response: token,
        remoteip: ip,
      }),
    });

    const data = (await response.json()) as { success: boolean; "error-codes"?: string[] };

    if (!data.success) {
      return { success: false, error: data["error-codes"]?.join(", ") || "Verification failed" };
    }

    return { success: true };
  } catch (err) {
    // Fallback: allow on API failure to prevent false positives
    console.error("Turnstile verification error:", err);
    return { success: true };
  }
}
