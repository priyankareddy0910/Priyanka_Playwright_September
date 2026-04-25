import { test, Page } from '@playwright/test';

test('dropdown core smoke', async ({ page }) => {

    await page.goto('https://www.spicejet.com/');

    await page.getByText('Add-ons',{exact:true}).hover();

    await page.getByText('Extra Seat',{exact:true}).first().click(); 
   
});