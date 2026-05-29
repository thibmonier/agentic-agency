import { render, screen } from "@testing-library/react";
import ConfidentialitePage from "../page";

describe("ConfidentialitePage", () => {
  it("renders main heading", () => {
    render(<ConfidentialitePage />);
    expect(
      screen.getByRole("heading", { level: 1, name: /politique de confidentialité/i })
    ).toBeInTheDocument();
  });

  it("renders data controller section", () => {
    render(<ConfidentialitePage />);
    expect(
      screen.getByRole("heading", { level: 2, name: /responsable du traitement/i })
    ).toBeInTheDocument();
  });

  it("renders RGPD rights section", () => {
    render(<ConfidentialitePage />);
    expect(screen.getByText(/droit d'accès/i)).toBeInTheDocument();
    expect(screen.getByText(/droit de rectification/i)).toBeInTheDocument();
    expect(screen.getByText(/droit à l'effacement/i)).toBeInTheDocument();
    expect(screen.getByText(/droit d'opposition/i)).toBeInTheDocument();
    expect(screen.getByText(/droit à la portabilité/i)).toBeInTheDocument();
  });

  it("renders data retention periods", () => {
    render(<ConfidentialitePage />);
    expect(screen.getByText(/12 mois/i)).toBeInTheDocument();
    expect(screen.getByText(/24 mois/i)).toBeInTheDocument();
  });

  it("renders contact email", () => {
    render(<ConfidentialitePage />);
    const emailLinks = screen.getAllByText(/contact@agentic-agency\.fr/i);
    expect(emailLinks.length).toBeGreaterThan(0);
  });
});
