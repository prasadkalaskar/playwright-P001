import { Page, Locator } from '@playwright/test';

export class ToDoPage {
  readonly newTodoInput: Locator;
  readonly todoItems: Locator;

  constructor(private page: Page) {
    this.newTodoInput = page.locator('.new-todo');
    this.todoItems = page.locator('.todo-list li');
  }

  async open() {
    await this.page.goto('https://demo.playwright.dev/todomvc/#/');
  }

  async addTodo(task: string) {
    await this.newTodoInput.fill(task);
    await this.newTodoInput.press('Enter');
  }

  getTodoItems() {
    return this.todoItems;
  }

  getTodoItemByText(task: string) {
    return this.todoItems.filter({ hasText: task });
  }
}
