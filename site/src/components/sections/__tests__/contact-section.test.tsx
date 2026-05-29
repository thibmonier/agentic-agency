import { render, screen } from "@testing-library/react";
import { ContactSection } from "../contact-section";

// Mock the ContactForm and ContactAlternatives to avoid complex client component rendering
jest.mock("@/components/forms/contact-form", () => ({
  ContactForm: () => <div data-testid="contact-form">Contact Form</div>,
}));

jest.mock("../contact-alternatives", () => ({
  ContactAlternatives: () => (
    <div data-testid="contact-alternatives">Alternatives</div>
  ),
}));

describe("ContactSection", () => {
  it("renders section with id contact", () => {
    const { container } = render(<ContactSection />);
    const section = container.querySelector("section#contact");
    expect(section).toBeInTheDocument();
  });

  it("renders title", () => {
    render(<ContactSection />);
    const heading = screen.getByRole("heading", {
      name: /parlons de votre projet/i,
      level: 2,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders description text", () => {
    render(<ContactSection />);
    const description = screen.getByText(
      /décrivez votre besoin et nous vous répondons sous 24-48h ouvrées/i
    );
    expect(description).toBeInTheDocument();
  });

  it("renders contact form", () => {
    render(<ContactSection />);
    const form = screen.getByTestId("contact-form");
    expect(form).toBeInTheDocument();
  });

  it("renders alternatives", () => {
    render(<ContactSection />);
    const alternatives = screen.getByTestId("contact-alternatives");
    expect(alternatives).toBeInTheDocument();
  });
});
