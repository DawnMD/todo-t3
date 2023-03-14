import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a "TODO List" to be in the viewport.
  await expect(page.getByText(/todo list/i)).toBeInViewport();
});
