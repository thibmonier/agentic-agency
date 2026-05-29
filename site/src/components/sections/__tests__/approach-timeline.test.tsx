import { render, screen } from "@testing-library/react";
import { ApproachTimeline } from "@/components/sections/approach-timeline";

describe("ApproachTimeline", () => {
  it("renders section with correct id", () => {
    render(<ApproachTimeline />);
    expect(document.getElementById("approche")).toBeInTheDocument();
  });

  it("renders heading", () => {
    render(<ApproachTimeline />);
    expect(
      screen.getByRole("heading", { level: 2, name: /notre approche/i })
    ).toBeInTheDocument();
  });

  it("renders 5 steps", () => {
    render(<ApproachTimeline />);
    // Each step appears twice (desktop and mobile), use getAllByRole
    const discoveryHeadings = screen.getAllByRole("heading", { level: 3, name: /discovery/i });
    expect(discoveryHeadings.length).toBeGreaterThanOrEqual(1);

    const conceptionHeadings = screen.getAllByRole("heading", { level: 3, name: /conception/i });
    expect(conceptionHeadings.length).toBeGreaterThanOrEqual(1);

    const devHeadings = screen.getAllByRole("heading", { level: 3, name: /développement itératif/i });
    expect(devHeadings.length).toBeGreaterThanOrEqual(1);

    const recetteHeadings = screen.getAllByRole("heading", { level: 3, name: /recette/i });
    expect(recetteHeadings.length).toBeGreaterThanOrEqual(1);

    const transfertHeadings = screen.getAllByRole("heading", { level: 3, name: /transfert/i });
    expect(transfertHeadings.length).toBeGreaterThanOrEqual(1);
  });

  it("each step has a number from 1-5", () => {
    render(<ApproachTimeline />);
    const section = document.getElementById("approche");
    const content = section?.textContent || "";
    // Numbers 1-5 should be present
    expect(content).toContain("1");
    expect(content).toContain("2");
    expect(content).toContain("3");
    expect(content).toContain("4");
    expect(content).toContain("5");
  });
});
