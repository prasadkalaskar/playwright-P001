import { test, expect, Locator} from '@playwright/test';


test.beforeAll('beforeAll', async ()=>{
    console.log("this is beforeAll")        
})

test.beforeEach('beforeEach', async ({page})=>{
    console.log("this is beforeEach")   
       
})

test.afterEach('afterEach', async ({page})=>{
    console.log("this is afterEach")   
    page.close()     
})

test.afterAll('afterAll', async ()=>{
    console.log("this is afterAll")   
    
})


test.describe('mygroup', async () => {

test('test', async ({ page }) => {
 
  await page.goto('https://demo.playwright.dev/todomvc/#/'); 
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('This is my todo1');
  console.log("This is my todo1")
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByTestId('todo-title').click();
  await expect(page.getByTestId('todo-title')).toContainText('This is my todo1');
  await page.getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('This is my todo2');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
});


test('[@Sanity] LER-login with valid user', async ({ page, browser }) => {
    console.log(browser.browserType().name()); // "chromium"
    await page.goto('https://demo.playwright.dev/todomvc/#/'); 
});


test('LER-login with valid user', async ({ page, browser }) => {

    
    console.log(browser.browserType().name()); // "chromium"
    await page.goto('https://demo.playwright.dev/todomvc/#/'); 
    
  
    // Call and await the function
    const isVisible = await page.getByText("todos").isVisible();

    console.log(isVisible); // true or false
    expect(isVisible).toBe(true);

    const logo:Locator =  page.locator("//input[@class='new-todo']")
    await expect(logo).toBeVisible();
    await logo.fill("testme"); //Correct

    // Optional: press Enter to add the todo
    await logo.press('Enter');

    // Check that new todo appears
    await expect(page.locator('.todo-list li')).toContainText('testme');

    })
});