import path from 'path';
import { test, expect } from '@playwright/test';

test('file upload', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload', {
        waitUntil: 'domcontentloaded',
    });

    const filepath = path.resolve('playwright/tests/data/upload-sample.txt');

    console.log(filepath);
    

    await page.setInputFiles('#file-upload',filepath);

    await page.click('#file-submit');

    await expect(page.locator('h3')).toHaveText('File Uploaded!');

    await expect(page.locator('#uploaded-files')).toHaveText('upload-sample.txt');


     
});

    
