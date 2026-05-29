import { render, screen, fireEvent } from "@testing-library/react";
import { CookieBanner } from "../cookie-banner";

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("CookieBanner", () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  it("shows banner when no consent is stored", () => {
    render(<CookieBanner />);
    expect(screen.getByText(/cookies essentiels/i)).toBeInTheDocument();
  });

  it("hides banner after accepting", () => {
    render(<CookieBanner />);
    fireEvent.click(screen.getByText("Accepter tout"));
    expect(screen.queryByText(/cookies essentiels/i)).not.toBeInTheDocument();
    expect(localStorageMock.getItem("cookie-consent")).toBe("accepted");
  });

  it("hides banner after refusing", () => {
    render(<CookieBanner />);
    fireEvent.click(screen.getByText("Refuser tout"));
    expect(screen.queryByText(/cookies essentiels/i)).not.toBeInTheDocument();
    expect(localStorageMock.getItem("cookie-consent")).toBe("refused");
  });

  it("does not show banner when consent already given", () => {
    localStorageMock.setItem("cookie-consent", "accepted");
    render(<CookieBanner />);
    expect(screen.queryByText(/cookies essentiels/i)).not.toBeInTheDocument();
  });

  it("contains link to privacy policy", () => {
    render(<CookieBanner />);
    const link = screen.getByText("En savoir plus");
    expect(link).toHaveAttribute("href", "/confidentialite");
  });
});
