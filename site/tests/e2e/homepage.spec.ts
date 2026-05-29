import { test, expect } from "@playwright/test";

test.describe("Homepage E2E Tests", () => {
  test("a) Page loads with correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Agentic Agency/i);
  });

  test("b) All sections are visible", async ({ page }) => {
    await page.goto("/");

    // Hero section (no ID, check h1)
    const heroHeading = page.locator("h1").first();
    await expect(heroHeading).toBeVisible();

    // All sections with IDs
    const sections = [
      "confiance",
      "delivery",
      "offres",
      "cta-milieu",
      "technologies",
      "valeurs",
      "approche",
      "contact",
    ];

    for (const sectionId of sections) {
      const section = page.locator(`#${sectionId}`);
      await expect(section).toBeVisible();
    }
  });

  test("c) Sections appear in correct order", async ({ page }) => {
    await page.goto("/");

    // Wait for page to be fully loaded
    await page.waitForLoadState("networkidle");

    // Get sections in expected order (using sections that have IDs)
    const sectionIds = [
      "confiance",
      "delivery",
      "offres",
      "cta-milieu",
      "technologies",
      "valeurs",
      "approche",
      "contact",
    ];

    let previousTop = -1;

    for (const sectionId of sectionIds) {
      const section = page.locator(`#${sectionId}`);
      const box = await section.boundingBox();

      expect(box).not.toBeNull();
      if (box) {
        // Each section should be below the previous one
        expect(box.y).toBeGreaterThan(previousTop);
        previousTop = box.y;
      }
    }
  });

  test("d) Navigation links work - scroll to #offres", async ({ page }) => {
    await page.goto("/");

    // Find and click the "Offres" link in the navigation
    const offresLink = page.locator('a[href="#offres"]').first();
    await expect(offresLink).toBeVisible();
    await offresLink.click();

    // Wait for scroll animation to complete
    await page.waitForTimeout(500);

    // Verify that the offres section is in viewport
    const offresSection = page.locator("#offres");
    await expect(offresSection).toBeInViewport();
  });

  test("e) CTA links exist and point to #contact", async ({ page }) => {
    await page.goto("/");

    // Find all links that point to #contact
    const contactLinks = page.locator('a[href="#contact"]');
    const count = await contactLinks.count();

    // Should have at least one CTA link to contact
    expect(count).toBeGreaterThan(0);

    // Verify at least one is visible
    const firstLink = contactLinks.first();
    await expect(firstLink).toBeVisible();
  });

  test("f) Responsive mobile - no horizontal scroll", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Wait for page to load
    await page.waitForLoadState("networkidle");

    // Check that body width doesn't exceed viewport
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(375);

    // Verify no horizontal scrollbar
    const hasHorizontalScroll = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(hasHorizontalScroll).toBe(false);
  });

  test("g) Blog page exists and loads correctly", async ({ page }) => {
    await page.goto("/blog");

    // Verify heading is visible
    const heading = page.locator("h1", { hasText: /Notre Blog/i });
    await expect(heading).toBeVisible();

    // Verify page title contains relevant keywords
    await expect(page).toHaveTitle(/Blog|Agentic Agency/i);
  });
});
