import { test, expect } from '@playwright/test';

test('dropdown core smoke', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');

  const inputBox = page
    .frameLocator("frame[src='frame_1.html']")
    .locator('input[name="mytext1"]');

  await inputBox.fill('priyanka');
  await expect(inputBox).toHaveValue('priyanka');
});
