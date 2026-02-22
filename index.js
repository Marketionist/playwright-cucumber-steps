'use strict';
/* eslint new-cap: off */ // Disable rule for Given, When, Then

// #############################################################################

import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures';
import { pageObjects } from './utils/get-page-objects';
import errors from './utils/errors';

const spacesToIndent = 4;

// #### Given steps ############################################################

Given('I/user go(es) to URL {string}', async ({ page, }, url) => {
    await page.goto(url);
});

Given(
    'I/user go(es) to {string}.{string}',
    async ({ page, }, pageObject, element) => {
        await page.goto(pageObjects[pageObject][element]);
    }
);

Given(
    'I/user go(es) to {word} from {word}( page)',
    async ({ page, }, element, pageObject) => {
        await page.goto(pageObjects[pageObject][element]);
    }
);

// #### When steps #############################################################

When(
    'I/user click(s) {string}.{string}',
    async ({ page, }, pageObject, element) => {
        try {
            await page.locator(pageObjects[pageObject][element]).click();
        } catch (error) {
            throw new Error(`${errors.NO_ELEMENT} "${pageObject}"."${element}"
                ${JSON.stringify(error, null, spacesToIndent)}`);
        }
    }
);

When(
    'I/user click(s) {word} from {word}( page)',
    async ({ page, }, element, pageObject) => {
        try {
            await page.locator(pageObjects[pageObject][element]).click();
        } catch (error) {
            throw new Error(`${errors.NO_ELEMENT} "${pageObject}"."${element}"
                ${JSON.stringify(error, null, spacesToIndent)}`);
        }
    }
);

When(
    'I/user right click(s) {string}.{string}',
    async ({ page, }, pageObject, element) => {
        try {
            await page.locator(pageObjects[pageObject][element]).click({
                button: 'right',
            });
        } catch (error) {
            throw new Error(`${errors.NO_ELEMENT} "${pageObject}"."${element}"
                ${JSON.stringify(error, null, spacesToIndent)}`);
        }
    }
);

When(
    'I/user right click(s) {word} from {word}( page)',
    async ({ page, }, element, pageObject) => {
        try {
            await page.locator(pageObjects[pageObject][element]).click({
                button: 'right',
            });
        } catch (error) {
            throw new Error(`${errors.NO_ELEMENT} "${pageObject}"."${element}"
                ${JSON.stringify(error, null, spacesToIndent)}`);
        }
    }
);

When(
    'I/user double click(s) {string}.{string}',
    async ({ page, }, pageObject, element) => {
        try {
            await page.locator(pageObjects[pageObject][element]).dblclick();
        } catch (error) {
            throw new Error(`${errors.NO_ELEMENT} "${pageObject}"."${element}"
                ${JSON.stringify(error, null, spacesToIndent)}`);
        }
    }
);

When(
    'I/user double click(s) {word} from {word}( page)',
    async ({ page, }, element, pageObject) => {
        try {
            await page.locator(pageObjects[pageObject][element]).dblclick();
        } catch (error) {
            throw new Error(`${errors.NO_ELEMENT} "${pageObject}"."${element}"
                ${JSON.stringify(error, null, spacesToIndent)}`);
        }
    }
);

When(
    'I/user click(s) {string}.{string} if present',
    async ({ page, }, pageObject, element) => {
        const elementOnPage = page.locator(pageObjects[pageObject][element]);

        if (await elementOnPage.isVisible()) {
            await elementOnPage.click();
        }
    }
);

When(
    'I/user click(s) {word} from {word}( page) if present',
    async ({ page, }, element, pageObject) => {
        const elementOnPage = page.locator(pageObjects[pageObject][element]);

        if (await elementOnPage.isVisible()) {
            await elementOnPage.click();
        }
    }
);

When('I/user type(s) {string} into {string}.{string}', async (
    { page, }, text, pageObject, element
) => {
    await page.locator(pageObjects[pageObject][element]).fill(text);
});

