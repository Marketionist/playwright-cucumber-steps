/* eslint new-cap: off */ // Disable rule for Given, When, Then
/* eslint max-params: off */

// #############################################################################

import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures.ts';
export { Given, When, Then } from './fixtures.ts';
import { pageObjects } from './utils/get-page-objects.ts';
export { pageObjects } from './utils/get-page-objects.ts';
import errors from './utils/errors.ts';
import { sendRequest, verifyResponseBody } from './utils/verify-api.ts';


const spacesToIndent = 4;

// #### Given steps ############################################################

Given('I/user go(es) to URL {string}', async ({ page, }, url: string) => {
    await page.goto(url);
});

Given(
    'I/user go(es) to {string}.{string}',
    async ({ page, }, pageObject: string, element: string) => {
        await page.goto(pageObjects[pageObject][element]);
    }
);

Given(
    'I/user go(es) to {word} from {word}( page)',
    async ({ page, }, element: string, pageObject: string) => {
        await page.goto(pageObjects[pageObject][element]);
    }
);

Given('I/user send(s) {string} request to {string} with body {string}', async (
    { request, ctx, }, reqMethod: string, reqUrl: string, reqBody: string
) => {
    await sendRequest({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: reqUrl,
        requestBody: reqBody,
    });
});

Given('I/user send(s) {string} request to {string} with body {string}.{string}', async (
    { request, ctx, },
    reqMethod: string,
    reqUrl: string,
    pageObject: string,
    element: string
) => {
    await sendRequest({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: reqUrl,
        requestBody: pageObjects[pageObject][element],
    });
});

Given('I/user send(s) {string} request to {string}.{string} with body {string}.{string}', async (
    { request, ctx, },
    reqMethod: string,
    pageObject1: string,
    element1: string,
    pageObject2: string,
    element2: string
) => {
    await sendRequest({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: pageObjects[pageObject1][element1],
        requestBody: pageObjects[pageObject2][element2],
    });
});

Given(
    'I/user send(s) {string} request to {word} from {word}( page) with body {word} from {word}( page)', async (
        { request, ctx, },
        reqMethod: string,
        element1: string,
        pageObject1: string,
        element2: string,
        pageObject2: string
    ) => {
        await sendRequest({
            request: request,
            context: ctx,
            requestMethod: reqMethod,
            requestUrl: pageObjects[pageObject1][element1],
            requestBody: pageObjects[pageObject2][element2],
        });
    }
);

Given('I/user send(s) {string} request to {string} with headers {string} and body {string}', async (
    { request, ctx, },
    reqMethod: string,
    reqUrl: string,
    reqHeaders: string,
    reqBody: string
) => {
    await sendRequest({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: reqUrl,
        requestHeaders: reqHeaders,
        requestBody: reqBody,
    });
});

Given('I/user send(s) {string} request to {string} with headers {string}.{string} and body {string}.{string}', async (
    { request, ctx, },
    reqMethod: string,
    reqUrl: string,
    pageObject1: string,
    element1: string,
    pageObject2: string,
    element2: string
) => {
    await sendRequest({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: reqUrl,
        requestHeaders: pageObjects[pageObject1][element1],
        requestBody: pageObjects[pageObject2][element2],
    });
});

Given(
    'I/user send(s) {string} request to {string}.{string} with ' +
    'headers {string}.{string} and body {string}.{string}', async (
        { request, ctx, },
        reqMethod: string,
        pageObject1: string,
        element1: string,
        pageObject2: string,
        element2: string,
        pageObject3: string,
        element3: string
    ) => {
        await sendRequest({
            request: request,
            context: ctx,
            requestMethod: reqMethod,
            requestUrl: pageObjects[pageObject1][element1],
            requestHeaders: pageObjects[pageObject2][element2],
            requestBody: pageObjects[pageObject3][element3],
        });
    }
);

Given(
    'I/user send(s) {string} request to {word} from {word}( page) with ' +
    'headers {word} from {word}( page) and body {word} from {word}( page)', async (
        { request, ctx, },
        reqMethod: string,
        element1: string,
        pageObject1: string,
        element2: string,
        pageObject2: string,
        element3: string,
        pageObject3: string
    ) => {
        await sendRequest({
            request: request,
            context: ctx,
            requestMethod: reqMethod,
            requestUrl: pageObjects[pageObject1][element1],
            requestHeaders: pageObjects[pageObject2][element2],
            requestBody: pageObjects[pageObject3][element3],
        });
    }
);

// #### When steps #############################################################

