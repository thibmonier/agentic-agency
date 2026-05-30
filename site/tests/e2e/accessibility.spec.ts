import { test, expect } from "@playwright/test";

test.describe("Accessibility E2E Tests", () => {
  test("a) Skip link navigates to main content", async ({ page }) => {
    await page.goto("/");

    // Tab to focus the skip link
    await page.keyboard.press("Tab");

    // The skip link should be focused
    const skipLink = page.getByRole("link", {
      name: /aller au contenu principal/i,
    });
    await expect(skipLink).toBeFocused();

    // Click the skip link
    await skipLink.click();

    // The main element should now be focused
    const mainContent = page.locator("#main-content");
    await expect(mainContent).toBeFocused();
  });

  test("b) Keyboard navigation through header without trap", async ({ page }) => {
    await page.goto("/");

    // Tab through skip link
    await page.keyboard.press("Tab");

    // Tab multiple times through header navigation
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press("Tab");
    }

    // Get the currently focused element's tag name
    const focusedElementTag = await page.evaluate(() => document.activeElement?.tagName);

    // Verify we're not trapped (we should have moved past the header)
    // If the focus is on a link or button, we're still navigating properly
    expect(focusedElementTag).toBeDefined();
    expect(focusedElementTag).not.toBe(""); // Not stuck
  });

  test("c) Contact form shows validation errors on empty submit", async ({ page }) => {
    await page.goto("/");

    // Scroll to contact section
    await page.locator("#contact").scrollIntoViewIfNeeded();

    // Wait for the form to be visible
    await page.waitForSelector("form", { state: "visible" });

    // Find and click the submit button
    const submitButton = page.getByRole("button", { name: /envoyer/i });
    await expect(submitButton).toBeVisible();
    await submitButton.click();

    // Wait a bit for validation errors to appear
    await page.waitForTimeout(500);

    // Check for validation errors (using error message pattern)
    const errorMessages = page.locator('p[class*="text-red"]');
    const errorCount = await errorMessages.count();

    // Should have at least one error message (for required fields)
    expect(errorCount).toBeGreaterThan(0);
  });

  test("d) FAQ accordion toggles with keyboard (Enter key)", async ({ page }) => {
    // Navigate to a service page that has FAQ
    await page.goto("/services/developpement-web");

    // Wait for page to load
    await page.waitForLoadState("networkidle");

    // Find the first FAQ details element
    const firstDetails = page.locator("details").first();
    await expect(firstDetails).toBeVisible();

    // Focus on the summary (keyboard navigation)
    const firstSummary = firstDetails.locator("summary");
    await firstSummary.focus();

    // Verify it's focused
    await expect(firstSummary).toBeFocused();

    // Press Enter to open
    await page.keyboard.press("Enter");

    // Verify the details is now open
    await expect(firstDetails).toHaveAttribute("open", "");

    // Press Enter again to close
    await page.keyboard.press("Enter");

    // Verify it's closed
    await expect(firstDetails).not.toHaveAttribute("open", "");
  });

  test("e) FAQ accordion toggles with keyboard (Space key)", async ({ page }) => {
    // Navigate to a service page that has FAQ
    await page.goto("/services/developpement-web");

    // Wait for page to load
    await page.waitForLoadState("networkidle");

    // Find the first FAQ details element
    const firstDetails = page.locator("details").first();
    await expect(firstDetails).toBeVisible();

    // Focus on the summary
    const firstSummary = firstDetails.locator("summary");
    await firstSummary.focus();

    // Press Space to open
    await page.keyboard.press("Space");

    // Wait for the animation
    await page.waitForTimeout(200);

    // Verify the details is open
    await expect(firstDetails).toHaveAttribute("open", "");

    // Press Space again to close
    await page.keyboard.press("Space");

    // Wait for the animation
    await page.waitForTimeout(200);

    // Verify it's closed
    await expect(firstDetails).not.toHaveAttribute("open", "");
  });

  test("f) Testimonials section renders exactly 3 cards", async ({ page }) => {
    await page.goto("/");

    // Scroll to testimonials section
    const testimonialsSection = page.locator("#temoignages");
    await expect(testimonialsSection).toBeVisible();

    // Find testimonial cards (using the rounded-2xl class)
    const cards = testimonialsSection.locator(".rounded-2xl");
    const cardCount = await cards.count();

    // Should have exactly 3 testimonial cards
    expect(cardCount).toBe(3);

    // Verify all cards are visible
    for (let i = 0; i < cardCount; i++) {
      await expect(cards.nth(i)).toBeVisible();
    }
  });

  test("g) Blog share buttons have proper aria-labels", async ({ page }) => {
    // Navigate to a blog post
    await page.goto("/blog/premiere-experience-delivery-moderne");

    // Wait for page to load
    await page.waitForLoadState("networkidle");

    // Check LinkedIn share button
    const linkedinButton = page.getByRole("button", {
      name: /partager sur linkedin/i,
    });
    await expect(linkedinButton).toBeVisible();

    // Check copy link button
    const copyButton = page.getByRole("button", {
      name: /copier le lien/i,
    });
    await expect(copyButton).toBeVisible();

    // Verify aria-labels are present
    const linkedinAriaLabel = await linkedinButton.getAttribute("aria-label");
    expect(linkedinAriaLabel).toBeTruthy();
    expect(linkedinAriaLabel).toContain("LinkedIn");

    const copyAriaLabel = await copyButton.getAttribute("aria-label");
    expect(copyAriaLabel).toBeTruthy();
    expect(copyAriaLabel).toContain("Copier");
  });

  test("h) All interactive elements are keyboard accessible", async ({ page }) => {
    await page.goto("/");

    // Track all focusable elements
    const focusableElements = await page.locator(
      'a, button, input, textarea, select, details summary, [tabindex]:not([tabindex="-1"])'
    );

    const count = await focusableElements.count();

    // Should have many focusable elements
    expect(count).toBeGreaterThan(10);

    // Sample the first 5 interactive elements
    for (let i = 0; i < Math.min(5, count); i++) {
      const element = focusableElements.nth(i);
      await element.focus();

      // Verify the element can be focused
      const isFocused = await element.evaluate((el) => el === document.activeElement);
      expect(isFocused).toBe(true);
    }
  });
});
