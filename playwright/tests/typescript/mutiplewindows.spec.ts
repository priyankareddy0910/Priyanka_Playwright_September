import { test, expect, Locator,chromium } from '@playwright/test';

test('windowhandles' ,async()=>{

   const browser = await chromium.launch({channel:'chrome',headless:false});

   const brtxt = await browser.newContext();//window
   const page =await brtxt.newPage(); //page 

   await page.goto('https://orangehrm.com/contact-sales/');

   await page.locator(`//a[contains(@href,'linkedin')] `).click();
   await page.locator(`//a[contains(@href,'facebook')] `).click();
   await page.locator(`//a[contains(@href,'youtube')] `).click();


   await page.waitForTimeout(3000);

  // await page.waitForLoadState();

    const allpages=brtxt.pages(); //page1,page2,page3,page4

    console.log(allpages.length);//4


for(const pg of allpages){
if(pg!==page){
    console.log(await pg.title());//child titles
    await pg.close();//child window


}

}


await page.bringToFront();
console.log(page.title); //parent title















  






})


