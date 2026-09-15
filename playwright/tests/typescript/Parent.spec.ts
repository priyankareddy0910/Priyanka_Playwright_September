import { test, expect } from '@playwright/test';

test('child test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await expect(page).toHaveURL(/\/inventory\.html/);
  await expect(page.locator('.title')).toHaveText('Products');
});

//save the session
//use the saved session
//test skip login



