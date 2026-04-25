import { test, expect } from '@playwright/test';

test('google core smoke', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});
