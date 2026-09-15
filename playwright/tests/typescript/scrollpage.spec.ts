import { test, expect, Locator } from '@playwright/test';

test('scrolltoview', async ({ page }) => {

  await page.goto('https://orangehrm.com/contact-sales',{waitUntil:'domcontentloaded'});

  await expect(page).toHaveURL('https://orangehrm.com/contact-sales');

  const carrersLink=page.locator('a[href*="/company/careers"]').last();

  await carrersLink.scrollIntoViewIfNeeded();

  await expect(carrersLink).toBeVisible();

  await page.mouse.wheel(0,500);

  await page.evaluate(()=>{
    console.log('scrolling in to bottom');
    window.scroll(0,500);
  })













});
