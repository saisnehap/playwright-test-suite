const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Directory where the test files are located
  retries: 1, // Retry failing tests once
  use: {
    baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app/', // Base URL for the app
    headless: true, // Run tests in headless mode
    viewport: { width: 1280, height: 720 }, // Default viewport size
    ignoreHTTPSErrors: true, // Ignore HTTPS errors
    trace: 'on-first-retry', // Generate a trace for the first retry
    video: 'on-first-retry', // Record video on the first retry
    screenshot: 'only-on-failure' // Take screenshots only on failures
  },
  reporter: [
    ['list'], // List reporter for command-line output
    ['html', { outputFolder: 'test-results/html-report', open: 'never' }] // HTML report configuration
  ],
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } }, // Test in Chromium
    { name: 'firefox', use: { browserName: 'firefox' } }, // Test in Firefox
    { name: 'webkit', use: { browserName: 'webkit' } } // Test in WebKit
  ],
  outputDir: 'test-results/', // Directory to save test artifacts
});
