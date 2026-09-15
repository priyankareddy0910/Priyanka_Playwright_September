import { test, expect } from '@playwright/test';

test('validate form elements on public page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const usernameField = page.locator('#user-name');
  const passwordField = page.locator('#password');
  const loginButton = page.locator('#login-button');

  await expect(page).toHaveTitle(/Swag Labs/i);
  await expect(usernameField).toBeVisible();
  await expect(passwordField).toBeVisible();
  await expect(loginButton).toBeVisible();

  await usernameField.fill('standard_user');
  await passwordField.fill('secret_sauce');
  await expect(usernameField).toHaveValue('standard_user');
  await expect(passwordField).toHaveValue('secret_sauce');

  await loginButton.click();
  await expect(page).toHaveURL(/\/inventory\.html/);
});
