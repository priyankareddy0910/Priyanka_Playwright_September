 import { test, expect } from '@playwright/test';
test('child test', async ({ page }) => {
await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');
const source =page.locator('#draggable');

const target =page.locator('#droppable');

await source.dragTo(target);



});





