import { test, expect } from '@playwright/test';

test('verify page scrolling in detail', async ({ page }) => {
  await page.goto('https://www.orangehrm.com/en/contact-sales/', {
    waitUntil: 'domcontentloaded',
  });

  await expect(page).toHaveURL(/.*contact-sales/);

  const careersLink = page.locator('a[href*="/company/careers"]').last();
  const footerHeading = page.getByRole('heading', { name: 'OrangeHRM' }).last();

  await careersLink.scrollIntoViewIfNeeded();
  await expect(careersLink).toBeVisible();

  await page.mouse.wheel(0, 1500);

  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  await expect(footerHeading).toBeVisible();

  await page.evaluate(() => {
    window.scrollTo(0, 0);
  });

  await expect(page.locator('header')).toBeVisible();
});
