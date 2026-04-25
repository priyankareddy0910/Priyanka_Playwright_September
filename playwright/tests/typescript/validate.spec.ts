import { test, expect } from '@playwright/test';

test('validate form elements on public page', async ({ page }) => {
  await page.goto('https://practice.automationtesting.in/my-account/');

  const loginSection = page.locator('div').filter({ has: page.getByRole('heading', { name: 'Login' }) }).first();
  const emailLabel = loginSection.getByText('Username or email address *');
  const emailField = loginSection.getByRole('textbox', { name: 'Username or email address *' });
  const passwordField = loginSection.getByRole('textbox', { name: 'Password *' }).first();
  const loginButton = loginSection.getByRole('button', { name: 'Login' });
  const rememberMeCheckbox = loginSection.getByRole('checkbox', { name: 'Remember me' });
  const lostPasswordLink = loginSection.getByRole('link', { name: 'Lost your password?' });

  await expect(page).toHaveURL(/.*my-account/);
  await expect(page).toHaveTitle(/My Account/i);

  await expect(emailField).toBeVisible();
  await expect(passwordField).toBeVisible();
  await expect(loginButton).toBeVisible();
  await expect(loginButton).toHaveText('Login');
  await expect(emailLabel).toBeVisible();

  await emailField.fill('priyanka@test.com');
  await expect(emailField).toHaveValue('priyanka@test.com');

  await passwordField.fill('test@123');
  await expect(passwordField).toHaveValue('test@123');

  await rememberMeCheckbox.check();
  await expect(rememberMeCheckbox).toBeChecked();

  await expect(lostPasswordLink).toBeVisible();
  await expect(lostPasswordLink).toHaveAttribute('href', expect.stringContaining('lost-password'));
});
