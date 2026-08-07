/* eslint new-cap: off */ // Disable rule for Given, When, Then
/* eslint max-params: off */

// #############################################################################

import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures';
export { Given, When, Then } from './fixtures';
import { pageObjects } from './utils/get-page-objects';
export { pageObjects } from './utils/get-page-objects';
import errors from './utils/errors';
import {
    sendRequest,
    verifyResponseStatus,
    verifyResponseBody,
    verifyResponseHeaders
} from './utils/verify-api';


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

Given('I/user send(s) {string} request to {word} from {word}( page) with body {word} from {word}( page)', async (
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
});

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

Given('I/user send(s) {string} request to {string} with body:', async (
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

Given('I/user send(s) {string} request to {string}.{string} with body:', async (
    { request, ctx, },
    reqMethod: string,
    pageObject: string,
    element: string,
    reqBody: string
) => {
    await sendRequest({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: pageObjects[pageObject][element],
        requestBody: reqBody,
    });
});

Given('I/user send(s) {string} request to {word} from {word}( page) with body:', async (
    { request, ctx, },
    reqMethod: string,
    element: string,
    pageObject: string,
    reqBody: string
) => {
    await sendRequest({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: pageObjects[pageObject][element],
        requestBody: reqBody,
    });
});

Given('I/user send(s) {string} request to {string} with headers and body:', async (
    { request, ctx, },
    reqMethod: string,
    reqUrl: string,
    reqHeadersAndBody: string
) => {
    const reqHeadersBody = JSON.parse(reqHeadersAndBody);

    await sendRequest({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: reqUrl,
        requestHeaders: reqHeadersBody.headers,
        requestBody: reqHeadersBody.body,
    });
});

Given('I/user send(s) {string} request to {string}.{string} with headers and body:', async (
    { request, ctx, },
    reqMethod: string,
    pageObject: string,
    element: string,
    reqHeadersAndBody: string
) => {
    const reqHeadersBody = JSON.parse(reqHeadersAndBody);

    await sendRequest({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: pageObjects[pageObject][element],
        requestHeaders: reqHeadersBody.headers,
        requestBody: reqHeadersBody.body,
    });
});

Given('I/user send(s) {string} request to {word} from {word}( page) with headers and body:', async (
    { request, ctx, },
    reqMethod: string,
    element: string,
    pageObject: string,
    reqHeadersAndBody: string
) => {
    const reqHeadersBody = JSON.parse(reqHeadersAndBody);

    await sendRequest({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: pageObjects[pageObject][element],
        requestHeaders: reqHeadersBody.headers,
        requestBody: reqHeadersBody.body,
    });
});

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

When('I/user enter(s) {string} into {string}.{string}', async (
    { page, }, text: string, pageObject: string, element: string
) => {
    await page.locator(pageObjects[pageObject][element]).fill(text);
});

When('I/user enter(s) {string} into {word} from {word}( page)', async (
    { page, }, text: string, element: string, pageObject: string
) => {
    await page.locator(pageObjects[pageObject][element]).fill(text);
});

When('I/user enter(s) {string}.{string} into {string}.{string}', async (
    { page, },
    pageObject1: string,
    element1: string,
    pageObject2: string,
    element2: string
) => {
    await page.locator(pageObjects[pageObject2][element2])
        .fill(pageObjects[pageObject1][element1]);
});

When('I/user enter(s) {word} from {word}( page) into {word} from {word}( page)', async (
    { page, },
    element1: string,
    pageObject1: string,
    element2: string,
    pageObject2: string
) => {
    await page.locator(pageObjects[pageObject2][element2])
        .fill(pageObjects[pageObject1][element1]);
});

When('I/user type(s) {string} into {string}.{string}', async (
    { page, }, text: string, pageObject: string, element: string
) => {
    const elementOnPage = await page.locator(pageObjects[pageObject][element]);

    await elementOnPage.click();
    await elementOnPage.pressSequentially(text);
});

When('I/user type(s) {string} into {word} from {word}( page)', async (
    { page, }, text: string, element: string, pageObject: string
) => {
    const elementOnPage = await page.locator(pageObjects[pageObject][element]);

    await elementOnPage.click();
    await elementOnPage.pressSequentially(text);
});

When('I/user type(s) {string}.{string} into {string}.{string}', async (
    { page, },
    pageObject1: string,
    element1: string,
    pageObject2: string,
    element2: string
) => {
    const elementOnPage = await page.locator(pageObjects[pageObject2][element2]);

    await elementOnPage.click();
    await elementOnPage.pressSequentially(pageObjects[pageObject1][element1]);
});

When('I/user type(s) {word} from {word}( page) into {word} from {word}( page)', async (
    { page, },
    element1: string,
    pageObject1: string,
    element2: string,
    pageObject2: string
) => {
    const elementOnPage = await page.locator(pageObjects[pageObject2][element2]);

    await elementOnPage.click();
    await elementOnPage.pressSequentially(pageObjects[pageObject1][element1]);
});

When('I/user clear(s) {string}.{string} and type(s) {string}', async (
    { page, }, pageObject: string, element: string, text: string
) => {
    const elementOnPage = await page.locator(pageObjects[pageObject][element]);

    // Clear the input cleanly in a single action
    await elementOnPage.clear();

    await elementOnPage.click();
    await elementOnPage.pressSequentially(text);
});

When('I/user clear(s) {word} from {word}( page) and type(s) {string}', async (
    { page, }, element: string, pageObject: string, text: string
) => {
    const elementOnPage = await page.locator(pageObjects[pageObject][element]);

    // Clear the input cleanly in a single action
    await elementOnPage.clear();

    await elementOnPage.click();
    await elementOnPage.pressSequentially(text);
});

When('I/user clear(s) {string}.{string} and type(s) {string}.{string}', async (
    { page, },
    pageObject1: string,
    element1: string,
    pageObject2: string,
    element2: string
) => {
    const elementOnPage = await page.locator(pageObjects[pageObject1][element1]);

    // Clear the input cleanly in a single action
    await elementOnPage.clear();

    await elementOnPage.click();
    await elementOnPage.pressSequentially(pageObjects[pageObject2][element2]);
});

When('I/user clear(s) {word} from {word}( page) and type(s) {word} from {word}( page)', async (
    { page, },
    element1: string,
    pageObject1: string,
    element2: string,
    pageObject2: string
) => {
    const elementOnPage = await page.locator(pageObjects[pageObject1][element1]);

    // Clear the input cleanly in a single action
    await elementOnPage.clear();

    await elementOnPage.click();
    await elementOnPage.pressSequentially(pageObjects[pageObject2][element2]);
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

Then('page title should be {string}.{string}', async (
    { page, }, pageObject: string, element: string
) => {
    await expect(page).toHaveTitle(pageObjects[pageObject][element]);
});

Then('page title should be {word} from {word}( page)', async (
    { page, }, element: string, pageObject: string
) => {
    await expect(page).toHaveTitle(pageObjects[pageObject][element]);
});

Then('page title should contain {string}', async ({ page, }, text: string) => {
    const regularExpression = new RegExp(`^.*${text}.*$`, 'g');

    await expect(page).toHaveTitle(regularExpression);
});

Then('page title should contain {string}.{string}', async (
    { page, }, pageObject: string, element: string
) => {
    const regularExpression = new RegExp(
        `^.*${pageObjects[pageObject][element]}.*$`, 'g'
    );

    await expect(page).toHaveTitle(regularExpression);
});

Then('page title should contain {word} from {word}( page)', async (
    { page, }, element: string, pageObject: string
) => {
    const regularExpression = new RegExp(
        `^.*${pageObjects[pageObject][element]}.*$`, 'g'
    );

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

Then('{string}.{string} input should be {string}', async (
    { page, }, pageObject: string, element: string, text: string
) => {
    const textareaElement = page.locator(pageObjects[pageObject][element]);

    await expect(textareaElement).toHaveValue(text);
});

Then('{word} from {word}( page) input should be {string}', async (
    { page, }, element: string, pageObject: string, text: string
) => {
    const textareaElement = page.locator(pageObjects[pageObject][element]);

    await expect(textareaElement).toHaveValue(text);
});

Then('{string}.{string} input should be {string}.{string}', async (
    { page, },
    pageObject1: string,
    element1: string,
    pageObject2: string,
    element2: string
) => {
    const textareaElement = page.locator(pageObjects[pageObject1][element1]);

    await expect(textareaElement).toHaveValue(pageObjects[pageObject2][element2]);
});

Then('{word} from {word}( page) input should be {word} from {word}( page)', async (
    { page, },
    element1: string,
    pageObject1: string,
    element2: string,
    pageObject2: string
) => {
    const textareaElement = page.locator(pageObjects[pageObject1][element1]);

    await expect(textareaElement).toHaveValue(pageObjects[pageObject2][element2]);
});

Then('{string}.{string} input should contain {string}', async (
    { page, }, pageObject: string, element: string, text: string
) => {
    const textareaElement = page.locator(pageObjects[pageObject][element]);
    const textContent = await textareaElement.inputValue();

    expect(textContent).toContain(text);
});

Then('{word} from {word}( page) input should contain {string}', async (
    { page, }, element: string, pageObject: string, text: string
) => {
    const textareaElement = page.locator(pageObjects[pageObject][element]);
    const textContent = await textareaElement.inputValue();

    expect(textContent).toContain(text);
});

Then('{string}.{string} input should contain {string}.{string}', async (
    { page, },
    pageObject1: string,
    element1: string,
    pageObject2: string,
    element2: string
) => {
    const textareaElement = page.locator(pageObjects[pageObject1][element1]);
    const textContent = await textareaElement.inputValue();

    expect(textContent).toContain(pageObjects[pageObject2][element2]);
});

Then('{word} from {word}( page) input should contain {word} from {word}( page)', async (
    { page, },
    element1: string,
    pageObject1: string,
    element2: string,
    pageObject2: string
) => {
    const textareaElement = page.locator(pageObjects[pageObject1][element1]);
    const textContent = await textareaElement.inputValue();

    expect(textContent).toContain(pageObjects[pageObject2][element2]);
});

Then('{string}.{string} input length should be {int}', async (
    { page, },
    pageObject: string,
    element: string,
    number: number
) => {
    const textareaElement = page.locator(pageObjects[pageObject][element]);
    const textContent = await textareaElement.inputValue();

    expect(textContent.length).toBe(number);
});

Then('{word} from {word}( page) input length should be {int}', async (
    { page, },
    element: string,
    pageObject: string,
    number: number
) => {
    const textareaElement = page.locator(pageObjects[pageObject][element]);
    const textContent = await textareaElement.inputValue();

    expect(textContent.length).toBe(number);
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

Then('{string}.{string} attribute {string} should be {string}', async (
    { page, }, pageObject: string, element: string, attribute: string, text: string
) => {
    const regularExpression = new RegExp(`^${text}$`, 'g');

    await expect(page.locator(pageObjects[pageObject][element]))
        .toHaveAttribute(attribute, regularExpression);
});

Then('{word} from {word}( page) attribute {string} should be {string}', async (
    { page, }, element: string, pageObject: string, attribute: string, text: string
) => {
    const regularExpression = new RegExp(`^${text}$`, 'g');

    await expect(page.locator(pageObjects[pageObject][element]))
        .toHaveAttribute(attribute, regularExpression);
});

Then('{string}.{string} attribute {string} should be {string}.{string}', async (
    { page, },
    pageObject1: string,
    element1: string,
    attribute: string,
    pageObject2: string,
    element2: string
) => {
    const regularExpression = new RegExp(
        `^${pageObjects[pageObject2][element2]}$`, 'g'
    );

    await expect(page.locator(pageObjects[pageObject1][element1]))
        .toHaveAttribute(attribute, regularExpression);
});

Then('{word} from {word}( page) attribute {string} should be {word} from {word}( page)', async (
    { page, },
    element1: string,
    pageObject1: string,
    attribute: string,
    element2: string,
    pageObject2: string
) => {
    const regularExpression = new RegExp(
        `^${pageObjects[pageObject2][element2]}$`, 'g'
    );

    await expect(page.locator(pageObjects[pageObject1][element1]))
        .toHaveAttribute(attribute, regularExpression);
});

Then('{string}.{string} attribute {string} should contain {string}', async (
    { page, }, pageObject: string, element: string, attribute: string, text: string
) => {
    const regularExpression = new RegExp(`^.*${text}.*$`, 'g');

    await expect(page.locator(pageObjects[pageObject][element]))
        .toHaveAttribute(attribute, regularExpression);
});

Then('{word} from {word}( page) attribute {string} should contain {string}', async (
    { page, }, element: string, pageObject: string, attribute: string, text: string
) => {
    const regularExpression = new RegExp(`^.*${text}.*$`, 'g');

    await expect(page.locator(pageObjects[pageObject][element]))
        .toHaveAttribute(attribute, regularExpression);
});

Then('{string}.{string} attribute {string} should contain {string}.{string}', async (
    { page, },
    pageObject1: string,
    element1: string,
    attribute: string,
    pageObject2: string,
    element2: string
) => {
    const regularExpression = new RegExp(
        `^.*${pageObjects[pageObject2][element2]}.*$`, 'g'
    );

    await expect(page.locator(pageObjects[pageObject1][element1]))
        .toHaveAttribute(attribute, regularExpression);
});

Then('{word} from {word}( page) attribute {string} should contain {word} from {word}( page)', async (
    { page, },
    element1: string,
    pageObject1: string,
    attribute: string,
    element2: string,
    pageObject2: string
) => {
    const regularExpression = new RegExp(
        `^.*${pageObjects[pageObject2][element2]}.*$`, 'g'
    );

    await expect(page.locator(pageObjects[pageObject1][element1]))
        .toHaveAttribute(attribute, regularExpression);
});

Then('{string}.{string} attribute {string} should not contain {string}', async (
    { page, }, pageObject: string, element: string, attribute: string, text: string
) => {
    const regularExpression = new RegExp(`^.*${text}.*$`, 'g');

    await expect(page.locator(pageObjects[pageObject][element]))
        .not.toHaveAttribute(attribute, regularExpression);
});

Then('{word} from {word}( page) attribute {string} should not contain {string}', async (
    { page, }, element: string, pageObject: string, attribute: string, text: string
) => {
    const regularExpression = new RegExp(`^.*${text}.*$`, 'g');

    await expect(page.locator(pageObjects[pageObject][element]))
        .not.toHaveAttribute(attribute, regularExpression);
});

Then('{string}.{string} attribute {string} should not contain {string}.{string}', async (
    { page, },
    pageObject1: string,
    element1: string,
    attribute: string,
    pageObject2: string,
    element2: string
) => {
    const regularExpression = new RegExp(
        `^.*${pageObjects[pageObject2][element2]}.*$`, 'g'
    );

    await expect(page.locator(pageObjects[pageObject1][element1]))
        .not.toHaveAttribute(attribute, regularExpression);
});

Then('{word} from {word}( page) attribute {string} should not contain {word} from {word}( page)', async (
    { page, },
    element1: string,
    pageObject1: string,
    attribute: string,
    element2: string,
    pageObject2: string
) => {
    const regularExpression = new RegExp(
        `^.*${pageObjects[pageObject2][element2]}.*$`, 'g'
    );

    await expect(page.locator(pageObjects[pageObject1][element1]))
        .not.toHaveAttribute(attribute, regularExpression);
});

Then('{string}.{string} CSS property {string} should be {string}', async (
    { page, }, pageObject: string, element: string, cssProperty: string, value: string
) => {
    const regularExpression = new RegExp(`^${value}$`, 'g');

    await expect(page.locator(pageObjects[pageObject][element])).toHaveCSS(cssProperty, regularExpression);
});

Then('{word} from {word}( page) CSS property {string} should be {string}', async (
    { page, }, element: string, pageObject: string, cssProperty: string, value: string
) => {
    const regularExpression = new RegExp(`^${value}$`, 'g');

    await expect(page.locator(pageObjects[pageObject][element])).toHaveCSS(cssProperty, regularExpression);
});

Then('{string}.{string} CSS property {string} should be {string}.{string}', async (
    { page, },
    pageObject1: string,
    element1: string,
    cssProperty: string,
    pageObject2: string,
    element2: string
) => {
    const regularExpression = new RegExp(`^${pageObjects[pageObject2][element2]}$`, 'g');

    await expect(page.locator(pageObjects[pageObject1][element1])).toHaveCSS(cssProperty, regularExpression);
});

Then('{word} from {word}( page) CSS property {string} should be {word} from {word}( page)', async (
    { page, },
    element1: string,
    pageObject1: string,
    cssProperty: string,
    element2: string,
    pageObject2: string
) => {
    const regularExpression = new RegExp(`^${pageObjects[pageObject2][element2]}$`, 'g');

    await expect(page.locator(pageObjects[pageObject1][element1])).toHaveCSS(cssProperty, regularExpression);
});

Then('{string}.{string} CSS property {string} should contain {string}', async (
    { page, }, pageObject: string, element: string, cssProperty: string, value: string
) => {
    const regularExpression = new RegExp(`^.*${value}.*$`, 'g');

    await expect(page.locator(pageObjects[pageObject][element])).toHaveCSS(cssProperty, regularExpression);
});

Then('{word} from {word}( page) CSS property {string} should contain {string}', async (
    { page, }, element: string, pageObject: string, cssProperty: string, value: string
) => {
    const regularExpression = new RegExp(`^.*${value}.*$`, 'g');

    await expect(page.locator(pageObjects[pageObject][element])).toHaveCSS(cssProperty, regularExpression);
});

Then('{string}.{string} CSS property {string} should contain {string}.{string}', async (
    { page, },
    pageObject1: string,
    element1: string,
    cssProperty: string,
    pageObject2: string,
    element2: string
) => {
    const regularExpression = new RegExp(`^.*${pageObjects[pageObject2][element2]}.*$`, 'g');

    await expect(page.locator(pageObjects[pageObject1][element1])).toHaveCSS(cssProperty, regularExpression);
});

Then('{word} from {word}( page) CSS property {string} should contain {word} from {word}( page)', async (
    { page, },
    element1: string,
    pageObject1: string,
    cssProperty: string,
    element2: string,
    pageObject2: string
) => {
    const regularExpression = new RegExp(`^.*${pageObjects[pageObject2][element2]}.*$`, 'g');

    await expect(page.locator(pageObjects[pageObject1][element1])).toHaveCSS(cssProperty, regularExpression);
});

Then('{string}.{string} CSS property {string} should not contain {string}', async (
    { page, }, pageObject: string, element: string, cssProperty: string, value: string
) => {
    const regularExpression = new RegExp(`^.*${value}.*$`, 'g');

    await expect(page.locator(pageObjects[pageObject][element])).not.toHaveCSS(cssProperty, regularExpression);
});

Then('{word} from {word}( page) CSS property {string} should not contain {string}', async (
    { page, }, element: string, pageObject: string, cssProperty: string, value: string
) => {
    const regularExpression = new RegExp(`^.*${value}.*$`, 'g');

    await expect(page.locator(pageObjects[pageObject][element])).not.toHaveCSS(cssProperty, regularExpression);
});

Then('{string}.{string} CSS property {string} should not contain {string}.{string}', async (
    { page, },
    pageObject1: string,
    element1: string,
    cssProperty: string,
    pageObject2: string,
    element2: string
) => {
    const regularExpression = new RegExp(`^.*${pageObjects[pageObject2][element2]}.*$`, 'g');

    await expect(page.locator(pageObjects[pageObject1][element1])).not.toHaveCSS(cssProperty, regularExpression);
});

Then('{word} from {word}( page) CSS property {string} should not contain {word} from {word}( page)', async (
    { page, },
    element1: string,
    pageObject1: string,
    cssProperty: string,
    element2: string,
    pageObject2: string
) => {
    const regularExpression = new RegExp(`^.*${pageObjects[pageObject2][element2]}.*$`, 'g');

    await expect(page.locator(pageObjects[pageObject1][element1])).not.toHaveCSS(cssProperty, regularExpression);
});

Then('response status code should be {int}', async (
    { ctx, }, resStatusCode: number
) => {
    await verifyResponseStatus(ctx, resStatusCode);
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

Then('response headers should contain {string}', async (
    { ctx, }, resProperty: string
) => {
    await verifyResponseHeaders(ctx, resProperty);
});

Then('response headers should contain {string}.{string}', async (
    { ctx, }, pageObject: string, element: string
) => {
    await verifyResponseHeaders(ctx, pageObjects[pageObject][element]);
});

Then('response headers should contain {word} from {word}( page)', async (
    { ctx, }, element: string, pageObject: string
) => {
    await verifyResponseHeaders(ctx, pageObjects[pageObject][element]);
});
