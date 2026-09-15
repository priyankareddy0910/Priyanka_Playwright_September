import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.saucedemo.com/';
const STORAGE_STATE_PATH = 'auth/sauce-session.json';

test('create authenticated SauceDemo session and save storage state', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/',{timeout:15000});//10000

  const usernameInput = page.locator('#user-name');
  const passwordInput =page.locator('#password');
  const loginbutton=page.locator('#login-button');

  await expect(usernameInput).toBeVisible({timeout:15000});
  await expect(passwordInput).toBeVisible();
   await expect(loginbutton).toBeVisible();

   await usernameInput.fill('standard_user');
   await passwordInput.fill('secret_sauce');
   await loginbutton.click({timeout:5000});

   expect(page.locator('.title')).toHaveText('Products');
   page.context().storageState({path:STORAGE_STATE_PATH});

  
}); //30
