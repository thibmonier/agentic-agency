import { render, screen } from "@testing-library/react";
import { TestimonialsSection } from "../testimonials-section";
import type { Testimonial } from "@/data/testimonials";

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode }) => (
      <div {...props}>{children}</div>
    ),
  },
}));

describe("TestimonialsSection", () => {
  const mockTestimonials: Testimonial[] = [
    {
      quote: "Great service and amazing results.",
      name: "John Doe",
      role: "CEO",
      company: "TechCorp",
      service: "Développement web",
    },
    {
      quote: "Professional team with excellent delivery.",
      name: "Jane Smith",
      role: "CTO",
      company: "StartupX",
      service: "Application métier",
    },
    {
      quote: "Transformed our development process.",
      name: "Bob Johnson",
      role: "VP Engineering",
      service: "Conseil",
    },
  ];

  it("renders section title and subtitle", () => {
    render(<TestimonialsSection items={mockTestimonials} />);

    expect(screen.getByText("Ce que disent nos clients")).toBeInTheDocument();
    expect(
      screen.getByText("Des résultats concrets pour des entreprises ambitieuses")
    ).toBeInTheDocument();
  });

  it("renders all testimonials", () => {
    render(<TestimonialsSection items={mockTestimonials} />);

    expect(screen.getByText("Great service and amazing results.")).toBeInTheDocument();
    expect(screen.getByText("Professional team with excellent delivery.")).toBeInTheDocument();
    expect(screen.getByText("Transformed our development process.")).toBeInTheDocument();
  });

  it("renders names and roles", () => {
    render(<TestimonialsSection items={mockTestimonials} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("CEO, TechCorp")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("CTO, StartupX")).toBeInTheDocument();
    expect(screen.getByText("Bob Johnson")).toBeInTheDocument();
    expect(screen.getByText("VP Engineering")).toBeInTheDocument();
  });

  it("renders service tags", () => {
    render(<TestimonialsSection items={mockTestimonials} />);

    expect(screen.getByText("Développement web")).toBeInTheDocument();
    expect(screen.getByText("Application métier")).toBeInTheDocument();
    expect(screen.getByText("Conseil")).toBeInTheDocument();
  });

  it("renders quotation marks", () => {
    const { container } = render(<TestimonialsSection items={mockTestimonials} />);

    const quotationMarks = container.querySelectorAll(".font-serif");
    expect(quotationMarks).toHaveLength(3);
    quotationMarks.forEach((mark) => {
      expect(mark).toHaveTextContent("«");
    });
  });

  it("returns null when fewer than 3 testimonials", () => {
    const twoTestimonials = mockTestimonials.slice(0, 2);
    const { container } = render(<TestimonialsSection items={twoTestimonials} />);

    expect(container.firstChild).toBeNull();
  });

  it("returns null when empty array", () => {
    const { container } = render(<TestimonialsSection items={[]} />);

    expect(container.firstChild).toBeNull();
  });

  it("uses default testimonials when items prop is not provided", () => {
    render(<TestimonialsSection />);

    expect(screen.getByText(/Ce que disent nos clients/)).toBeInTheDocument();
  });

  it("renders with mobile scroll styles", () => {
    const { container } = render(<TestimonialsSection items={mockTestimonials} />);

    const scrollContainer = container.querySelector(".overflow-x-auto");
    expect(scrollContainer).toBeInTheDocument();
    expect(scrollContainer).toHaveClass("snap-x", "snap-mandatory");
  });

  it("renders testimonial cards with snap-center", () => {
    const { container } = render(<TestimonialsSection items={mockTestimonials} />);

    const cards = container.querySelectorAll(".snap-center");
    expect(cards).toHaveLength(3);
  });
});
