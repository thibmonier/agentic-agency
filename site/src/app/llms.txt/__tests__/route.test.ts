import { GET } from "../route";

describe("/llms.txt route", () => {
  it("returns 200 status", async () => {
    const response = await GET();
    expect(response.status).toBe(200);
  });

  it("returns text/plain content type", async () => {
    const response = await GET();
    expect(response.headers.get("Content-Type")).toBe("text/plain; charset=utf-8");
  });

  it("includes Cache-Control header", async () => {
    const response = await GET();
    expect(response.headers.get("Cache-Control")).toBe("public, max-age=86400");
  });

  it("contains required content sections", async () => {
    const response = await GET();
    const text = await response.text();

    expect(text).toContain("Agentic Agency");
    expect(text).toContain("## Services");
    expect(text).toContain("## Stacks");
    expect(text).toContain("## URLs");
    expect(text).toContain("## Citation");
  });

  it("lists correct services", async () => {
    const response = await GET();
    const text = await response.text();

    expect(text).toContain("Développement web");
    expect(text).toContain("Applications métier");
    expect(text).toContain("Applications mobiles");
    expect(text).toContain("Conseil");
  });

  it("lists correct technologies", async () => {
    const response = await GET();
    const text = await response.text();

    expect(text).toContain("Next.js");
    expect(text).toContain("Symfony");
    expect(text).toContain("React");
    expect(text).toContain("Flutter");
    expect(text).toContain("TypeScript");
    expect(text).toContain("Tailwind CSS");
  });

  it("includes site URLs", async () => {
    const response = await GET();
    const text = await response.text();

    expect(text).toContain("https://agentic-agency.fr");
    expect(text).toContain("https://agentic-agency.fr/blog");
    expect(text).toContain("https://agentic-agency.fr/contact");
  });
});
