import { test, expect, type Locator, type Page } from '@playwright/test';

test('handling table', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const table =page.locator('#productTable');

 const columns =  table.locator('thead tr th');

 await expect(columns).toHaveCount(4);//validation

 const rows =table.locator('tbody tr'); //rows count

 await expect(rows).toHaveCount(5); //validation

 await SelectProduct(rows,page,'Tablet ');

 await SelectProduct(rows,page,'Smartwatch');

 //retrieving the products 

for(let i=0;i<await rows.count();i++){ //each row 

    const row = rows.nth(i);// rows 0, 1, 2 , 3 , 4 ,5
    const tds=row.locator('td');
    for(let j=0;j<await tds.count()-1;j++){  //inner for loop 
        
console.log(await tds.nth(j).textContent()); //iteerate each column inside that row



    }


}

// read data from all pages in the table

const pages = page.locator('.pagination li a');

console.log('Numbe of pages in the table' , await pages.count());

for(let p=0; p<await pages.count();p++){

    if(p >0){ //pages

        await pages.nth(p).click(); //1
        await page.waitForTimeout(2000);
    }

    for( let i=0; i<await rows.count();i++){ //outer for loop[]
        const row = rows.nth(i); //one row
        const tds = row.locator('td');//find all cells in the row
        for( let j=0;j<await tds.count()-1;j++){

            console.log(await tds.nth(j).textContent());




        }


    }


}



});

//Select the product by name 

async function SelectProduct(rows:Locator ,page:Page , name:string){

    const matchedRow= rows.filter({has:page.locator('td'),
        hasText: name,});


        await matchedRow.locator('input[type="checkbox"]').check();

}


