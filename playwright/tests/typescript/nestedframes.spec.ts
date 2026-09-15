import { test, expect } from '@playwright/test';

test('google core smoke', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/nested_frames');

  const middleFrame = page
    .frameLocator('frame[name="frame-top"]')
    .frameLocator('frame[name="frame-middle"]');

  await expect(middleFrame.locator('body')).toHaveText('MIDDLE');
});
