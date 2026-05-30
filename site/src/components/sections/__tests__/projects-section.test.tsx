import { render, screen } from "@testing-library/react";
import { ProjectsSection } from "../projects-section";
import type { Project } from "@/data/projects";

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode }) => (
      <div {...props}>{children}</div>
    ),
  },
}));

describe("ProjectsSection", () => {
  const mockProjects: Project[] = [
    {
      title: "Plateforme logistique temps réel",
      sector: "Pharmacie",
      impact: "Réduction de 40% des délais de livraison",
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
      service: "Application métier",
    },
    {
      title: "Refonte e-commerce B2B",
      sector: "Agroalimentaire",
      impact: "Augmentation de 60% du taux de conversion",
      technologies: ["Symfony", "API Platform", "React"],
      service: "Développement web",
    },
    {
      title: "Application mobile de suivi terrain",
      sector: "Industrie",
      impact: "Déploiement 3x plus rapide des mises à jour",
      technologies: ["Flutter", "Dart", "Firebase"],
      service: "Application mobile",
    },
  ];

  it("renders section title and subtitle", () => {
    render(<ProjectsSection items={mockProjects} />);

    expect(screen.getByText("Nos réalisations")).toBeInTheDocument();
    expect(screen.getByText("Des projets concrets, des résultats mesurables")).toBeInTheDocument();
  });

  it("renders all projects with titles", () => {
    render(<ProjectsSection items={mockProjects} />);

    expect(screen.getByText("Plateforme logistique temps réel")).toBeInTheDocument();
    expect(screen.getByText("Refonte e-commerce B2B")).toBeInTheDocument();
    expect(screen.getByText("Application mobile de suivi terrain")).toBeInTheDocument();
  });

  it("renders project impacts", () => {
    render(<ProjectsSection items={mockProjects} />);

    expect(screen.getByText("Réduction de 40% des délais de livraison")).toBeInTheDocument();
    expect(screen.getByText("Augmentation de 60% du taux de conversion")).toBeInTheDocument();
    expect(screen.getByText("Déploiement 3x plus rapide des mises à jour")).toBeInTheDocument();
  });

  it("renders sector badges", () => {
    render(<ProjectsSection items={mockProjects} />);

    expect(screen.getByText("Pharmacie")).toBeInTheDocument();
    expect(screen.getByText("Agroalimentaire")).toBeInTheDocument();
    expect(screen.getByText("Industrie")).toBeInTheDocument();
  });

  it("renders technology tags", () => {
    render(<ProjectsSection items={mockProjects} />);

    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Symfony")).toBeInTheDocument();
    expect(screen.getByText("Flutter")).toBeInTheDocument();
  });

  it("renders service tags", () => {
    render(<ProjectsSection items={mockProjects} />);

    expect(screen.getByText("Application métier")).toBeInTheDocument();
    expect(screen.getByText("Développement web")).toBeInTheDocument();
    expect(screen.getByText("Application mobile")).toBeInTheDocument();
  });

  it("returns null when fewer than 3 projects", () => {
    const twoProjects = mockProjects.slice(0, 2);
    const { container } = render(<ProjectsSection items={twoProjects} />);

    expect(container.firstChild).toBeNull();
  });

  it("returns null when empty array", () => {
    const { container } = render(<ProjectsSection items={[]} />);

    expect(container.firstChild).toBeNull();
  });

  it("uses default projects when items prop is not provided", () => {
    render(<ProjectsSection />);

    expect(screen.getByText(/Nos réalisations/)).toBeInTheDocument();
  });

  it("renders with mobile scroll styles", () => {
    const { container } = render(<ProjectsSection items={mockProjects} />);

    const scrollContainer = container.querySelector(".overflow-x-auto");
    expect(scrollContainer).toBeInTheDocument();
    expect(scrollContainer).toHaveClass("snap-x", "snap-mandatory");
  });

  it("renders project cards with snap-center", () => {
    const { container } = render(<ProjectsSection items={mockProjects} />);

    const cards = container.querySelectorAll(".snap-center");
    expect(cards).toHaveLength(3);
  });
});
