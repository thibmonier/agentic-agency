import { JsonLd } from "./json-ld";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: `https://agentic-agency.fr${item.href}` } : {}),
    })),
  };

  return <JsonLd data={schema} />;
}
