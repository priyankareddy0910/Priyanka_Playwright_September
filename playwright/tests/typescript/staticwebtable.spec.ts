import { test, expect, Locator } from '@playwright/test';

test('staticwebtable', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    const table=page.locator("//table[@name='BookTable']");
    const headercolumns =table.locator('tr').locator('th');
    const datarows =table.locator('tbody tr:has(td)');//css
   //const datarowss =table.locator('//tbody/tr[td]');//xpath
   await expect(table).toBeVisible();
   await expect(headercolumns).toHaveCount(4);
   await expect(datarows).toHaveCount(6);
   const  headerTexts=await headercolumns.allInnerTexts();
   console.log(headerTexts);
   expect(headerTexts).toEqual(['BookName','Author','Subject','Price']);
   console.log('printing all table rows');
   const allrows =await datarows.all();
   for(const row of allrows){
    const rowData=await row.locator('td').allInnerTexts();
    console.log(rowData);
   }

   const firstrow =datarows.nth(0);
   expect(firstrow.locator('td').nth(0)).toHaveText('Learn Selenium');
   expect(firstrow.locator('td').nth(1)).toHaveText('Amit');

   const javabookrow =datarows.filter({has:page.getByText('Master In Java',{exact:true})});

   await expect(javabookrow).toHaveCount(1);
   expect(javabookrow.locator('td').nth(1)).toHaveText('Amod');

   let totalprice=0;

   for(const row of allrows){
    const pricetext=await row.locator('td').nth(3).innerText();
    //css-0 based 
    //xpath--1-absed 

    //const pricetext=await row.locator(//table[@name='BookTable']/tbody//tr//td[4]).innertext();
    totalprice +=Number(pricetext);
    //totalprice=totalprice+Number(pricetext);


   }
   console.log(totalprice);
   expect(totalprice).toBe(7100);















   });













