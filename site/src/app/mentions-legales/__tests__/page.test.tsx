import { render, screen } from "@testing-library/react";
import MentionsLegalesPage from "../page";

describe("MentionsLegalesPage", () => {
  it("renders main heading", () => {
    render(<MentionsLegalesPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: /mentions légales/i })
    ).toBeInTheDocument();
  });

  it("renders editor section with SIRET mention", () => {
    render(<MentionsLegalesPage />);
    expect(screen.getByText(/SIRET/i)).toBeInTheDocument();
    expect(screen.getByText(/Raison sociale/i)).toBeInTheDocument();
  });

  it("renders publication director section", () => {
    render(<MentionsLegalesPage />);
    expect(
      screen.getByRole("heading", { level: 2, name: /directeur de la publication/i })
    ).toBeInTheDocument();
  });

  it("renders hosting section with Cloudflare", () => {
    render(<MentionsLegalesPage />);
    expect(screen.getByText(/Cloudflare/i)).toBeInTheDocument();
  });

  it("renders contact section with email", () => {
    render(<MentionsLegalesPage />);
    const emailLinks = screen.getAllByText(/contact@agentic-agency\.fr/i);
    expect(emailLinks.length).toBeGreaterThan(0);
  });
});
