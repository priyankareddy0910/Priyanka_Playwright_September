import { test, expect, Locator } from '@playwright/test';

test('static select class - retrieve all options and select India', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/dropdown');

  const countryDropdown: Locator = page.locator('#country');
  const allOptions: string[] = await countryDropdown.locator('option').allTextContents();

  console.log('All country options:', allOptions);

  await countryDropdown.selectOption({ label: 'India' });
  await expect(countryDropdown).toHaveValue('IN');
});
