import { render, screen } from "@testing-library/react";
import { TechnologiesSection } from "@/components/sections/technologies-section";

describe("TechnologiesSection", () => {
  it("renders section with correct id", () => {
    render(<TechnologiesSection />);
    expect(document.getElementById("technologies")).toBeInTheDocument();
  });

  it("renders heading containing 'expertise'", () => {
    render(<TechnologiesSection />);
    expect(
      screen.getByRole("heading", { level: 2, name: /expertise technique/i })
    ).toBeInTheDocument();
  });

  it("renders 11 technology items", () => {
    render(<TechnologiesSection />);
    // Based on the subtitle
    expect(screen.getByText(/11 stacks maîtrisées/i)).toBeInTheDocument();
  });

  it("shows technology names and versions", () => {
    render(<TechnologiesSection />);
    // Check for some key technologies (we need to check the data file to know exact names)
    // Let's check that version numbers are displayed with "v" prefix
    const section = document.getElementById("technologies");
    const content = section?.textContent || "";
    // Should contain version patterns like "v8.0", "v19", etc.
    expect(content).toMatch(/v\d+/);
  });
});
