import { trackEvent } from "../analytics";

describe("analytics", () => {
  it("calls window.plausible when available", () => {
    const mockPlausible = jest.fn();
    Object.defineProperty(window, "plausible", { value: mockPlausible, writable: true });

    trackEvent("CTA Clicked", { location: "hero" });

    expect(mockPlausible).toHaveBeenCalledWith("CTA Clicked", { props: { location: "hero" } });

    // Cleanup
    Object.defineProperty(window, "plausible", { value: undefined, writable: true });
  });

  it("does not throw when plausible is not available", () => {
    Object.defineProperty(window, "plausible", { value: undefined, writable: true });
    expect(() => trackEvent("test")).not.toThrow();
  });
});
