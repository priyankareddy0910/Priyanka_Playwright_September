import { test, expect } from '@playwright/test';

test('dropdown core smoke', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/', { waitUntil: 'domcontentloaded' });

  await expect.soft(page).toHaveTitle(/Swag Labs/i);
  console.log('soft assert executed');

  await expect.soft(page.locator('#user-name')).toBeVisible();
  console.log('soft assert 2 executed');
});


  