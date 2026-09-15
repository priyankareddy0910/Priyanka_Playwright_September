import { test, expect } from '@playwright/test';

test('verify radio button selection on public website', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const maleRadioButton = page.locator('#male');
  const femaleRadioButton = page.locator('#female');

  await expect(maleRadioButton).toBeVisible();
  await expect(femaleRadioButton).toBeVisible();

  await maleRadioButton.check();
  await expect(maleRadioButton).toBeChecked();
  await expect(femaleRadioButton).not.toBeChecked();

  await femaleRadioButton.check();
  await expect(femaleRadioButton).toBeChecked();
  await expect(maleRadioButton).not.toBeChecked();
});