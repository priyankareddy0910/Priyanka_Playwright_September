import { test, expect } from '@playwright/test';

test('handle parent and child windows in detail', async ({ page, context }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');

  await expect(page).toHaveTitle('The Internet');
  await expect(page.locator('h3')).toHaveText('Opening a new window');

  const parentPageTitle = await page.title();
  const parentPageUrl = page.url();

  const [childPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Click Here' }).click(),
  ]);

  await childPage.waitForLoadState();

  console.log(`Parent page title: ${parentPageTitle}`);
  console.log(`Parent page URL: ${parentPageUrl}`);
  console.log(`Child page title: ${await childPage.title()}`);
  console.log(`Child page URL: ${childPage.url()}`);

  await expect(childPage).toHaveTitle('New Window');
  await expect(childPage.locator('h3')).toHaveText('New Window');

  await childPage.close();

  await page.bringToFront();
  await expect(page).toHaveTitle('The Internet');
  await expect(page.locator('h3')).toHaveText('Opening a new window');
});
