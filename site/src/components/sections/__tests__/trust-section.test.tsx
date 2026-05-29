import { render, screen } from "@testing-library/react";
import { TrustSection } from "@/components/sections/trust-section";

describe("TrustSection", () => {
  it("renders section with correct id", () => {
    render(<TrustSection />);
    expect(document.getElementById("confiance")).toBeInTheDocument();
  });

  it("renders heading", () => {
    render(<TrustSection />);
    expect(
      screen.getByRole("heading", { level: 2, name: /ils nous font confiance/i })
    ).toBeInTheDocument();
  });

  it("renders all 8 sector badges", () => {
    render(<TrustSection />);
    expect(screen.getByText("Fintech")).toBeInTheDocument();
    expect(screen.getByText("Santé")).toBeInTheDocument();
    expect(screen.getByText("Industrie")).toBeInTheDocument();
    expect(screen.getByText("Retail")).toBeInTheDocument();
    expect(screen.getByText("Logistique")).toBeInTheDocument();
    expect(screen.getByText("Éducation")).toBeInTheDocument();
    expect(screen.getByText("Immobilier")).toBeInTheDocument();
    expect(screen.getByText("Assurance")).toBeInTheDocument();
  });

  it("shows first letter in avatar for each sector", () => {
    render(<TrustSection />);
    // Check specific first letters are present
    expect(screen.getByText("F")).toBeInTheDocument(); // Fintech
    expect(screen.getByText("S")).toBeInTheDocument(); // Santé
    const iLetters = screen.getAllByText("I"); // Industrie/Immobilier
    expect(iLetters.length).toBe(2);
    expect(screen.getByText("R")).toBeInTheDocument(); // Retail
    expect(screen.getByText("L")).toBeInTheDocument(); // Logistique
    expect(screen.getByText("É")).toBeInTheDocument(); // Éducation
    expect(screen.getByText("A")).toBeInTheDocument(); // Assurance
  });
});