When(
    'I/user click(s) {string}.{string}',
    async ({ page, }, pageObject: string, element: string) => {
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
    async ({ page, }, element: string, pageObject: string) => {
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
    async ({ page, }, pageObject: string, element: string) => {
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
    async ({ page, }, element: string, pageObject: string) => {
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
    async ({ page, }, pageObject: string, element: string) => {
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
    async ({ page, }, element: string, pageObject: string) => {
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
    async ({ page, }, pageObject: string, element: string) => {
        const elementOnPage = page.locator(pageObjects[pageObject][element]);

        if (await elementOnPage.isVisible()) {
            await elementOnPage.click();
        }
    }
);

When(
    'I/user click(s) {word} from {word}( page) if present',
    async ({ page, }, element: string, pageObject: string) => {
        const elementOnPage = page.locator(pageObjects[pageObject][element]);

        if (await elementOnPage.isVisible()) {
            await elementOnPage.click();
        }
    }
);

When('I/user type(s) {string} into {string}.{string}', async (
    { page, }, text: string, pageObject: string, element: string
) => {
    await page.locator(pageObjects[pageObject][element]).fill(text);
});

When('I/user type(s) {string} into {word} from {word}( page)', async (
    { page, }, text: string, element: string, pageObject: string
) => {
    await page.locator(pageObjects[pageObject][element]).fill(text);
});

When('I/user type(s) {string}.{string} into {string}.{string}', async (
    { page, },
    pageObject1: string,
    element1: string,
    pageObject2: string,
    element2: string
) => {
    await page.locator(pageObjects[pageObject2][element2])
        .fill(pageObjects[pageObject1][element1]);
});

When('I/user type(s) {word} from {word}( page) into {word} from {word}( page)', async (
    { page, },
    element1: string,
    pageObject1: string,
    element2: string,
    pageObject2: string
) => {
    await page.locator(pageObjects[pageObject2][element2])
        .fill(pageObjects[pageObject1][element1]);
});

When('I/user clear(s) {string}.{string} and type(s) {string}', async (
    { page, }, pageObject: string, element: string, text: string
) => {
    await page.locator(pageObjects[pageObject][element]).fill('');
    await page.locator(pageObjects[pageObject][element]).fill(text);
});

When('I/user clear(s) {word} from {word}( page) and type(s) {string}', async (
    { page, }, element: string, pageObject: string, text: string
) => {
    await page.locator(pageObjects[pageObject][element]).fill('');
    await page.locator(pageObjects[pageObject][element]).fill(text);
});

When('I/user clear(s) {string}.{string} and type(s) {string}.{string}', async (
    { page, },
    pageObject1: string,
    element1: string,
    pageObject2: string,
    element2: string
) => {
    await page.locator(pageObjects[pageObject1][element1]).fill('');
    await page.locator(pageObjects[pageObject1][element1])
        .fill(pageObjects[pageObject2][element2]);
});

When('I/user clear(s) {word} from {word}( page) and type(s) {word} from {word}( page)', async (
    { page, },
    element1: string,
    pageObject1: string,
    element2: string,
    pageObject2: string
) => {
    await page.locator(pageObjects[pageObject1][element1]).fill('');
    await page.locator(pageObjects[pageObject1][element1])
        .fill(pageObjects[pageObject2][element2]);
});

When('I/user select(s) {string} in {string}.{string}', async (
    { page, }, text: string, pageObject: string, element: string
) => {
    await page.locator(pageObjects[pageObject][element])
        .selectOption({ label: text, });
});

When('I/user select(s) {string} in {word} from {word}( page)', async (
    { page, }, text: string, element: string, pageObject: string
) => {
    await page.locator(pageObjects[pageObject][element])
        .selectOption({ label: text, });
});

When('I/user select(s) {string}.{string} in {string}.{string}', async (
    { page, },
    pageObject1: string,
    element1: string,
    pageObject2: string,
    element2: string
) => {
    await page.locator(pageObjects[pageObject2][element2])
        .selectOption({ label: pageObjects[pageObject1][element1], });
});

When('I/user select(s) {word} from {word}( page) in {word} from {word}( page)', async (
    { page, },
    element1: string,
    pageObject1: string,
    element2: string,
    pageObject2: string
) => {
    await page.locator(pageObjects[pageObject2][element2])
        .selectOption({ label: pageObjects[pageObject1][element1], });
});

When('I/user move(s) to {string}.{string}', async (
    { page, }, pageObject: string, element: string
) => {
    await page.locator(pageObjects[pageObject][element]).hover();
});


When('I/user move(s) to {word} from {word}( page)', async (
    { page, }, element: string, pageObject: string
) => {
    await page.locator(pageObjects[pageObject][element]).hover();
});

When('I/user reload(s) the page', async ({ page, }) => {
    await page.reload();
});

When('I/user wait(s) for {int} ms', async ({ page, }, timeToWait: number) => {
    // Timeout to wait for in milliseconds
    await page.waitForTimeout(timeToWait);
});

// #### Then steps #############################################################

Then('page title should be {string}', async ({ page, }, text: string) => {
    await expect(page).toHaveTitle(text);
});

Then('page title should contain {string}', async ({ page, }, text: string) => {
    const regularExpression = new RegExp(`^.*${text}.*$`, 'g');

    await expect(page).toHaveTitle(regularExpression);
});

Then('{string}.{string} should be present', async (
    { page, }, pageObject: string, element: string
) => {
    await expect(page.locator(pageObjects[pageObject][element])).toBeVisible();
});

Then('{word} from {word}( page) should be present', async (
    { page, }, element: string, pageObject: string
) => {
    await expect(page.locator(pageObjects[pageObject][element])).toBeVisible();
});

Then('{int} {string}.{string} should be present', async (
    { page, }, number: number, pageObject: string, element: string
) => {
    await expect(page.locator(pageObjects[pageObject][element]))
        .toHaveCount(number);
});

Then('{int} {word} from {word}( page) should be present', async (
    { page, }, number: number, element: string, pageObject: string
) => {
    await expect(page.locator(pageObjects[pageObject][element]))
        .toHaveCount(number);
});

Then('{string}.{string} should not be present', async (
    { page, }, pageObject: string, element: string
) => {
    await expect(page.locator(pageObjects[pageObject][element]))
        .not.toBeVisible();
});

Then('{word} from {word}( page) should not be present', async (
    { page, }, element: string, pageObject: string
) => {
    await expect(page.locator(pageObjects[pageObject][element]))
        .not.toBeVisible();
});

Then('{string}.{string} text should be {string}', async (
    { page, }, pageObject: string, element: string, text: string
) => {
    await expect(page.locator(pageObjects[pageObject][element]))
        .toHaveText(text);
});

Then('{word} from {word}( page) text should be {string}', async (
    { page, }, element: string, pageObject: string, text: string
) => {
    await expect(page.locator(pageObjects[pageObject][element]))
        .toHaveText(text);
});

Then('{string}.{string} text should be {string}.{string}', async (
    { page, },
    pageObject1: string,
    element1: string,
    pageObject2: string,
    element2: string
) => {
    await expect(page.locator(pageObjects[pageObject1][element1]))
        .toHaveText(pageObjects[pageObject2][element2]);
});

Then('{word} from {word}( page) text should be {word} from {word}( page)', async (
    { page, },
    element1: string,
    pageObject1: string,
    element2: string,
    pageObject2: string
) => {
    await expect(page.locator(pageObjects[pageObject1][element1]))
        .toHaveText(pageObjects[pageObject2][element2]);
});

Then('{string}.{string} text should contain {string}', async (
    { page, }, pageObject: string, element: string, text: string
) => {
    await expect(page.locator(pageObjects[pageObject][element]))
        .toContainText(text);
});

Then('{word} from {word}( page) text should contain {string}', async (
    { page, }, element: string, pageObject: string, text: string
) => {
    await expect(page.locator(pageObjects[pageObject][element]))
        .toContainText(text);
});

Then('{string}.{string} text should contain {string}.{string}', async (
    { page, },
    pageObject1: string,
    element1: string,
    pageObject2: string,
    element2: string
) => {
    await expect(page.locator(pageObjects[pageObject1][element1]))
        .toContainText(pageObjects[pageObject2][element2]);
});

Then('{word} from {word}( page) text should contain {word} from {word}( page)', async (
    { page, },
    element1: string,
    pageObject1: string,
    element2: string,
    pageObject2: string
) => {
    await expect(page.locator(pageObjects[pageObject1][element1]))
        .toContainText(pageObjects[pageObject2][element2]);
});

Then('page URL should be {string}', async ({ page, }, text: string) => {
    await expect(page).toHaveURL(text);
});

Then('page URL should be {string}.{string}', async (
    { page, }, pageObject: string, element: string
) => {
    await expect(page).toHaveURL(pageObjects[pageObject][element]);
});

Then('page URL should be {word} from {word}( page)', async (
    { page, }, element: string, pageObject: string
) => {
    await expect(page).toHaveURL(pageObjects[pageObject][element]);
});

Then('page URL should contain {string}', async ({ page, }, text: string) => {
    const currentUrl = page.url();

    expect(currentUrl).toContain(text);
});

Then('page URL should contain {string}.{string}', async (
    { page, }, pageObject: string, element: string
) => {
    const currentUrl = page.url();

    expect(currentUrl).toContain(pageObjects[pageObject][element]);
});

Then('page URL should contain {word} from {word}( page)', async (
    { page, }, element: string, pageObject: string
) => {
    const currentUrl = page.url();

    expect(currentUrl).toContain(pageObjects[pageObject][element]);
});

Then('response body should contain {string}', async (
    { ctx, }, resProperty: string
) => {
    await verifyResponseBody(ctx, resProperty);
});

Then('response body should contain {string}.{string}', async (
    { ctx, }, pageObject: string, element: string
) => {
    await verifyResponseBody(ctx, pageObjects[pageObject][element]);
});

Then('response body should contain {word} from {word}( page)', async (
    { ctx, }, element: string, pageObject: string
) => {
    await verifyResponseBody(ctx, pageObjects[pageObject][element]);
});
