import { test, expect } from '@playwright/test';
import * as $s from './selectors/uiselectors.js';

test('Todos Test', async ({ page }) => {
  // await page.goto('https://demo.playwright.dev/todomvc/');
  console.log($s.whatNeedsToBeDone);
   await page.goto('https://demo.playwright.dev/todomvc/#/');
  await expect(page.getByPlaceholder($s.whatNeedsToBeDone)).toBeVisible();
  await page.getByPlaceholder($s.whatNeedsToBeDone).click();
  await page.getByPlaceholder($s.whatNeedsToBeDone).fill($s.getSomeMilk);
  await page.getByPlaceholder($s.whatNeedsToBeDone).press($s.enter);
  await page.getByPlaceholder($s.whatNeedsToBeDone).fill($s.writeMoreCode);
  await page.getByPlaceholder($s.whatNeedsToBeDone).press($s.enter);
  await page.getByPlaceholder($s.whatNeedsToBeDone).fill($s.getYourActTogether);
  await page.getByPlaceholder($s.whatNeedsToBeDone).press($s.enter);
  await expect(page.getByText($s.getSomeMilk)).toBeVisible();
  await expect(page.getByText($s.writeMoreCode)).toBeVisible();
  await expect(page.getByText($s.getYourActTogether)).toBeVisible();
  await expect(page.getByText('All Active Completed')).toBeVisible();
  await expect(page.locator($s.body)).toContainText('3 items left');
  await page.getByRole($s.link, { name: $s.all }).click();
  await expect(page.getByText($s.getSomeMilk)).toBeVisible();
  let itemFound = (await page.getByTestId($s.todoTitle).all()).length;
  expect(itemFound).toBe(3);
});