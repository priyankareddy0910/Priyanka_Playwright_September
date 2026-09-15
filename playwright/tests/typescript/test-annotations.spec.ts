import { test, expect } from '@playwright/test';

const loginUrl = 'https://the-internet.herokuapp.com/login';

test('title test', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Feature is not supported in Firefox');
  await page.goto(loginUrl);
  await expect(page).toHaveTitle('The Internet', { timeout: 50000 });
});

test('url test', async ({ page }) => {
  await page.goto(loginUrl);
  await expect(page).toHaveURL(/.*\/login.*/);
});




