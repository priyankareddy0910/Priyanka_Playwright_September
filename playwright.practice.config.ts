import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './practice/typescript',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'off',
    headless: false,
    storageState: 'auth/sauce-session.json',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
