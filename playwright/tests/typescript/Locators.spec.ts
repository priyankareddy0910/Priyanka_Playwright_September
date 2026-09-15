import { test, expect } from '@playwright/test';

test('GetRoleProgram', async ({ page }) => {

  page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

const role=page.getByRole('heading',{name:'PlaywrightPractice'});
await expect(role).toBeVisible();

await  page.getByRole('button',{name:'Primary Action'}).click();

 await page.getByRole('textbox',{name:'username'}).fill('priya');

 await page.getByLabel('Email Address').fill('abc@xyz.com');
 await page.getByLabel('Password:').fill('xyz');
 await page.getByLabel('Your Age:').fill("24");

 await page.getByText('submit',{exact:true});

 //submit form

 await page.getByPlaceholder('Enter your full name').fill('priyanka');

 await page.locator('li').filter({hasText:'List item 1'}).click();
//priyanka reddy trainer

//getbyetxt('priyanka').toContaintext('')

	
});

//await expect(locator).tobechecked();



