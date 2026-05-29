import { render, screen } from "@testing-library/react";
import CookiesPage from "../page";

describe("CookiesPage", () => {
  it("renders main heading", () => {
    render(<CookiesPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: /politique de cookies/i })
    ).toBeInTheDocument();
  });

  it("renders essential cookies section", () => {
    render(<CookiesPage />);
    expect(
      screen.getByRole("heading", { level: 2, name: /cookies essentiels/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/authentification si applicable/i)).toBeInTheDocument();
    expect(screen.getByText(/langue, thème/i)).toBeInTheDocument();
    expect(screen.getByText(/protection CSRF/i)).toBeInTheDocument();
  });

  it("renders analytics cookies section", () => {
    render(<CookiesPage />);
    expect(
      screen.getByRole("heading", { level: 2, name: /cookies analytics/i })
    ).toBeInTheDocument();
  });

  it("renders retention periods", () => {
    render(<CookiesPage />);
    expect(screen.getByText(/12 mois/i)).toBeInTheDocument();
    expect(screen.getByText(/24 mois/i)).toBeInTheDocument();
  });

  it("renders cookie management section", () => {
    render(<CookiesPage />);
    expect(
      screen.getByRole("heading", { level: 2, name: /comment gérer vos cookies/i })
    ).toBeInTheDocument();
  });

  it("renders contact email", () => {
    render(<CookiesPage />);
    const emailLinks = screen.getAllByText(/contact@agentic-agency\.fr/i);
    expect(emailLinks.length).toBeGreaterThan(0);
  });
});
