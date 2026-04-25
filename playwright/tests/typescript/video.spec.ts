import { test, expect, Browser, BrowserContext, Page, chromium } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;
let page: Page;

test('test1', async () => {
    browser = await chromium.launch({ channel: 'chrome', headless: false });

    context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: { width: 800, height: 600 },
        },
    });

    page = await context.newPage();
    await page.goto('https://support.orangehrm.com/portal/en/signin');
    await expect(page.getByRole('navigation', { name: 'Main Menu' })).toBeVisible();
});
