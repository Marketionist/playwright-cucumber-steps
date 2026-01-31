import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

const testDir = defineBddConfig({
    features: 'tests/features/*.feature',
    steps: '*.ts',
});

export default defineConfig({
    // Look for test files in the directory, relative to this configuration file
    testDir,
    // Each test is given 30 seconds to finish
    timeout: 30000,

    // Forbid test.only on CI
    forbidOnly: !!process.env.CI,

    // One retry for each test
    retries: 1,
    reporter: [
        cucumberReporter('html', {
            outputFile: 'cucumber-report/index.html',
            externalAttachments: true,
        }),
    ],
    use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome', // or 'chrome-beta'
        headless: true,
        viewport: { width: 1920, height: 1080, },
        ignoreHTTPSErrors: true,
        trace: 'on',
        screenshot: 'on',
        video: 'on-first-retry',
    },
    // Run local server with test pages before starting the tests
    webServer: {
        command: 'npm run start:test-server',
        url: 'http://localhost:8001',
        stdout: 'pipe',
        stderr: 'pipe',
    },
});
