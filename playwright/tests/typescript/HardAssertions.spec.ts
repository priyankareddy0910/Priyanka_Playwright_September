import { test, expect } from '@playwright/test';

const BASE_URL = 'https://practice.sdetunicorns.com';

test('verify different Playwright assertions on home page', async ({ page }) => {
  await page.goto(`${BASE_URL}/`);

  await expect(page).toHaveURL(`${BASE_URL}/`);
  await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');

  const headingText = page.getByRole('heading', { name: 'Think different. Make different.' });
  const getStartedButton = page.locator('#get-started');
  const homeLink = page.getByRole('navigation').getByRole('link', { name: 'Home' });
  const navLinks = page.getByRole('navigation').locator('li');
  const searchIcon = page.locator('header a[href="#"]').first();

  await expect(headingText).toBeVisible();
  await expect(headingText).toContainText('Think different');

  await expect(getStartedButton).toBeVisible();
  await expect(getStartedButton).toBeEnabled();
  await expect(getStartedButton).toHaveAttribute('href', '#get-started');

  await expect(homeLink).toBeVisible();
  await expect(homeLink).toBeEnabled();
  await expect(homeLink).toHaveText('Home');

  await expect(searchIcon).toBeVisible();

  await expect(navLinks).toHaveText([
    'Home',
    'About',
    'Shop',
    'Blog',
    'Contact',
    'My account',
  ]);
});