When('I/user type(s) {string} into {word} from {word}( page)', async (
    { page, }, text, element, pageObject
) => {
    await page.locator(pageObjects[pageObject][element]).fill(text);
});

When('I/user type(s) {string}.{string} into {string}.{string}', async (
    { page, },
    pageObject1,
    element1,
    pageObject2,
    element2
) => {
    await page.locator(pageObjects[pageObject2][element2])
        .fill(pageObjects[pageObject1][element1]);
});

When('I/user type(s) {word} from {word}( page) into {word} from {word}( page)', async (
    { page, },
    element1,
    pageObject1,
    element2,
    pageObject2
) => {
    await page.locator(pageObjects[pageObject2][element2])
        .fill(pageObjects[pageObject1][element1]);
});

When('I/user clear(s) {string}.{string} and type(s) {string}', async (
    { page, }, pageObject, element, text
) => {
    await page.locator(pageObjects[pageObject][element]).fill('');
    await page.locator(pageObjects[pageObject][element]).fill(text);
});

When('I/user clear(s) {word} from {word}( page) and type(s) {string}', async (
    { page, }, element, pageObject, text
) => {
    await page.locator(pageObjects[pageObject][element]).fill('');
    await page.locator(pageObjects[pageObject][element]).fill(text);
});

When('I/user clear(s) {string}.{string} and type(s) {string}.{string}', async (
    { page, },
    pageObject1,
    element1,
    pageObject2,
    element2
) => {
    await page.locator(pageObjects[pageObject1][element1]).fill('');
    await page.locator(pageObjects[pageObject1][element1])
        .fill(pageObjects[pageObject2][element2]);
});

When('I/user clear(s) {word} from {word}( page) and type(s) {word} from {word}( page)', async (
    { page, },
    element1,
    pageObject1,
    element2,
    pageObject2
) => {
    await page.locator(pageObjects[pageObject1][element1]).fill('');
    await page.locator(pageObjects[pageObject1][element1])
        .fill(pageObjects[pageObject2][element2]);
});

When('I/user select(s) {string} in {string}.{string}', async (
    { page, }, text, pageObject, element
) => {
    await page.locator(pageObjects[pageObject][element])
        .selectOption({ label: text, });
});

When('I/user select(s) {string} in {word} from {word}( page)', async (
    { page, }, text, element, pageObject
) => {
    await page.locator(pageObjects[pageObject][element])
        .selectOption({ label: text, });
});

When('I/user select(s) {string}.{string} in {string}.{string}', async (
    { page, },
    pageObject1,
    element1,
    pageObject2,
    element2
) => {
    await page.locator(pageObjects[pageObject2][element2])
        .selectOption({ label: pageObjects[pageObject1][element1], });
});

When('I/user select(s) {word} from {word}( page) in {word} from {word}( page)', async (
    { page, },
    element1,
    pageObject1,
    element2,
    pageObject2
) => {
    await page.locator(pageObjects[pageObject2][element2])
        .selectOption({ label: pageObjects[pageObject1][element1], });
});

When('I/user move(s) to {string}.{string}', async (
    { page, }, pageObject, element
) => {
    await page.locator(pageObjects[pageObject][element]).hover();
});


When('I/user move(s) to {word} from {word}( page)', async (
    { page, }, element, pageObject
) => {
    await page.locator(pageObjects[pageObject][element]).hover();
});

When('I/user reload(s) the page', async ({ page, }) => {
    await page.reload();
});

When('I/user wait(s) for {int} ms', async ({ page, }, timeToWait) => {
    // Timeout to wait for in milliseconds
    await page.waitForTimeout(timeToWait);
});

// #### Then steps #############################################################

Then('page title should be {string}', async ({ page, }, text) => {
    await expect(page).toHaveTitle(text);
});

Then('page title should contain {string}', async ({ page, }, text) => {
    const regularExpression = new RegExp(`^.*${text}.*$`, 'g');

    await expect(page).toHaveTitle(regularExpression);
});

Then('{string}.{string} should be present', async (
    { page, }, pageObject, element
) => {
    await expect(page.locator(pageObjects[pageObject][element])).toBeVisible();
});

