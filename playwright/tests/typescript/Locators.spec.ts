import { test, expect, Locator } from '@playwright/test';

test('Login Test', async ({ page }) => {
    await page.goto('http://localhost:4200/pages/forms/layouts');
    await page.getByPlaceholder('Jane Doe').click();
    await page.getByRole('textbox',{name:'Email'}).first().click();
    await page.locator('//span[@class="custom-checkbox"]').first().click();
    await page.getByText('Remember me').first().click();
    await page.getByRole('button',{name:'submit'}).filter({hasText:'Submit'}).first().click();
    const usingTheGridForm =page.locator('nb-card').filter({hasText:'Using the Grid'});
    await usingTheGridForm.getByPlaceholder('Email').fill('priyanka');
    await usingTheGridForm.getByPlaceholder('Password').fill('paswrd');
    
    usingTheGridForm.getByRole('button',{name:'Sign in'}).click();

    await expect(usingTheGridForm.getByPlaceholder('Email')).toHaveValue('priyanka');


    





  





    




   


});
    
