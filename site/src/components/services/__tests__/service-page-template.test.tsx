import { render, screen } from "@testing-library/react";
import { ServicePageTemplate } from "../service-page-template";
import type { ServicePageData } from "@/data/services/types";

const mockData: ServicePageData = {
  slug: "test-service",
  title: "Test Service",
  description: "Test description",
  metaTitle: "Test Meta Title",
  metaDescription: "Test meta description",
  hero: {
    title: "Test Hero Title",
    subtitle: "Test hero subtitle",
    ctaText: "Test CTA",
  },
  problems: {
    title: "Test Problems Title",
    items: [
      { title: "Problem 1", description: "Description 1" },
      { title: "Problem 2", description: "Description 2" },
    ],
  },
  offers: [
    {
      title: "Offer 1",
      description: "Offer description 1",
      features: ["Feature 1", "Feature 2"],
    },
    {
      title: "Offer 2",
      description: "Offer description 2",
      features: ["Feature 3", "Feature 4"],
    },
  ],
  process: {
    title: "Test Process Title",
    steps: [
      { number: 1, title: "Step 1", description: "Step 1 description" },
      { number: 2, title: "Step 2", description: "Step 2 description" },
    ],
  },
  technologies: ["Tech1", "Tech2"],
  faq: [
    { question: "Question 1?", answer: "Answer 1" },
    { question: "Question 2?", answer: "Answer 2" },
  ],
};

describe("ServicePageTemplate", () => {
  it("renders hero title", () => {
    render(<ServicePageTemplate data={mockData} />);
    expect(screen.getByText("Test Hero Title")).toBeInTheDocument();
  });

  it("renders hero subtitle", () => {
    render(<ServicePageTemplate data={mockData} />);
    expect(screen.getByText("Test hero subtitle")).toBeInTheDocument();
  });

  it("renders problem cards", () => {
    render(<ServicePageTemplate data={mockData} />);
    expect(screen.getByText("Problem 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Problem 2")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
  });

  it("renders offer cards", () => {
    render(<ServicePageTemplate data={mockData} />);
    expect(screen.getByText("Offer 1")).toBeInTheDocument();
    expect(screen.getByText("Offer description 1")).toBeInTheDocument();
    expect(screen.getByText("Feature 1")).toBeInTheDocument();
    expect(screen.getByText("Offer 2")).toBeInTheDocument();
    expect(screen.getByText("Feature 3")).toBeInTheDocument();
  });

  it("renders process steps", () => {
    render(<ServicePageTemplate data={mockData} />);
    // Process section renders both desktop and mobile versions, so use getAllByText
    const step1Headings = screen.getAllByText("Step 1");
    const step1Descriptions = screen.getAllByText("Step 1 description");
    const step2Headings = screen.getAllByText("Step 2");
    const step2Descriptions = screen.getAllByText("Step 2 description");

    expect(step1Headings.length).toBeGreaterThan(0);
    expect(step1Descriptions.length).toBeGreaterThan(0);
    expect(step2Headings.length).toBeGreaterThan(0);
    expect(step2Descriptions.length).toBeGreaterThan(0);
  });

  it("renders FAQ items with details/summary", () => {
    render(<ServicePageTemplate data={mockData} />);
    expect(screen.getByText("Question 1?")).toBeInTheDocument();
    expect(screen.getByText("Answer 1")).toBeInTheDocument();
    expect(screen.getByText("Question 2?")).toBeInTheDocument();
    expect(screen.getByText("Answer 2")).toBeInTheDocument();
  });

  it("renders FAQPage JSON-LD schema", () => {
    render(<ServicePageTemplate data={mockData} />);
    const script = document.querySelector('script[type="application/ld+json"]');
    expect(script).toBeInTheDocument();

    if (script?.textContent) {
      const jsonLd = JSON.parse(script.textContent);
      expect(jsonLd["@type"]).toBe("FAQPage");
      expect(jsonLd.mainEntity).toHaveLength(2);
      expect(jsonLd.mainEntity[0].name).toBe("Question 1?");
      expect(jsonLd.mainEntity[0].acceptedAnswer.text).toBe("Answer 1");
    }
  });

  it("CTA links to /contact with service slug", () => {
    render(<ServicePageTemplate data={mockData} />);
    const ctaLinks = screen.getAllByRole("link", { name: /test cta|réserver un échange/i });
    expect(ctaLinks.length).toBeGreaterThan(0);
    expect(ctaLinks[0]).toHaveAttribute("href", "/contact?sujet=test-service");
  });

  it("renders CTA banner at the bottom", () => {
    render(<ServicePageTemplate data={mockData} />);
    expect(screen.getByText("Prêt à lancer votre projet ?")).toBeInTheDocument();
    expect(
      screen.getByText("Discutons de vos besoins et construisons ensemble la solution adaptée.")
    ).toBeInTheDocument();
  });
});
