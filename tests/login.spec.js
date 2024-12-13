const { test, expect } = require('@playwright/test');
const testData = require('../data/testData.json');

test.describe('Demo App Test Suite', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the login page
    await page.goto('/');

    // Perform login
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password123');
    await page.click('button:has-text("Sign in")');

    // Verify login is successful
    await expect(page.locator('button:has-text("Logout")')).toBeVisible();
  });

  testData.forEach(({ testCase, application, description, task, column, tags }) => {
    test(testCase, async ({ page }) => {
      // Navigate to the specified application
      const appButton = await page.locator(`button h2:has-text("${application}")`);
      await expect(appButton).toBeVisible();
      await appButton.click();

      // Validate the application description
      const appDescription = await page.locator(`button:has-text("${application}") p:has-text("${description}")`);
      await expect(appDescription).toBeVisible();

      // Locate and validate the task
      const taskElement = await page.locator(`h3:has-text("${task}")`);
      await expect(taskElement).toBeVisible();

      // Validate the task column
      const columnElement = await taskElement.locator(
          `xpath=ancestor::div[contains(@class, 'bg-gray-50')]//h2[contains(text(), '${column}')]`
      );
      await expect(columnElement).toBeVisible();

      // Validate task tags
      const tagsContainer = await taskElement.locator(
          `xpath=following-sibling::div[contains(@class, 'flex flex-wrap gap-2 mb-3')]`
      );
      for (const tag of tags) {
        const tagElement = await tagsContainer.locator(`span:has-text("${tag}")`);
        await expect(tagElement).toBeVisible();
      }
    });
  });

  test('Logout redirects to login page', async ({ page }) => {
    // Click the logout button
    const logoutButton = await page.locator('button:has-text("Logout")');
    await expect(logoutButton).toBeVisible();
    await logoutButton.click();

    // Verify redirection to login
    const usernameField = await page.locator('#username');
    const passwordField = await page.locator('#password');
    const signInButton = await page.locator('button:has-text("Sign in")');

    await expect(usernameField).toBeVisible();
    await expect(passwordField).toBeVisible();
    await expect(signInButton).toBeVisible();
  });
});
