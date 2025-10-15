import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false, // Set to true if you want parallel test files
  forbidOnly: !!process.env.CI, // Fail the build if test.only is left in CI
  retries: process.env.CI ? 2 : 0, // Retry failing tests in CI
  workers: process.env.CI ? 1 : undefined, // Limit workers in CI
  reporter: 'html', // Generates HTML report after run

  use: {
    // baseURL: 'http://localhost:3000', // Optional
    trace: 'on-first-retry', // Collect trace on first retry
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment if you want to test on Firefox or WebKit
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  // Optional: Run local dev server before starting the tests
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
