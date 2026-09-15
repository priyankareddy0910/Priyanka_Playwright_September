import { test, expect, chromium } from '@playwright/test';

test.describe.parallel('Practice Test Login - parallel tests', () => {
    //test.describe.configure({retries:2});
  test('login with student credentials', async ({}) => {
    const browser = await chromium.launch({
      channel: 'msedge',
      headless: false,
    });

    const page = await browser.newPage();
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // Provided credentials
    const username = 'student';
    const password = 'Password123';

    // Fill username and password using common selectors
    const userLocator = page.locator('#username, input[name="username"], input[type="text"]');
    const passLocator = page.locator('#password, input[name="password"], input[type="password"]');

    await userLocator.fill(username);
    await passLocator.fill(password);

    // Submit the form and wait for navigation or response
    await Promise.all([
      page.waitForURL('**/practice-test-login/*', { waitUntil: 'networkidle' }).catch(() => {}),
      page.click('button[type="submit"], button#submit, input[type="submit"]'),
    ]);

    // Basic verify - page should not remain the login URL
    await expect(page).not.toHaveURL('https://practicetestautomation.com/practice-test-login/');

    await browser.close();
  });

  test('login page shows login form', async () => {
    const browser = await chromium.launch({ channel: 'msedge', headless: false });
    const page = await browser.newPage();
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // Verify that the username and password fields are visible
    await expect(page.locator('#username, input[name="username"], input[type="text"]')).toBeVisible();
    await expect(page.locator('#password, input[name="password"], input[type="password"]')).toBeVisible();

    await browser.close();
  });
});







