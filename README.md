# Playwright Test Suite

## Overview
This repository contains a Playwright-driven test suite for the Demo App. The suite dynamically adapts to test cases using a data-driven approach.

## Features
- Automated login functionality.
- Navigation to dynamic applications (Web Application, Mobile Application, Marketing Campaign).
- Validation of tasks, columns, and tags.
- Logout functionality verification.

## Folder Structure
playwright-task/ ├── data/ │ └── testData.json ├── tests/ │ └── login.spec.js ├── playwright.config.js ├── package.json

## Setup
1. Clone the repository:
   git clone <repository-url>

2. Navigate to the project directory:
   cd playwright-task

3. Install dependencies:
   npm install

## Running Tests
- **Run all tests**:
  npx playwright 
- **Run specific tests**:
  npx playwright test --grep "Test Case 1"
- **Debug tests**:
    npx playwright test --debug


## Configuration
- Modify test settings in `playwright.config.js`.
- Base URL, browser type, and other global settings can be customized as needed.

## Artifacts
- Test artifacts (screenshots) are saved in the `test-results/` directory.

## Data-Driven Testing
- Test cases are dynamically loaded from `data/testData.json` to minimize code duplication and improve scalability.

## Report
- Reports are automatically generated after tests.
- Use the `npx playwright show-report` command to open the report in your default browser.


## Video Walkthrough
- A video walkthrough of the test suite is provided in the submission.

## Notes
- Ensure the base URL in `playwright.config.js` matches the target application.
- All dependencies must be installed before running tests.

