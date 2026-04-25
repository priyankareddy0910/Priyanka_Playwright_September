# Playwright Concepts Project

Small practice project for teaching:

- Playwright concepts
- TypeScript basics
- JavaScript basics

## Project Structure

- `playwright/tests/typescript/`
  Playwright concept specs like alerts, dropdowns, frames, tables, scrolling, radio buttons, auth, and window handles.
- `practice/typescript/`
  TypeScript concept files.
- `practice/javascript/`
  JavaScript concept files.

## Install

```bash
npm install
npx playwright install
```

## Run Playwright Tests

Run all tests:

```bash
npm test
```

Run Playwright tests in headed mode:

```bash
npm run test:headed
```

Run only TypeScript concept specs:

```bash
npm run test:ts
```

Run one file:

```bash
npx playwright test playwright/tests/typescript/dropdown.spec.ts
```

## Topics Covered

- Alerts
- Assertions
- Checkboxes
- Data-driven tests
- Double click
- Drag and drop
- Dropdowns
- File upload
- Frames
- Hooks
- Locators
- Radio buttons
- Scrolling
- Static select dropdown
- Static web tables
- Validation
- Window handles

## Notes

- Generated folders like `node_modules`, `playwright-report`, `test-results`, and saved auth state are excluded from sharing.
- This repo is intended as a classroom practice project, not a production test framework.
