import { test, expect, type Locator, type Page } from '@playwright/test';

test('handling table', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const table =page.locator('#productTable');
  const columns = table.locator('thead tr th');
  await expect(columns).toHaveCount(4);
  const rows =table.locator('tbody tr');
  await expect(rows).toHaveCount(5);

  await selectproduct(rows,page,'Tablet');
  await selectproduct(rows,page,'Smartwatch');

  for(let i=0;i<await rows.count();i++){
    //each row
    const row=rows.nth(i); //0
    const tds =row.locator('td'); //1st row //2nd row  //3rd row 

    for(let j=0;j<await tds.count()-1;j++){ //count =4 , 4-1=3,  0 ,1 ,2
        console.log(await tds.nth(j).textContent());

    }
}
//.....................................

    const pages =page.locator('.pagination li a');

    for(let p=0;p<await pages.count();p++){

        if(p>0){
            await pages.nth(p).click();
            await page.waitForTimeout(2000);
        }

        
  for(let i=0;i<await rows.count();i++){ //outer for loop
    //each row
    const row=rows.nth(i); //one row
    const tds =row.locator('td');//finding all the cells in the row 

    for(let j=0;j<await tds.count()-1;j++){ //count =4 , 4-1=3,  0 ,1 ,2
        console.log(await tds.nth(j).textContent());
       

    }
    }
}

  

});

async function selectproduct(rows:Locator,page:Page,name:string){

    const matchedRow=rows.filter({has:page.locator('td'),hasText:name,});
    await matchedRow.locator('input[type="checkbox"]').check();



} 


