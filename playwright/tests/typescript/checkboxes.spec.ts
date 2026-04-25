import { test, expect } from '@playwright/test';

const CHECKBOX_URL = 'https://the-internet.herokuapp.com/checkboxes';

test('verify checkbox handling on public website', async ({ page }) => {
  await page.goto(CHECKBOX_URL);

  const checkboxes = page.locator('input[type="checkbox"]');

  await expect(checkboxes).toHaveCount(2);

  const checkbox1 = checkboxes.nth(0);
  const checkbox2 = checkboxes.nth(1);

  await expect(checkbox1).not.toBeChecked();
  await expect(checkbox2).toBeChecked();

  await checkbox1.check();
  await expect(checkbox1).toBeChecked();

  await checkbox2.uncheck();
  await expect(checkbox2).not.toBeChecked();

  const allCheckboxes = await checkboxes.all();

  for (const checkbox of allCheckboxes) {
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }
});
