import { render } from "@testing-library/react";
import { JsonLd } from "../json-ld";
import { BreadcrumbJsonLd } from "../breadcrumb-jsonld";

describe("JsonLd", () => {
  it("renders valid JSON-LD script tag", () => {
    const testData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Test Organization",
    };

    const { container } = render(<JsonLd data={testData} />);
    const script = container.querySelector('script[type="application/ld+json"]');

    expect(script).toBeInTheDocument();
    expect(script?.textContent).toBe(JSON.stringify(testData));
  });

  it("handles nested objects correctly", () => {
    const complexData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      author: {
        "@type": "Organization",
        name: "Test",
      },
    };

    const { container } = render(<JsonLd data={complexData} />);
    const script = container.querySelector('script[type="application/ld+json"]');

    expect(script?.textContent).toBe(JSON.stringify(complexData));
  });
});

describe("BreadcrumbJsonLd", () => {
  it("renders breadcrumb list with items", () => {
    const items = [
      { name: "Home", href: "/" },
      { name: "Blog", href: "/blog" },
      { name: "Article" },
    ];

    const { container } = render(<BreadcrumbJsonLd items={items} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const data = JSON.parse(script?.textContent || "{}");

    expect(data["@type"]).toBe("BreadcrumbList");
    expect(data.itemListElement).toHaveLength(3);
    expect(data.itemListElement[0].name).toBe("Home");
    expect(data.itemListElement[0].item).toBe("https://agentic-agency.fr/");
    expect(data.itemListElement[2]).not.toHaveProperty("item");
  });

  it("sets correct positions for breadcrumb items", () => {
    const items = [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
    ];

    const { container } = render(<BreadcrumbJsonLd items={items} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const data = JSON.parse(script?.textContent || "{}");

    expect(data.itemListElement[0].position).toBe(1);
    expect(data.itemListElement[1].position).toBe(2);
  });

  it("omits item property for last breadcrumb without href", () => {
    const items = [{ name: "Home", href: "/" }, { name: "Current Page" }];

    const { container } = render(<BreadcrumbJsonLd items={items} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const data = JSON.parse(script?.textContent || "{}");

    expect(data.itemListElement[1]).toHaveProperty("name", "Current Page");
    expect(data.itemListElement[1]).not.toHaveProperty("item");
  });
});
