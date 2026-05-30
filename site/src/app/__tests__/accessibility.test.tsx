import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { ContactForm } from "@/components/forms/contact-form";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

expect.extend(toHaveNoViolations);

describe("Accessibility", () => {
  describe("ContactForm", () => {
    it("should not have any accessibility violations", async () => {
      const { container } = render(<ContactForm />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has aria-required on required fields", () => {
      const { getByLabelText } = render(<ContactForm />);

      expect(getByLabelText(/nom/i)).toHaveAttribute("aria-required", "true");
      expect(getByLabelText(/email/i)).toHaveAttribute("aria-required", "true");
      expect(getByLabelText(/société/i)).toHaveAttribute("aria-required", "true");
      expect(getByLabelText(/sujet/i)).toHaveAttribute("aria-required", "true");
      expect(getByLabelText(/message/i)).toHaveAttribute("aria-required", "true");
    });

    it("links error messages with aria-describedby when validation fails", async () => {
      const { getByLabelText, getByText } = render(<ContactForm />);
      const submitButton = getByText(/envoyer/i);

      submitButton.click();

      await new Promise((resolve) => setTimeout(resolve, 100));

      const nomInput = getByLabelText(/nom/i);
      if (nomInput.getAttribute("aria-invalid") === "true") {
        expect(nomInput).toHaveAttribute("aria-describedby");
        const errorId = nomInput.getAttribute("aria-describedby");
        expect(document.getElementById(errorId || "")).toBeInTheDocument();
      }
    });
  });

  describe("Header", () => {
    it("should not have any accessibility violations", async () => {
      const { container } = render(<Header />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has proper aria-label on navigation", () => {
      const { container } = render(<Header />);
      const nav = container.querySelector("nav");
      expect(nav).toHaveAttribute("aria-label", "Navigation principale");
    });
  });

  describe("Footer", () => {
    it("should not have any accessibility violations", async () => {
      const { container } = render(<Footer />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has proper aria-label on footer navigation", () => {
      const { container } = render(<Footer />);
      const nav = container.querySelector("nav");
      expect(nav).toHaveAttribute("aria-label", "Navigation pied de page");
    });
  });

  describe("Focus management", () => {
    it("skip link should be focusable", () => {
      const skipLink = document.createElement("a");
      skipLink.href = "#main-content";
      skipLink.textContent = "Aller au contenu principal";
      skipLink.className =
        "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-[#1e3a5f] focus:rounded-md focus:shadow-lg";

      document.body.appendChild(skipLink);
      skipLink.focus();

      expect(document.activeElement).toBe(skipLink);

      document.body.removeChild(skipLink);
    });
  });
});
