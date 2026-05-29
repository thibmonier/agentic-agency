import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, sujetLabels } from "@/lib/schemas/contact";
import { ContactNotificationEmail } from "@/emails/contact-notification";
import { checkRateLimit } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";

function getResendClient() {
  return new Resend(process.env.RESEND_API_KEY || "");
}

export async function POST(request: NextRequest) {
  try {
    // Get IP address for rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("cf-connecting-ip") ||
      "unknown";

    // Rate limit check
    const { allowed, remaining } = checkRateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        { error: "Trop de tentatives. Veuillez réessayer dans quelques minutes." },
        {
          status: 429,
          headers: { "X-RateLimit-Remaining": "0" },
        }
      );
    }

    const body = await request.json();

    // Check honeypot BEFORE validation (bots might fill it with invalid data)
    if (body.honeypot && body.honeypot.length > 0) {
      // Silently reject spam
      return NextResponse.json({ success: true });
    }

    // Validate with zod schema
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Données invalides", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    // Turnstile verification (if token provided)
    const turnstileToken = body.turnstileToken;
    if (turnstileToken) {
      const turnstileResult = await verifyTurnstile(turnstileToken, ip);
      if (!turnstileResult.success) {
        return NextResponse.json({ error: "Vérification anti-spam échouée." }, { status: 400 });
      }
    }

    // Build email subject
    const sujetLabel = sujetLabels[data.sujet] || data.sujet;
    const subject = `[Contact] ${sujetLabel} - ${data.nom} (${data.societe})`;

    // Send email via Resend
    const resend = getResendClient();
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || "onboarding@resend.dev",
      to: [process.env.CONTACT_EMAIL_TO || "contact@agentic-agency.fr"],
      replyTo: data.email,
      subject,
      react: ContactNotificationEmail({ ...data }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi. Veuillez réessayer." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true },
      {
        headers: { "X-RateLimit-Remaining": remaining.toString() },
      }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Erreur serveur. Veuillez réessayer." }, { status: 500 });
  }
}
