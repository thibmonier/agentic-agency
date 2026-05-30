import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ShareButton } from "../share-button";
import { trackEvent } from "@/lib/analytics";

jest.mock("@/lib/analytics", () => ({
  trackEvent: jest.fn(),
}));

describe("ShareButton", () => {
  const mockUrl = "https://agentic-agency.fr/blog/test-article";
  const mockTitle = "Test Article";

  beforeEach(() => {
    jest.clearAllMocks();
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockResolvedValue(undefined),
      },
    });
    global.window.open = jest.fn();
  });

  it("renders both share buttons", () => {
    render(<ShareButton url={mockUrl} title={mockTitle} />);

    expect(screen.getByText("Partager sur LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("Copier le lien")).toBeInTheDocument();
  });

  it("has correct aria-labels", () => {
    render(<ShareButton url={mockUrl} title={mockTitle} />);

    expect(screen.getByLabelText("Partager sur LinkedIn")).toBeInTheDocument();
    expect(screen.getByLabelText("Copier le lien")).toBeInTheDocument();
  });

  it("opens LinkedIn share popup with UTM parameters", () => {
    render(<ShareButton url={mockUrl} title={mockTitle} />);

    const linkedInButton = screen.getByText("Partager sur LinkedIn");
    fireEvent.click(linkedInButton);

    const expectedUrl =
      "https://agentic-agency.fr/blog/test-article?utm_source=linkedin&utm_medium=social&utm_campaign=blog";
    expect(window.open).toHaveBeenCalledWith(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(expectedUrl)}`,
      "_blank",
      "noopener,width=600,height=500"
    );
  });

  it("tracks LinkedIn share event", () => {
    render(<ShareButton url={mockUrl} title={mockTitle} />);

    const linkedInButton = screen.getByText("Partager sur LinkedIn");
    fireEvent.click(linkedInButton);

    expect(trackEvent).toHaveBeenCalledWith("share", {
      platform: "linkedin",
      article: mockTitle,
    });
  });

  it("copies link to clipboard", async () => {
    render(<ShareButton url={mockUrl} title={mockTitle} />);

    const copyButton = screen.getByText("Copier le lien");
    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockUrl);
    });
  });

  it("tracks copy link event", async () => {
    render(<ShareButton url={mockUrl} title={mockTitle} />);

    const copyButton = screen.getByText("Copier le lien");
    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(trackEvent).toHaveBeenCalledWith("copy_link", {
        article: mockTitle,
      });
    });
  });

  it("shows toast message after copying", async () => {
    render(<ShareButton url={mockUrl} title={mockTitle} />);

    const copyButton = screen.getByText("Copier le lien");
    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(screen.getByText("Lien copié !")).toBeInTheDocument();
    });
  });

  it("hides toast after 2 seconds", async () => {
    jest.useFakeTimers();
    render(<ShareButton url={mockUrl} title={mockTitle} />);

    const copyButton = screen.getByText("Copier le lien");
    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(screen.getByText("Lien copié !")).toBeInTheDocument();
    });

    jest.advanceTimersByTime(2000);

    await waitFor(() => {
      expect(screen.queryByText("Lien copié !")).not.toBeInTheDocument();
    });

    jest.useRealTimers();
  });
});
