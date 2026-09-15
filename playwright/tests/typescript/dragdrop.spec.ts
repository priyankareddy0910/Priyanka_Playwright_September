 import { test, expect } from '@playwright/test';


test('drag and drop',async ({page})=>{

    await page.goto('https://jqueryui.com/droppable/');

    const frame =page.frameLocator('iframe');

    const source =frame.locator('#draggable');

    const target = frame.locator('#droppable');

    await source.dragTo(target);


});



