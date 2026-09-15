import { test, expect, Page } from '@playwright/test';

test('handle multiple windows using context.pages()', async ({ page, context }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');

  await expect(page).toHaveTitle('The Internet');
  await expect(page.locator('h3')).toHaveText('Opening a new window');

  const parentPage: Page = page;
  const parentPageTitle = await parentPage.title();
  const parentPageUrl = parentPage.url();

  await page.getByRole('link', { name: 'Click Here' }).click();

  
  await expect.poll(() => context.pages().length).toBe(2);

  const allPages: Page[] = context.pages();
  const childPage: Page = allPages[1];

  await childPage.waitForLoadState();

  console.log(`Total open pages: ${allPages.length}`);
  console.log(`Parent page title: ${parentPageTitle}`);
  console.log(`Parent page URL: ${parentPageUrl}`);
  console.log(`Child page title: ${await childPage.title()}`);
  console.log(`Child page URL: ${childPage.url()}`);

  await expect(childPage).toHaveTitle('New Window');
  await expect(childPage.locator('h3')).toHaveText('New Window');

  await childPage.close();

  await expect.poll(() => context.pages().length).toBe(1);

  await parentPage.bringToFront();
  await expect(parentPage).toHaveTitle('The Internet');
  await expect(parentPage.locator('h3')).toHaveText('Opening a new window');
});
