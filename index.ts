/* eslint new-cap: off */ // Disable rule for Given, When, Then

// #############################################################################

import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures.js';

// #### Given steps ############################################################

Given('I/user go(es) to URL {string}', async ({ page, }, url: string) => {
    await page.goto(url);
});

// #### Then steps #############################################################

Then('the title should be {string}', async ({ page, }, text: string) => {
    await expect(page).toHaveTitle(text);
});

Then('the title should contain {string}', async ({ page, }, text: string) => {
    const regularExpression = new RegExp(`^.*${text}.*$`, 'g');

    await expect(page).toHaveTitle(regularExpression);
});
