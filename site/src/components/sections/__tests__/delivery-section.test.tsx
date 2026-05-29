import { render, screen } from "@testing-library/react";
import { DeliverySection } from "@/components/sections/delivery-section";

describe("DeliverySection", () => {
  it("renders section with correct id", () => {
    render(<DeliverySection />);
    expect(document.getElementById("delivery")).toBeInTheDocument();
  });

  it("renders heading", () => {
    render(<DeliverySection />);
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /le delivery moderne comme avantage/i,
      })
    ).toBeInTheDocument();
  });

  it("renders two paragraphs about agile delivery", () => {
    render(<DeliverySection />);
    expect(
      screen.getByText(/nous pratiquons l'agilité au quotidien/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/tests automatisés, revues de code/i)
    ).toBeInTheDocument();
  });

  it("renders CTA link to blog with text containing 'expérience'", () => {
    render(<DeliverySection />);
    const link = screen.getByRole("link", { name: /expérience/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/blog");
  });

  it("renders 4 delivery steps", () => {
    render(<DeliverySection />);
    expect(
      screen.getByRole("heading", { level: 3, name: /sprint/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /review/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /deploy/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /monitor/i })
    ).toBeInTheDocument();
  });

  it("renders step numbers 1-4", () => {
    render(<DeliverySection />);
    // Numbers are in div elements, not as standalone text
    const content = document.getElementById("delivery")?.textContent || "";
    expect(content).toContain("1");
    expect(content).toContain("2");
    expect(content).toContain("3");
    expect(content).toContain("4");
  });
});
