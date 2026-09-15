import { test, expect } from '@playwright/test';
import * as fs from 'fs';
 type RegData={
    firstName:string;
    lastName:string;
    email:string;
    telephone:string;
    password:string;
    subscribeNewsletter:'Yes'| 'No';
 };

 //fs --convert  to js object --loop --

//parse-converts string to java script object

const registrationData:RegData[] =
 JSON.parse(fs.readFileSync('playwright/tests/data/register.json','utf-8'));


 for(const user of registrationData){

    test(`registration data- ${user.firstName} ${user.lastName}`,async({page})=>{

        await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');

        await page.getByRole('textbox',{name:'First Name'}).fill(user.firstName);
         await page.getByRole('textbox',{name:'Last Name'}).fill(user.lastName);
         await page.getByRole('textbox',{name:'E-Mail'}).fill(user.email);
         await page.getByRole('textbox',{name:'telephone'}).fill(user.telephone);
         await page.locator('#input-password').fill(user.password);

         if(user.subscribeNewsletter==='Yes'){
            await page.getByLabel('Yes').check();
         }
            else{
                await page.getByLabel('No').check();
            }

            await page.locator("input[name='agree']").check();

            expect(page.locator('#content h1')).toHaveText('Register Account');


          
    });

}
 

