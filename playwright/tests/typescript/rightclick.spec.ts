import { test, Page } from '@playwright/test';

test('dropdown core smoke', async ({ page }) => {

    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');

    await page.locator('span.context-menu-one').click({button:'right'});

    const alloptions =await page.locator('//ul[@class="context-menu-list context-menu-root"]').allInnerTexts();
    
    console.log(alloptions);

    
    
   
});