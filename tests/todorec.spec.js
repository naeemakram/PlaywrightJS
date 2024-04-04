import { test, expect } from '@playwright/test';

test('Todos Test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await expect(page.getByPlaceholder('What needs to be done?')).toBeVisible();
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('Get some milk.');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('Write more code');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('Get your act together');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await expect(page.getByText('Get some milk.')).toBeVisible();
  await expect(page.getByText('Write more code')).toBeVisible();
  await expect(page.getByText('Get your act together')).toBeVisible();
  await expect(page.getByText('All Active Completed')).toBeVisible();
  await expect(page.locator('body')).toContainText('3 items left');
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await expect(page.getByText('Get some milk.')).toBeVisible();
    let itemFound = (await page.getByTestId("todo-title").all()).length;
    expect(itemFound).toBe(3);
});