import { test, expect } from '@playwright/test';

test('google core smoke', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');

  const checkbox = page
    .frameLocator("frame[src='frame_3.html']")
    .frameLocator('iframe')
    .getByRole('checkbox', { name: 'I am a human' });

  await checkbox.check();
  await expect(checkbox).toBeChecked();
});
