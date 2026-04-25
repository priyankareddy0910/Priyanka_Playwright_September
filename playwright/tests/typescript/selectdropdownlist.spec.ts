import { test, expect, Locator } from '@playwright/test';

test('google core smoke', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  await page.waitForTimeout(5000);

 const dropdown:Locator = page.locator('#dropdown-class-example');

  await selectDropDownByValue(dropdown,'option1');

  await selectDropDownByVisibleText(dropdown,'Option2')
  
 //await page.waitForTimeout(5000);
  await selectDropDownByIndex(dropdown,3);
});

async function selectDropDownByValue(element: Locator ,labelvalue:string):Promise<void>{ 

    await element.selectOption({value:labelvalue});

    await expect(element).toHaveValue(labelvalue)

}
async function selectDropDownByVisibleText(element: Locator ,labelvisbletext:string):Promise<void>{ 
    await element.selectOption({label:labelvisbletext});

}
async function selectDropDownByIndex(element: Locator ,indexval:number):Promise<void>{ 

    await element.selectOption({index:indexval});

}
