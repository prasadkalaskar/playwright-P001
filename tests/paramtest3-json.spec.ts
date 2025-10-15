import { test, expect } from '@playwright/test';
import fs from 'fs';

const jsonPath = 'testdata/data.json';
const data: any = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

test.describe('Data-driven Todo tests', () => {

  test('Add todos from data.json and verify each item appears', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');

    for (const todo of data.todos) {
      await page.locator('.new-todo').fill(todo.task);
      await page.locator('.new-todo').press('Enter');
    }

    await expect(page.locator('.todo-list li')).toHaveCount(data.todos.length);
    await expect(page.locator('.todo-list li', { hasText: 'Buy groceries' })).toBeVisible();
    await expect(page.locator('.todo-list li', { hasText: 'Pay electricity bill' })).toBeVisible();
    await expect(page.locator('.todo-list li', { hasText: 'Learn Playwright' })).toBeVisible();
  });
});
