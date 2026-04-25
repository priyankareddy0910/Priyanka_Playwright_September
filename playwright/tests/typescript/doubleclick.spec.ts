 import { test, expect } from '@playwright/test';
test('child test', async ({ page }) => {
await page.goto('https://api.jquery.com/dblclick/');

const frame =page.frameLocator('iframe');

let box =frame.locator('div');

await box.dblclick();

await box.click({clickCount:2});


});





