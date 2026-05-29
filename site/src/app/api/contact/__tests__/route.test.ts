/**
 * @jest-environment node
 */

// Mock the Resend library
jest.mock("resend", () => {
  const mockSend = jest.fn();
  return {
    Resend: jest.fn().mockImplementation(() => ({
      emails: {
        send: mockSend,
      },
    })),
    __mockSend: mockSend,
  };
});

import { POST } from "../route";
import { NextRequest } from "next/server";

// Mock the email component
jest.mock("@/emails/contact-notification", () => ({
  ContactNotificationEmail: jest.fn(() => "mocked-email"),
}));

// Mock rate limiting
jest.mock("@/lib/rate-limit", () => ({
  checkRateLimit: jest.fn().mockReturnValue({ allowed: true, remaining: 5 }),
}));

// Mock Turnstile
jest.mock("@/lib/turnstile", () => ({
  verifyTurnstile: jest.fn().mockResolvedValue({ success: true }),
}));

// Helper to create a mock NextRequest
function createMockRequest(body: unknown): NextRequest {
  return new NextRequest("http://localhost:3000/api/contact", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

describe("POST /api/contact", () => {
  let mockSend: jest.Mock;

  beforeEach(() => {
    const resendModule = require("resend") as { __mockSend: jest.Mock };
    mockSend = resendModule.__mockSend;

    jest.clearAllMocks();
    // Reset rate limit mock to allow requests
    const { checkRateLimit } = require("@/lib/rate-limit");
    checkRateLimit.mockReturnValue({ allowed: true, remaining: 5 });
    // Reset resend mock to success
    mockSend.mockResolvedValue({ data: { id: "test" }, error: null });
  });

  it("returns 200 for valid submission", async () => {
    const validData = {
      nom: "John Doe",
      email: "john@example.com",
      societe: "ACME Corp",
      sujet: "developpement-web",
      message:
        "Bonjour, nous avons besoin d'un site web moderne pour notre entreprise. Pouvez-vous nous aider?",
      consentement: true,
    };

    const request = createMockRequest(validData);
    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json).toEqual({ success: true });
    expect(mockSend).toHaveBeenCalledTimes(1);
  });

  it("returns 400 for invalid data", async () => {
    const invalidData = {
      nom: "J", // Too short
      email: "invalid-email",
      societe: "A", // Too short
      // Missing sujet
      message: "Too short", // Less than 50 characters
      consentement: false, // Must be true
    };

    const request = createMockRequest(invalidData);
    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json.error).toBe("Données invalides");
    expect(json.details).toBeDefined();
  });

  it("silently accepts spam when honeypot is filled", async () => {
    const spamData = {
      nom: "Spam Bot",
      email: "spam@example.com",
      societe: "Spam Corp",
      sujet: "autre",
      message:
        "This is a spam message with at least fifty characters to pass validation.",
      consentement: true,
      honeypot: "spam-value", // Honeypot filled by bot
    };

    const request = createMockRequest(spamData);
    const response = await POST(request);
    const json = await response.json();

    // Silently accept spam (don't alert bots)
    expect(response.status).toBe(200);
    expect(json).toEqual({ success: true });

    // Verify email was NOT sent
    expect(mockSend).not.toHaveBeenCalled();
  });

  it("accepts submission with empty honeypot", async () => {
    const validData = {
      nom: "John Doe",
      email: "john@example.com",
      societe: "ACME Corp",
      sujet: "developpement-web",
      message:
        "Bonjour, nous avons besoin d'un site web moderne pour notre entreprise. Pouvez-vous nous aider?",
      consentement: true,
      honeypot: "", // Empty honeypot (legitimate user)
    };

    const request = createMockRequest(validData);
    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json).toEqual({ success: true });
    expect(mockSend).toHaveBeenCalledTimes(1);
  });

  it("returns 500 when Resend fails", async () => {
    // Mock Resend to return an error
    mockSend.mockResolvedValueOnce({
      data: null,
      error: { message: "API key invalid" },
    });

    const validData = {
      nom: "John Doe",
      email: "john@example.com",
      societe: "ACME Corp",
      sujet: "developpement-web",
      message:
        "Bonjour, nous avons besoin d'un site web moderne pour notre entreprise. Pouvez-vous nous aider?",
      consentement: true,
    };

    const request = createMockRequest(validData);
    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(500);
    expect(json.error).toBe("Erreur lors de l'envoi. Veuillez réessayer.");
  });

  it("validates email format", async () => {
    const invalidEmailData = {
      nom: "John Doe",
      email: "not-an-email",
      societe: "ACME Corp",
      sujet: "developpement-web",
      message:
        "Bonjour, nous avons besoin d'un site web moderne pour notre entreprise. Pouvez-vous nous aider?",
      consentement: true,
    };

    const request = createMockRequest(invalidEmailData);
    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json.error).toBe("Données invalides");
    expect(json.details).toBeDefined();
  });

  it("accepts optional fields", async () => {
    const dataWithOptionals = {
      nom: "John Doe",
      email: "john@example.com",
      societe: "ACME Corp",
      sujet: "application-metier",
      message:
        "Bonjour, nous avons besoin d'une application métier sur mesure. Voici les détails de notre projet...",
      telephone: "+33612345678",
      budget: "50-100k",
      delai: "3-6-mois",
      source: "linkedin",
      consentement: true,
    };

    const request = createMockRequest(dataWithOptionals);
    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json).toEqual({ success: true });
  });

  it("returns 429 when rate limited", async () => {
    const { checkRateLimit } = require("@/lib/rate-limit");
    checkRateLimit.mockReturnValueOnce({ allowed: false, remaining: 0 });

    const validData = {
      nom: "John Doe",
      email: "john@example.com",
      societe: "ACME Corp",
      sujet: "developpement-web",
      message:
        "Bonjour, nous avons besoin d'un site web moderne pour notre entreprise. Pouvez-vous nous aider?",
      consentement: true,
    };

    const request = createMockRequest(validData);
    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(429);
    expect(json.error).toBe("Trop de tentatives. Veuillez réessayer dans quelques minutes.");
    expect(mockSend).not.toHaveBeenCalled();
  });
});
