import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "../contact-form";

// Mock fetch
const mockFetch = jest.fn();
global.fetch = mockFetch as jest.Mock;

describe("ContactForm", () => {
  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("renders all required fields", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/nom/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/société/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/sujet/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("checkbox", { name: /j'accepte/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /envoyer/i })).toBeInTheDocument();
  });

  it("shows validation errors on empty submit", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const submitButton = screen.getByRole("button", { name: /envoyer/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/le nom doit contenir au moins 2 caractères/i)).toBeInTheDocument();
      expect(screen.getByText(/adresse email invalide/i)).toBeInTheDocument();
      expect(screen.getByText(/le nom de société doit contenir au moins 2 caractères/i)).toBeInTheDocument();
    });
  });

  it("validates email format", () => {
    render(<ContactForm />);

    // Just check that the email input has type="email" which triggers browser validation
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveAttribute("type", "email");
  });

  it("shows error for short message on submit", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    // Fill required fields except message with short content
    await user.type(screen.getByLabelText(/nom/i), "Jean Dupont");
    await user.type(screen.getByLabelText(/email/i), "jean@example.com");
    await user.type(screen.getByLabelText(/société/i), "Acme");
    await user.selectOptions(screen.getByLabelText(/sujet/i), "mobile");
    await user.type(screen.getByLabelText(/message/i), "Too short");
    await user.click(screen.getByRole("checkbox", { name: /j'accepte/i }));

    // Submit form
    await user.click(screen.getByRole("button", { name: /envoyer/i }));

    await waitFor(() => {
      expect(screen.getByText(/le message doit contenir au moins 50 caractères/i)).toBeInTheDocument();
    });
  });

  it("honeypot field is hidden", () => {
    render(<ContactForm />);

    const honeypotField = document.querySelector('input[type="text"].hidden');
    expect(honeypotField).toBeInTheDocument();
    expect(honeypotField).toHaveClass("hidden");
  });

  it("pre-fills subject from prop", () => {
    render(<ContactForm defaultSubject="mobile" />);

    const sujetSelect = screen.getByLabelText(/sujet/i) as HTMLSelectElement;
    expect(sujetSelect.value).toBe("mobile");
  });

  it("shows success message after submission", async () => {
    const user = userEvent.setup();

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<ContactForm />);

    // Fill in the form with valid data
    await user.type(screen.getByLabelText(/nom/i), "Jean Dupont");
    await user.type(screen.getByLabelText(/email/i), "jean.dupont@example.com");
    await user.type(screen.getByLabelText(/société/i), "Acme Corp");

    const sujetSelect = screen.getByLabelText(/sujet/i);
    await user.selectOptions(sujetSelect, "mobile");

    await user.type(
      screen.getByLabelText(/message/i),
      "Nous souhaitons développer une application mobile innovante pour notre entreprise. Le projet nécessite une expertise en Flutter."
    );

    await user.click(screen.getByRole("checkbox", { name: /j'accepte/i }));

    // Submit the form
    const submitButton = screen.getByRole("button", { name: /envoyer/i });
    await user.click(submitButton);

    // Check success message
    await waitFor(() => {
      expect(screen.getByText(/merci ! nous vous répondrons sous 24-48h ouvrées/i)).toBeInTheDocument();
    });

    // Verify fetch was called
    expect(mockFetch).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
    );
  });

  it("shows error message on submission failure", async () => {
    const user = userEvent.setup();

    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    render(<ContactForm />);

    // Fill in the form with valid data
    await user.type(screen.getByLabelText(/nom/i), "Jean Dupont");
    await user.type(screen.getByLabelText(/email/i), "jean.dupont@example.com");
    await user.type(screen.getByLabelText(/société/i), "Acme Corp");

    const sujetSelect = screen.getByLabelText(/sujet/i);
    await user.selectOptions(sujetSelect, "mobile");

    await user.type(
      screen.getByLabelText(/message/i),
      "Nous souhaitons développer une application mobile innovante pour notre entreprise. Le projet nécessite une expertise en Flutter."
    );

    await user.click(screen.getByRole("checkbox", { name: /j'accepte/i }));

    // Submit the form
    const submitButton = screen.getByRole("button", { name: /envoyer/i });
    await user.click(submitButton);

    // Check error message
    await waitFor(() => {
      expect(screen.getByText(/une erreur est survenue lors de l'envoi du formulaire/i)).toBeInTheDocument();
    });
  });

  it("expands and shows optional details section", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    // Optional fields should not be visible initially
    expect(screen.queryByLabelText(/téléphone/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/budget estimé/i)).not.toBeInTheDocument();

    // Click "Plus de détails" button
    const detailsButton = screen.getByRole("button", { name: /plus de détails/i });
    await user.click(detailsButton);

    // Optional fields should now be visible
    await waitFor(() => {
      expect(screen.getByLabelText(/téléphone/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/budget estimé/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/délai souhaité/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/comment nous avez-vous connus/i)).toBeInTheDocument();
    });
  });
});
