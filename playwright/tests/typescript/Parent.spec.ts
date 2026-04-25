 import { test, expect } from '@playwright/test';
test('child test', async ({ page }) => {
await page.goto('http://localhost:4200/pages/forms/layouts');
await page.locator('nb-card',{hasText:"Using the Grid"}).getByRole('textbox',{name:"Email"}).fill('priya');
await page.locator('nb-card',{has:page.locator('#inputEmail1')}).getByRole('textbox',{name:"Email"}).
fill('priya');
await page.locator('nb-card',{hasText:"Basic form"}).getByRole('textbox',{name:"Email"}).fill('priyanka');
await page.locator('nb-card',{hasText:"Inline form"}).getByRole("button").click();
});





