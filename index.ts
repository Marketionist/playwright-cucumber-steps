/* eslint new-cap: off */ // Disable rule for Given, When, Then

// #############################################################################

import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures.ts';
import { pageObjects } from './utils/get-page-objects.ts';

// #### Given steps ############################################################

Given('I/user go(es) to URL {string}', async ({ page, }, url: string) => {
    await page.goto(url);
});

Given('I/user go(es) to {string}.{string}', async ({ page, }, pageObject: string, element: string) => {
    await page.goto(pageObjects[pageObject][element]);
});

Given('I/user go(es) to {word} from {word}( page)', async ({ page, }, element: string, pageObject: string) => {
    await page.goto(pageObjects[pageObject][element]);
});

// #### Then steps #############################################################

Then('page title should be {string}', async ({ page, }, text: string) => {
    await expect(page).toHaveTitle(text);
});

Then('page title should contain {string}', async ({ page, }, text: string) => {
    const regularExpression = new RegExp(`^.*${text}.*$`, 'g');

    await expect(page).toHaveTitle(regularExpression);
});
