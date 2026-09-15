import { test, expect } from '@playwright/test';

test.describe('playwright built-in annotations',()=>{

    test.skip('skipped test',async ({page})=>{

        await page.goto('https://playwright.dev/');

        await expect(page).toHaveTitle(/Playwright/);

    
});

  test('fail test',async ({page})=>{//pass

        await page.goto('https://playwright.dev/');
         await expect(page).toHaveTitle(/Playwright/);

    
});
 test.fixme('fix test',async ({page})=>{//pass

        await page.goto('https://playwright.dev/');
         await expect(page).toHaveTitle(/Playwright/);

    
});
 test('slow test',async ({page})=>{//pass

        test.slow();
        await page.goto('https://playwright.dev/');
         await expect(page).toHaveTitle(/Playwright/);
         await page.waitForTimeout(5000);

 });
 test('testonly',async ({page})=>{//pass
        await page.goto('https://playwright.dev/');
         await expect(page).toHaveTitle(/Playwright/);
         await page.waitForTimeout(5000);

    
});
});