Then('{word} from {word}( page) should be present', async (
    { page, }, element, pageObject
) => {
    await expect(page.locator(pageObjects[pageObject][element])).toBeVisible();
});

Then('{int} {string}.{string} should be present', async (
    { page, }, number, pageObject, element
) => {
    await expect(page.locator(pageObjects[pageObject][element]))
        .toHaveCount(number);
});

Then('{int} {word} from {word}( page) should be present', async (
    { page, }, number, element, pageObject
) => {
    await expect(page.locator(pageObjects[pageObject][element]))
        .toHaveCount(number);
});

Then('{string}.{string} should not be present', async (
    { page, }, pageObject, element
) => {
    await expect(page.locator(pageObjects[pageObject][element]))
        .not.toBeVisible();
});

Then('{word} from {word}( page) should not be present', async (
    { page, }, element, pageObject
) => {
    await expect(page.locator(pageObjects[pageObject][element]))
        .not.toBeVisible();
});

Then('{string}.{string} text should be {string}', async (
    { page, }, pageObject, element, text
) => {
    await expect(page.locator(pageObjects[pageObject][element]))
        .toHaveText(text);
});

Then('{word} from {word}( page) text should be {string}', async (
    { page, }, element, pageObject, text
) => {
    await expect(page.locator(pageObjects[pageObject][element]))
        .toHaveText(text);
});

Then('{string}.{string} text should be {string}.{string}', async (
    { page, },
    pageObject1,
    element1,
    pageObject2,
    element2
) => {
    await expect(page.locator(pageObjects[pageObject1][element1]))
        .toHaveText(pageObjects[pageObject2][element2]);
});

Then('{word} from {word}( page) text should be {word} from {word}( page)', async (
    { page, },
    element1,
    pageObject1,
    element2,
    pageObject2
) => {
    await expect(page.locator(pageObjects[pageObject1][element1]))
        .toHaveText(pageObjects[pageObject2][element2]);
});

Then('{string}.{string} text should contain {string}', async (
    { page, }, pageObject, element, text
) => {
    await expect(page.locator(pageObjects[pageObject][element]))
        .toContainText(text);
});

Then('{word} from {word}( page) text should contain {string}', async (
    { page, }, element, pageObject, text
) => {
    await expect(page.locator(pageObjects[pageObject][element]))
        .toContainText(text);
});

Then('{string}.{string} text should contain {string}.{string}', async (
    { page, },
    pageObject1,
    element1,
    pageObject2,
    element2
) => {
    await expect(page.locator(pageObjects[pageObject1][element1]))
        .toContainText(pageObjects[pageObject2][element2]);
});

Then('{word} from {word}( page) text should contain {word} from {word}( page)', async (
    { page, },
    element1,
    pageObject1,
    element2,
    pageObject2
) => {
    await expect(page.locator(pageObjects[pageObject1][element1]))
        .toContainText(pageObjects[pageObject2][element2]);
});

Then('URL should be {string}', async ({ page, }, text) => {
    await expect(page).toHaveURL(text);
});

Then('URL should be {string}.{string}', async (
    { page, }, pageObject, element
) => {
    await expect(page).toHaveURL(pageObjects[pageObject][element]);
});

Then('URL should be {word} from {word}( page)', async (
    { page, }, element, pageObject
) => {
    await expect(page).toHaveURL(pageObjects[pageObject][element]);
});

Then('URL should contain {string}', async ({ page, }, text) => {
    const currentUrl = page.url();

    expect(currentUrl).toContain(text);
});

Then('URL should contain {string}.{string}', async (
    { page, }, pageObject, element
) => {
    const currentUrl = page.url();

    expect(currentUrl).toContain(pageObjects[pageObject][element]);
});

Then('URL should contain {word} from {word}( page)', async (
    { page, }, element, pageObject
) => {
    const currentUrl = page.url();

    expect(currentUrl).toContain(pageObjects[pageObject][element]);
});
