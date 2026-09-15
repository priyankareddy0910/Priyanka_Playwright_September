import { test, expect, chromium } from '@playwright/test';

test('getByRole locators on a real website', async ({ page }) => {
  // Website for demo:
  // https://practicetestautomation.com/practice-test-login/
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // textbox role with accessible name from label
  const userName = page.getByRole('textbox', { name: 'Username' });

  // second textbox can also be located by label text
  const password = page.getByLabel('Password');

  // button role with visible text as accessible name
  const submitButton = page.getByRole('button', { name: 'Submit' });

  await userName.fill('student');
  await password.fill('Password123');
  await submitButton.click();

  // heading role after successful login
  await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();

  // link role after login
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();

  // additional assertion
  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
});

test('launch chromium browser with chrome channel', async () => {
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await expect(page).toHaveTitle(/Test Login/);

  await browser.close();
});
