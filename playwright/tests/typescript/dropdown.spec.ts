import { test, expect } from '@playwright/test';

const DROPDOWN_URL = 'https://the-internet.herokuapp.com/dropdown';

test('verify dropdown selection on public website', async ({ page }) => {
  await page.goto(DROPDOWN_URL);

  const dropdown = page.locator('#dropdown');

  await expect(dropdown).toBeVisible();

  await dropdown.selectOption({ label: 'Option 1' });
  await expect(dropdown).toHaveValue('1');

  await dropdown.selectOption({ value: '2' });
  await expect(dropdown).toHaveValue('2');
});
