 import { test, expect } from '@playwright/test';


test('drag and drop',async ({page})=>{

    await page.goto('https://api.jquery.com/dblclick/');

    const frame =page.frameLocator('iframe');
    let box =frame.locator('div');
    await box.dblclick();

    //await box.click({button:'right'});//right click





});



