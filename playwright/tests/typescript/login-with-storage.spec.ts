import { test, expect } from '@playwright/test';

// Use the saved storage state created by Auth.spec.ts
test.use({ storageState: 'auth/sauce-session.json'});

test('skip login using saved storage state', async ({ page }) => {
  // Directly open the protected page - auth cookies/localStorage are restored
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(page).toHaveURL(/.*inventory\.html/);
  //await expect(page.locator('.title')).toHaveText('Products');
});
