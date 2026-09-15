import { test, expect, chromium } from '@playwright/test';

test('launch website in chrome browser', async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveTitle(/Practice Test Automation/);
  await browser.close();
});