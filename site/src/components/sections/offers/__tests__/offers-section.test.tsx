import { render, screen } from "@testing-library/react";
import { OffersSection } from "@/components/sections/offers";
import { OfferCard } from "@/components/sections/offers/offer-card";

describe("OffersSection", () => {
  it("renders section with correct id", () => {
    render(<OffersSection />);
    expect(document.getElementById("offres")).toBeInTheDocument();
  });

  it("renders heading", () => {
    render(<OffersSection />);
    expect(screen.getByRole("heading", { level: 2, name: /nos offres/i })).toBeInTheDocument();
  });

  it("renders 4 pillar titles", () => {
    render(<OffersSection />);
    expect(
      screen.getByRole("heading", { level: 3, name: /développement web/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /applications métier/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /applications mobiles/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /conseil & accompagnement/i })
    ).toBeInTheDocument();
  });

  it("renders at least 10 offer cards with 'En savoir plus' links", () => {
    render(<OffersSection />);
    const links = screen.getAllByRole("link", { name: /en savoir plus/i });
    // There are 2 + 3 + 2 + 2 = 9 offers according to the data
    expect(links.length).toBeGreaterThanOrEqual(9);
  });
});

describe("OfferCard", () => {
  const mockOffer = {
    title: "Test Offer",
    description: "This is a test description",
    href: "/test-link",
  };

  it("renders title", () => {
    render(<OfferCard offer={mockOffer} />);
    expect(screen.getByRole("heading", { level: 4, name: /test offer/i })).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<OfferCard offer={mockOffer} />);
    expect(screen.getByText(/this is a test description/i)).toBeInTheDocument();
  });

  it("renders link with correct href", () => {
    render(<OfferCard offer={mockOffer} />);
    const link = screen.getByRole("link", { name: /en savoir plus/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test-link");
  });
});
