
import { test, expect, Locator } from '@playwright/test';

test('Handling dropdown', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const countrydropdwon = page.locator('#country');

   await countrydropdwon.selectOption('Germany');

   await page.waitForTimeout(2000);

   countrydropdwon.selectOption({value:'uk'});

   await page.waitForTimeout(2000);

   await expect(countrydropdwon).toContainText('United Kingdom');


   console.log(await countrydropdwon.textContent());


   //..........................................................

   ////select[@id='country']

   const allOptionElements = await page.locator('#country > option').all();
   console.log(allOptionElements);
   for(const option  of allOptionElements){

    const optionText=await option.textContent();//UnitesStates
    if(optionText=='Japan'){
        console.log('option is present');
        break;

    }
   }

   /// cleaner way 

      const allOptionText = await page.locator('#country > option').allTextContents();
      console.log(allOptionText);

      expect(allOptionText.map(t=>t.trim())).toContain('Japan');















   









});