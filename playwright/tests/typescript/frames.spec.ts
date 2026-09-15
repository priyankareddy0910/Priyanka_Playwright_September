import { test, expect } from '@playwright/test';

test('child frames', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');

  const frame3= page.frameLocator('frame[src="frame_3.html"]');
  frame3.locator('[name="mytext3"]').fill('frame3');

  const childframe =frame3.frameLocator('iframe');

  await childframe.getByRole('radio',{name:'Hi, I am the UI.Vision IDE'}).click();

  //page.framelocator(frame1);
  //const frame3=page.framelocator(frame3);
  //frame3.locator('').click();
  





});



