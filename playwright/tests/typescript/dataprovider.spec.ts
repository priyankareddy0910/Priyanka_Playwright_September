 import { test, expect } from '@playwright/test';
 type LoginData={
  username:string;
  password:string;
  expectedurl?:string;
  expectedError?:string;
 }
 const loginData:LoginData[]=[
{
  username:'standard_user',
  password:'secret_sauce',
  expectedurl:'https://www.saucedemo.com/inventory.html',
},{
  username:'locked_out_user',
  password:'secret_sauce',
  expectedError:'Epic sadface: Sorry, this user has been locked out.',
}
 ];
 for(const data of loginData ){
  test(`login test for ${data.username}`,async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    const userinput = page.locator('#user-name');
    const passwordinput =page.locator('#password');
    const loginButton =page.locator('#login-button');
    await expect(userinput).toBeVisible();
     await expect(passwordinput).toBeVisible();
      await expect(loginButton).toBeVisible();
      await userinput.fill(data.username);
      await passwordinput.fill(data.password);
      await loginButton.click();
      if(data.expectedError){
        const errorMessage = page.locator('[data-test="error"]');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText(data.expectedError);

      }
    
  });

};





