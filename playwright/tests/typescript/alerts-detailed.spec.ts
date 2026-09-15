import { test, expect } from '@playwright/test';

const ALERTS_URL = 'https://the-internet.herokuapp.com/javascript_alerts';

test.describe('JavaScript Alerts', () => {
  test('handle simple JS alert', async ({ page }) => {
    page.on('dialog', async (dialog) => {
      console.log(`Alert message: ${dialog.message()}`);
      await dialog.accept();
      
    });

    await page.goto(ALERTS_URL);
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();

    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
  });

  test('handle JS confirm by accepting it', async ({ page }) => {
    page.on('dialog', async (dialog) => {
      console.log(`Confirm message: ${dialog.message()}`);
      await dialog.accept();
    });

    await page.goto(ALERTS_URL);
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();

    await expect(page.locator('#result')).toHaveText('You clicked: Ok');
  });

  test('handle JS confirm by dismissing it', async ({ page }) => {
    page.on('dialog', async (dialog) => {
      console.log(`Confirm message: ${dialog.message()}`);
      await dialog.dismiss();
    });

    await page.goto(ALERTS_URL);
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();

    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
  });

  test('handle JS prompt and enter text', async ({ page }) => {
    const inputText = 'Priyanka';

    page.on('dialog', async (dialog) => {
      console.log(`Prompt message: ${dialog.message()}`);
      await dialog.accept(inputText);
    });

    await page.goto(ALERTS_URL);
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();

    await expect(page.locator('#result')).toHaveText(`You entered: ${inputText}`);
  });

  test('capture dialog type before handling prompt', async ({ page }) => {
    let dialogType = '';

    page.on('dialog', async (dialog) => {
      dialogType = dialog.type();
      console.log(`Dialog type: ${dialogType}`);
      await dialog.accept('Playwright');
    });

    await page.goto(ALERTS_URL);
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();

    expect(dialogType).toBe('prompt');
    await expect(page.locator('#result')).toHaveText('You entered: Playwright');
  });
});
