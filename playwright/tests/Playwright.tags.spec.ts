import { test, expect } from '@playwright/test';


//approach 1
test('@sanity @smoke @regression tags test case',async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name','standard_user');
       await page.fill('#password','secret_sauce');
       await page.click('#login-button');
       await expect(page).toHaveURL(/inventory/);

});

test('@Login using  test step',{tag:['@smoke','@sanity','@critical']},async ({page})=>{

    await test.step('open Login Page',async()=>{

    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name','standard_user');
       await page.fill('#password','secret_sauce');
       await page.click('#login-button');
       await expect(page).toHaveURL(/inventory/);

});

});




