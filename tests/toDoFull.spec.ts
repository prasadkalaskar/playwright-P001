import { test, expect } from '@playwright/test';
import { ToDoPage } from '../pages/toDoPage';

let toDoPage: ToDoPage;

test.describe('@regression Todo tests with Page Object', () => {
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    toDoPage = new ToDoPage(page);
    await toDoPage.open();
  });

  test('@smoke Add multiple todos', async () => {
    await toDoPage.addTodo('Buy groceries');
    await toDoPage.addTodo('Pay bills');
    await toDoPage.addTodo('Learn Playwright');

    await expect(toDoPage.getTodoItems()).toHaveCount(3);
  });

  test('@sanity Verify specific todo exists', async () => {
    await expect(toDoPage.getTodoItemByText('Buy groceries')).toBeVisible();
    await expect(toDoPage.getTodoItemByText('Learn Playwright')).toBeVisible();
  });
});
