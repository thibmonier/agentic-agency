import { render, screen } from "@testing-library/react";
import { ValuesSection } from "@/components/sections/values-section";

describe("ValuesSection", () => {
  it("renders section with correct id", () => {
    render(<ValuesSection />);
    expect(document.getElementById("valeurs")).toBeInTheDocument();
  });

  it("renders heading", () => {
    render(<ValuesSection />);
    expect(screen.getByRole("heading", { level: 2, name: /nos valeurs/i })).toBeInTheDocument();
  });

  it("renders 4 value cards", () => {
    render(<ValuesSection />);
    expect(screen.getByRole("heading", { level: 3, name: /fiabilité/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: /rigueur/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: /partenariat/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: /pragmatisme/i })).toBeInTheDocument();
  });

  it("renders CTA 'Parler de votre projet' linking to #contact", () => {
    render(<ValuesSection />);
    const link = screen.getByRole("link", { name: /parler de votre projet/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#contact");
  });
});
