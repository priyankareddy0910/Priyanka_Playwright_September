// check a checkbox 
//uncheck a checkbox

import { test, expect,Locator } from '@playwright/test';

class checkboxutililitiesclass{

    //check a checkbox
    static async checkcheckbox(locator:Locator):Promise<void>{
        await locator.check();
    }
    //uncheck a checkbox
    static async uncheckcheckbox(locator:Locator):Promise<void>{
        await locator.uncheck();
    }
    //check the status of the checkbox

    static async testcheckboxoperation(locator:Locator):Promise<void>{
       //check the checkbox
       await this.checkcheckbox(locator);
       const ichecked=await locator.isChecked();
       await expect(locator).toBeChecked();
    
    }
}

test('checkbox utilities', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const sundaycheckbox =page.locator('#sunday');
    await checkboxutililitiesclass.checkcheckbox(sundaycheckbox);
    await checkboxutililitiesclass.uncheckcheckbox(sundaycheckbox);


});