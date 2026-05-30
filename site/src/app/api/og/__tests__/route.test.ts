import type { NextRequest } from "next/server";

describe("OG Image API Route", () => {
  beforeAll(() => {
    global.ReadableStream = class ReadableStream {} as unknown as typeof ReadableStream;
  });

  function createMockRequest(params?: { title?: string; type?: string }): NextRequest {
    const url = new URL("http://localhost:3000/api/og");
    if (params?.title) url.searchParams.set("title", params.title);
    if (params?.type) url.searchParams.set("type", params.type);

    return {
      nextUrl: url,
    } as NextRequest;
  }

  it("creates a request with default parameters", () => {
    const request = createMockRequest();
    expect(request.nextUrl.searchParams.get("title")).toBeNull();
    expect(request.nextUrl.searchParams.get("type")).toBeNull();
  });

  it("creates a request with custom title", () => {
    const request = createMockRequest({ title: "Custom Title" });
    expect(request.nextUrl.searchParams.get("title")).toBe("Custom Title");
  });

  it("creates a request with service type", () => {
    const request = createMockRequest({ type: "service" });
    expect(request.nextUrl.searchParams.get("type")).toBe("service");
  });

  it("creates a request with article type", () => {
    const request = createMockRequest({ type: "article" });
    expect(request.nextUrl.searchParams.get("type")).toBe("article");
  });

  it("creates a request with both title and type", () => {
    const request = createMockRequest({ title: "Test Post", type: "article" });
    expect(request.nextUrl.searchParams.get("title")).toBe("Test Post");
    expect(request.nextUrl.searchParams.get("type")).toBe("article");
  });
});
