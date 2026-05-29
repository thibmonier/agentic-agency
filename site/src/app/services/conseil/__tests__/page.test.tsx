import { render, screen } from "@testing-library/react";
import Page from "../page";

// Mock the template component
jest.mock("@/components/services/service-page-template", () => ({
  ServicePageTemplate: ({ data }: { data: { title: string; slug: string } }) => (
    <div data-testid="service-template">
      <h1>{data.title}</h1>
      <a href={`/contact?sujet=${data.slug}`}>CTA</a>
    </div>
  ),
}));

describe("ConseilPage", () => {
  it("renders the service template with correct data", () => {
    render(<Page />);
    expect(screen.getByTestId("service-template")).toBeInTheDocument();
    expect(screen.getByText("Conseil & accompagnement")).toBeInTheDocument();
  });

  it("has correct CTA link", () => {
    render(<Page />);
    expect(screen.getByText("CTA")).toHaveAttribute("href", "/contact?sujet=conseil");
  });
});
