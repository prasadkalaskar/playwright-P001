import { test, expect } from '@playwright/test';
import { ToDoPage } from '../pages/toDoPage'; // 

test('Add and verify todos using Page Object', async ({ page }) => {
  const toDoPage = new ToDoPage(page); // Class name starts with uppercase

  await toDoPage.open();
  await toDoPage.addTodo('Buy groceries');
  await toDoPage.addTodo('Pay bills');
  await toDoPage.addTodo('Learn Playwright');

  await expect(toDoPage.getTodoItems()).toHaveCount(3);
  await expect(toDoPage.getTodoItemByText('Buy groceries')).toBeVisible();
  await expect(toDoPage.getTodoItemByText('Learn Playwright')).toBeVisible();
});
