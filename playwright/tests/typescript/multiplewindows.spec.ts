import { test, expect } from '@playwright/test';


test('verify dropdown selection on public website', async ({ page,context }) => {

    await page.goto('https://the-internet.herokuapp.com/windows');

    await expect(page).toHaveTitle('The Internet');

    await expect(page.locator('h3')).toHaveText('Opening a new window');

    const parenttitle =await page.title();

    const parentPageUrl=page.url();

    const [chilpage]=await Promise.all([
// start litening for a new page.tab to open this browser context 
        context.waitForEvent('page'),
        page.getByRole('link',{name:'Click Here'}).click().then(()=>{
            console.log('clicked succesfully');
        })


    ]);




    await chilpage.waitForLoadState();
    console.log('childpageurl'+chilpage.url());
    console.log('parentpageurl'+parentPageUrl);


    await expect(chilpage).toHaveTitle('New Window');

    await expect(chilpage.locator('h3')).toHaveText('New Window');

    await chilpage.close();

    await page.bringToFront();

    await expect(page).toHaveTitle('The Internet');
    
    await expect(page.locator('h3')).toHaveText('Opening a new window');

    











    




 


});
