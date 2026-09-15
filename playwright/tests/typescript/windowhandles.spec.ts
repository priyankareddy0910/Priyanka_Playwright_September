import { test, expect,chromium } from '@playwright/test';
import { channel } from 'node:diagnostics_channel';
test('mutiple windows', async()=>{
  const browser =await chromium.launch({channel:'chrome',headless:false});
  const brtxt=await browser.newContext();
  const page =await brtxt.newPage();
  await page.goto('https://orangehrm.com/contact-sales');
  await page.locator("//a[contains(@href,'https://www.facebook.com')]").click();
  await page.locator("//a[contains(@href,'https://www.linkedin.com/company/orangehrm')]").click();
  await page.locator("//a[contains(@href,'https://x.com/orangehrm')]").click();

  await page.waitForTimeout(3000);
  //how many pages are opened
  //browser bxtxt page
  const allpages = brtxt.pages();
  
  console.log(allpages.length);//4
  for(const pg of allpages){
    if(pg!==page){//1) orange hrm 2)fb
      console.log(await pg.title());
      await pg.close();
    }
  }
  await page.bringToFront();
  console.log(page.title());







});