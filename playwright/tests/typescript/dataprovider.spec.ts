import { test, expect } from '@playwright/test';

type LoginData = {
  username: string;
  password: string;
  expectedUrl?: string;
  expectedError?: string;
};

const loginData: LoginData[] = [
  {
    username: 'standard_user',
    password: 'secret_sauce',
    expectedUrl: 'https://www.saucedemo.com/inventory.html',
  },
  {
    username: 'locked_out_user',
    password: 'secret_sauce',
    expectedError: 'Epic sadface: Sorry, this user has been locked out.',
  },
];

for (const data of loginData) {
  test(`login test for ${data.username}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    const usernameInput = page.locator('#user-name');
    const passwordInput = page.locator('#password');
    const loginButton = page.locator('#login-button');

    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(loginButton).toBeEnabled();

    await usernameInput.fill(data.username);
    await passwordInput.fill(data.password);
    await loginButton.click();

    if (data.expectedUrl) {
      await expect(page).toHaveURL(data.expectedUrl);
      await expect(page.locator('.title')).toHaveText('Products');
    }

    if (data.expectedError) {
      const errorMessage = page.locator('[data-test="error"]');
      await expect(errorMessage).toBeVisible();
      await expect(errorMessage).toHaveText(data.expectedError);
    }
  });
}
