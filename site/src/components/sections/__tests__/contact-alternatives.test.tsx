import { render, screen } from "@testing-library/react";
import { ContactAlternatives } from "../contact-alternatives";

describe("ContactAlternatives", () => {
  it("renders heading", () => {
    render(<ContactAlternatives />);
    const heading = screen.getByRole("heading", {
      name: /ou directement/i,
      level: 3,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders calendar booking link", () => {
    render(<ContactAlternatives />);
    const link = screen.getByRole("link", { name: /réserver un créneau/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#");
  });

  it("renders LinkedIn link", () => {
    render(<ContactAlternatives />);
    const link = screen.getByRole("link", {
      name: /nous suivre sur linkedin/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://linkedin.com/company/agentic-agency"
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders email link", () => {
    render(<ContactAlternatives />);
    const link = screen.getByRole("link", {
      name: /contact@agentic-agency\.fr/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "mailto:contact@agentic-agency.fr");
  });

  it("renders response time text", () => {
    render(<ContactAlternatives />);
    const responseTime = screen.getByText(/réponse sous 24-48h ouvrées/i);
    expect(responseTime).toBeInTheDocument();
  });

  it("renders alternative contact methods descriptions", () => {
    render(<ContactAlternatives />);

    // Check descriptions are present
    expect(
      screen.getByText(/discutons de votre projet en visio/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/actualités et conseils tech/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/pour toute question directe/i)
    ).toBeInTheDocument();
  });
});
