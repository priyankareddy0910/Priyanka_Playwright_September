import { test, expect } from '@playwright/test';

test.describe('Hard Assert Vs Soft Assert Demo', () => {
    test('hard assert example', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/', {
            waitUntil: 'domcontentloaded',
        });

        await expect.soft(page).toHaveTitle('Lab');

        console.log('soft assert executed');

        expect.soft(page.locator(`[data-test='username')`)).toBeVisible();

         console.log('soft assert2 executed');




        


       
    });
});
