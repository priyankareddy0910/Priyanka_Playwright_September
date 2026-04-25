import { test, expect } from '@playwright/test';

test('verify static web table data in detail', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const table = page.locator('table[name="BookTable"]');
  const headerColumns = table.locator('tr').first().locator('th');
  const dataRows = table.locator('tbody tr:has(td)');

  await expect(table).toBeVisible();
  await expect(headerColumns).toHaveCount(4);
  await expect(dataRows).toHaveCount(6);

  const headerTexts = await headerColumns.allInnerTexts();
  console.log('Table headers:', headerTexts);
  expect(headerTexts).toEqual(['BookName', 'Author', 'Subject', 'Price']);

  console.log('Printing all table rows');

  const allRows = await dataRows.all();
  for (const row of allRows) {
    const rowData = await row.locator('td').allInnerTexts();
    console.log(rowData);
  }

  const firstRow = dataRows.nth(0);
  await expect(firstRow.locator('td').nth(0)).toHaveText('Learn Selenium');
  await expect(firstRow.locator('td').nth(1)).toHaveText('Amit');
  await expect(firstRow.locator('td').nth(2)).toHaveText('Selenium');
  await expect(firstRow.locator('td').nth(3)).toHaveText('300');

  const javaBookRow = dataRows.filter({ has: page.getByText('Master In Java', { exact: true }) });
  await expect(javaBookRow).toHaveCount(1);
  await expect(javaBookRow.locator('td').nth(1)).toHaveText('Amod');
  await expect(javaBookRow.locator('td').nth(2)).toHaveText('JAVA');
  await expect(javaBookRow.locator('td').nth(3)).toHaveText('2000');

  let totalPrice = 0;
  for (const row of allRows) {
    const priceText = await row.locator('td').nth(3).innerText();
    totalPrice += Number(priceText);
  }

  console.log(`Total price of all books: ${totalPrice}`);
  expect(totalPrice).toBe(7100);
});
