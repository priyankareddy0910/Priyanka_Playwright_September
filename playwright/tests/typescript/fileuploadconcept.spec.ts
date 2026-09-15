import path from 'path';
import { test, expect } from '@playwright/test';

test.describe('File Upload Concept In Playwright', () => {
    test('single file upload using setInputFiles', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/upload', {
            waitUntil: 'domcontentloaded',
        });

        const filepath1 = path.resolve('playwright/tests/data/upload-sample.txt');

        await page.setInputFiles('#file-upload', filepath1);

        await page.click('#file-submit');

        await expect(page.locator('h3')).toHaveText('File Uploaded!');
        await expect(page.locator('#uploaded-files')).toContainText('upload-sample.txt');
    });
});