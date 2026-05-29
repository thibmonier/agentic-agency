import { render, screen } from "@testing-library/react";
import { CtaBanner } from "@/components/sections/cta-banner";

describe("CtaBanner", () => {
  it("renders section with correct id", () => {
    render(<CtaBanner />);
    expect(document.getElementById("cta-milieu")).toBeInTheDocument();
  });

  it("renders heading", () => {
    render(<CtaBanner />);
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /prêt à accélérer votre produit/i,
      })
    ).toBeInTheDocument();
  });

  it("renders CTA link pointing to #contact", () => {
    render(<CtaBanner />);
    const link = screen.getByRole("link", { name: /réserver un échange/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#contact");
  });

  it("has navy background", () => {
    render(<CtaBanner />);
    const section = document.getElementById("cta-milieu");
    expect(section).toHaveClass("bg-[#1e3a5f]");
  });
});
