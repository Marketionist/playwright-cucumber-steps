"use strict";
/* eslint new-cap: off */ // Disable rule for Given, When, Then
/* eslint max-params: off */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageObjects = exports.Then = exports.When = exports.Given = void 0;
// #############################################################################
const test_1 = require("@playwright/test");
const fixtures_1 = require("./fixtures");
var fixtures_2 = require("./fixtures");
Object.defineProperty(exports, "Given", { enumerable: true, get: function () { return fixtures_2.Given; } });
Object.defineProperty(exports, "When", { enumerable: true, get: function () { return fixtures_2.When; } });
Object.defineProperty(exports, "Then", { enumerable: true, get: function () { return fixtures_2.Then; } });
const get_page_objects_1 = require("./utils/get-page-objects");
var get_page_objects_2 = require("./utils/get-page-objects");
Object.defineProperty(exports, "pageObjects", { enumerable: true, get: function () { return get_page_objects_2.pageObjects; } });
const errors_1 = __importDefault(require("./utils/errors"));
const verify_api_1 = require("./utils/verify-api");
const spacesToIndent = 4;
// #### Given steps ############################################################
(0, fixtures_1.Given)('I/user go(es) to URL {string}', async ({ page, }, url) => {
    await page.goto(url);
});
(0, fixtures_1.Given)('I/user go(es) to {string}.{string}', async ({ page, }, pageObject, element) => {
    await page.goto(get_page_objects_1.pageObjects[pageObject][element]);
});
(0, fixtures_1.Given)('I/user go(es) to {word} from {word}( page)', async ({ page, }, element, pageObject) => {
    await page.goto(get_page_objects_1.pageObjects[pageObject][element]);
});
(0, fixtures_1.Given)('I/user send(s) {string} request to {string} with body {string}', async ({ request, ctx, }, reqMethod, reqUrl, reqBody) => {
    await (0, verify_api_1.sendRequest)({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: reqUrl,
        requestBody: reqBody,
    });
});
(0, fixtures_1.Given)('I/user send(s) {string} request to {string} with body {string}.{string}', async ({ request, ctx, }, reqMethod, reqUrl, pageObject, element) => {
    await (0, verify_api_1.sendRequest)({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: reqUrl,
        requestBody: get_page_objects_1.pageObjects[pageObject][element],
    });
});
(0, fixtures_1.Given)('I/user send(s) {string} request to {string}.{string} with body {string}.{string}', async ({ request, ctx, }, reqMethod, pageObject1, element1, pageObject2, element2) => {
    await (0, verify_api_1.sendRequest)({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: get_page_objects_1.pageObjects[pageObject1][element1],
        requestBody: get_page_objects_1.pageObjects[pageObject2][element2],
    });
});
(0, fixtures_1.Given)('I/user send(s) {string} request to {word} from {word}( page) with body {word} from {word}( page)', async ({ request, ctx, }, reqMethod, element1, pageObject1, element2, pageObject2) => {
    await (0, verify_api_1.sendRequest)({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: get_page_objects_1.pageObjects[pageObject1][element1],
        requestBody: get_page_objects_1.pageObjects[pageObject2][element2],
    });
});
(0, fixtures_1.Given)('I/user send(s) {string} request to {string} with headers {string} and body {string}', async ({ request, ctx, }, reqMethod, reqUrl, reqHeaders, reqBody) => {
    await (0, verify_api_1.sendRequest)({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: reqUrl,
        requestHeaders: reqHeaders,
        requestBody: reqBody,
    });
});
(0, fixtures_1.Given)('I/user send(s) {string} request to {string} with headers {string}.{string} and body {string}.{string}', async ({ request, ctx, }, reqMethod, reqUrl, pageObject1, element1, pageObject2, element2) => {
    await (0, verify_api_1.sendRequest)({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: reqUrl,
        requestHeaders: get_page_objects_1.pageObjects[pageObject1][element1],
        requestBody: get_page_objects_1.pageObjects[pageObject2][element2],
    });
});
(0, fixtures_1.Given)('I/user send(s) {string} request to {string}.{string} with ' +
    'headers {string}.{string} and body {string}.{string}', async ({ request, ctx, }, reqMethod, pageObject1, element1, pageObject2, element2, pageObject3, element3) => {
    await (0, verify_api_1.sendRequest)({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: get_page_objects_1.pageObjects[pageObject1][element1],
        requestHeaders: get_page_objects_1.pageObjects[pageObject2][element2],
        requestBody: get_page_objects_1.pageObjects[pageObject3][element3],
    });
});
(0, fixtures_1.Given)('I/user send(s) {string} request to {word} from {word}( page) with ' +
    'headers {word} from {word}( page) and body {word} from {word}( page)', async ({ request, ctx, }, reqMethod, element1, pageObject1, element2, pageObject2, element3, pageObject3) => {
    await (0, verify_api_1.sendRequest)({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: get_page_objects_1.pageObjects[pageObject1][element1],
        requestHeaders: get_page_objects_1.pageObjects[pageObject2][element2],
        requestBody: get_page_objects_1.pageObjects[pageObject3][element3],
    });
});
(0, fixtures_1.Given)('I/user send(s) {string} request to {string} with body:', async ({ request, ctx, }, reqMethod, reqUrl, reqBody) => {
    await (0, verify_api_1.sendRequest)({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: reqUrl,
        requestBody: reqBody,
    });
});
(0, fixtures_1.Given)('I/user send(s) {string} request to {string}.{string} with body:', async ({ request, ctx, }, reqMethod, pageObject, element, reqBody) => {
    await (0, verify_api_1.sendRequest)({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: get_page_objects_1.pageObjects[pageObject][element],
        requestBody: reqBody,
    });
});
(0, fixtures_1.Given)('I/user send(s) {string} request to {word} from {word}( page) with body:', async ({ request, ctx, }, reqMethod, element, pageObject, reqBody) => {
    await (0, verify_api_1.sendRequest)({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: get_page_objects_1.pageObjects[pageObject][element],
        requestBody: reqBody,
    });
});
(0, fixtures_1.Given)('I/user send(s) {string} request to {string} with headers and body:', async ({ request, ctx, }, reqMethod, reqUrl, reqHeadersAndBody) => {
    const reqHeadersBody = JSON.parse(reqHeadersAndBody);
    await (0, verify_api_1.sendRequest)({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: reqUrl,
        requestHeaders: reqHeadersBody.headers,
        requestBody: reqHeadersBody.body,
    });
});
(0, fixtures_1.Given)('I/user send(s) {string} request to {string}.{string} with headers and body:', async ({ request, ctx, }, reqMethod, pageObject, element, reqHeadersAndBody) => {
    const reqHeadersBody = JSON.parse(reqHeadersAndBody);
    await (0, verify_api_1.sendRequest)({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: get_page_objects_1.pageObjects[pageObject][element],
        requestHeaders: reqHeadersBody.headers,
        requestBody: reqHeadersBody.body,
    });
});
(0, fixtures_1.Given)('I/user send(s) {string} request to {word} from {word}( page) with headers and body:', async ({ request, ctx, }, reqMethod, element, pageObject, reqHeadersAndBody) => {
    const reqHeadersBody = JSON.parse(reqHeadersAndBody);
    await (0, verify_api_1.sendRequest)({
        request: request,
        context: ctx,
        requestMethod: reqMethod,
        requestUrl: get_page_objects_1.pageObjects[pageObject][element],
        requestHeaders: reqHeadersBody.headers,
        requestBody: reqHeadersBody.body,
    });
});
// #### When steps #############################################################
(0, fixtures_1.When)('I/user click(s) {string}.{string}', async ({ page, }, pageObject, element) => {
    try {
        await page.locator(get_page_objects_1.pageObjects[pageObject][element]).click();
    }
    catch (error) {
        throw new Error(`${errors_1.default.NO_ELEMENT} "${pageObject}"."${element}"
                ${JSON.stringify(error, null, spacesToIndent)}`);
    }
});
(0, fixtures_1.When)('I/user click(s) {word} from {word}( page)', async ({ page, }, element, pageObject) => {
    try {
        await page.locator(get_page_objects_1.pageObjects[pageObject][element]).click();
    }
    catch (error) {
        throw new Error(`${errors_1.default.NO_ELEMENT} "${pageObject}"."${element}"
                ${JSON.stringify(error, null, spacesToIndent)}`);
    }
});
(0, fixtures_1.When)('I/user right click(s) {string}.{string}', async ({ page, }, pageObject, element) => {
    try {
        await page.locator(get_page_objects_1.pageObjects[pageObject][element]).click({
            button: 'right',
        });
    }
    catch (error) {
        throw new Error(`${errors_1.default.NO_ELEMENT} "${pageObject}"."${element}"
                ${JSON.stringify(error, null, spacesToIndent)}`);
    }
});
(0, fixtures_1.When)('I/user right click(s) {word} from {word}( page)', async ({ page, }, element, pageObject) => {
    try {
        await page.locator(get_page_objects_1.pageObjects[pageObject][element]).click({
            button: 'right',
        });
    }
    catch (error) {
        throw new Error(`${errors_1.default.NO_ELEMENT} "${pageObject}"."${element}"
                ${JSON.stringify(error, null, spacesToIndent)}`);
    }
});
(0, fixtures_1.When)('I/user double click(s) {string}.{string}', async ({ page, }, pageObject, element) => {
    try {
        await page.locator(get_page_objects_1.pageObjects[pageObject][element]).dblclick();
    }
    catch (error) {
        throw new Error(`${errors_1.default.NO_ELEMENT} "${pageObject}"."${element}"
                ${JSON.stringify(error, null, spacesToIndent)}`);
    }
});
(0, fixtures_1.When)('I/user double click(s) {word} from {word}( page)', async ({ page, }, element, pageObject) => {
    try {
        await page.locator(get_page_objects_1.pageObjects[pageObject][element]).dblclick();
    }
    catch (error) {
        throw new Error(`${errors_1.default.NO_ELEMENT} "${pageObject}"."${element}"
                ${JSON.stringify(error, null, spacesToIndent)}`);
    }
});
(0, fixtures_1.When)('I/user click(s) {string}.{string} if present', async ({ page, }, pageObject, element) => {
    const elementOnPage = page.locator(get_page_objects_1.pageObjects[pageObject][element]);
    if (await elementOnPage.isVisible()) {
        await elementOnPage.click();
    }
});
(0, fixtures_1.When)('I/user click(s) {word} from {word}( page) if present', async ({ page, }, element, pageObject) => {
    const elementOnPage = page.locator(get_page_objects_1.pageObjects[pageObject][element]);
    if (await elementOnPage.isVisible()) {
        await elementOnPage.click();
    }
});
(0, fixtures_1.When)('I/user enter(s) {string} into {string}.{string}', async ({ page, }, text, pageObject, element) => {
    await page.locator(get_page_objects_1.pageObjects[pageObject][element]).fill(text);
});
(0, fixtures_1.When)('I/user enter(s) {string} into {word} from {word}( page)', async ({ page, }, text, element, pageObject) => {
    await page.locator(get_page_objects_1.pageObjects[pageObject][element]).fill(text);
});
(0, fixtures_1.When)('I/user enter(s) {string}.{string} into {string}.{string}', async ({ page, }, pageObject1, element1, pageObject2, element2) => {
    await page.locator(get_page_objects_1.pageObjects[pageObject2][element2])
        .fill(get_page_objects_1.pageObjects[pageObject1][element1]);
});
(0, fixtures_1.When)('I/user enter(s) {word} from {word}( page) into {word} from {word}( page)', async ({ page, }, element1, pageObject1, element2, pageObject2) => {
    await page.locator(get_page_objects_1.pageObjects[pageObject2][element2])
        .fill(get_page_objects_1.pageObjects[pageObject1][element1]);
});
(0, fixtures_1.When)('I/user type(s) {string} into {string}.{string}', async ({ page, }, text, pageObject, element) => {
    const elementOnPage = await page.locator(get_page_objects_1.pageObjects[pageObject][element]);
    await elementOnPage.click();
    await elementOnPage.pressSequentially(text);
});
(0, fixtures_1.When)('I/user type(s) {string} into {word} from {word}( page)', async ({ page, }, text, element, pageObject) => {
    const elementOnPage = await page.locator(get_page_objects_1.pageObjects[pageObject][element]);
    await elementOnPage.click();
    await elementOnPage.pressSequentially(text);
});
(0, fixtures_1.When)('I/user type(s) {string}.{string} into {string}.{string}', async ({ page, }, pageObject1, element1, pageObject2, element2) => {
    const elementOnPage = await page.locator(get_page_objects_1.pageObjects[pageObject2][element2]);
    await elementOnPage.click();
    await elementOnPage.pressSequentially(get_page_objects_1.pageObjects[pageObject1][element1]);
});
(0, fixtures_1.When)('I/user type(s) {word} from {word}( page) into {word} from {word}( page)', async ({ page, }, element1, pageObject1, element2, pageObject2) => {
    const elementOnPage = await page.locator(get_page_objects_1.pageObjects[pageObject2][element2]);
    await elementOnPage.click();
    await elementOnPage.pressSequentially(get_page_objects_1.pageObjects[pageObject1][element1]);
});
(0, fixtures_1.When)('I/user clear(s) {string}.{string} and type(s) {string}', async ({ page, }, pageObject, element, text) => {
    const elementOnPage = await page.locator(get_page_objects_1.pageObjects[pageObject][element]);
    // Clear the input cleanly in a single action
    await elementOnPage.clear();
    await elementOnPage.click();
    await elementOnPage.pressSequentially(text);
});
(0, fixtures_1.When)('I/user clear(s) {word} from {word}( page) and type(s) {string}', async ({ page, }, element, pageObject, text) => {
    const elementOnPage = await page.locator(get_page_objects_1.pageObjects[pageObject][element]);
    // Clear the input cleanly in a single action
    await elementOnPage.clear();
    await elementOnPage.click();
    await elementOnPage.pressSequentially(text);
});
(0, fixtures_1.When)('I/user clear(s) {string}.{string} and type(s) {string}.{string}', async ({ page, }, pageObject1, element1, pageObject2, element2) => {
    const elementOnPage = await page.locator(get_page_objects_1.pageObjects[pageObject1][element1]);
    // Clear the input cleanly in a single action
    await elementOnPage.clear();
    await elementOnPage.click();
    await elementOnPage.pressSequentially(get_page_objects_1.pageObjects[pageObject2][element2]);
});
(0, fixtures_1.When)('I/user clear(s) {word} from {word}( page) and type(s) {word} from {word}( page)', async ({ page, }, element1, pageObject1, element2, pageObject2) => {
    const elementOnPage = await page.locator(get_page_objects_1.pageObjects[pageObject1][element1]);
    // Clear the input cleanly in a single action
    await elementOnPage.clear();
    await elementOnPage.click();
    await elementOnPage.pressSequentially(get_page_objects_1.pageObjects[pageObject2][element2]);
});
(0, fixtures_1.When)('I/user select(s) {string} in {string}.{string}', async ({ page, }, text, pageObject, element) => {
    await page.locator(get_page_objects_1.pageObjects[pageObject][element])
        .selectOption({ label: text, });
});
(0, fixtures_1.When)('I/user select(s) {string} in {word} from {word}( page)', async ({ page, }, text, element, pageObject) => {
    await page.locator(get_page_objects_1.pageObjects[pageObject][element])
        .selectOption({ label: text, });
});
(0, fixtures_1.When)('I/user select(s) {string}.{string} in {string}.{string}', async ({ page, }, pageObject1, element1, pageObject2, element2) => {
    await page.locator(get_page_objects_1.pageObjects[pageObject2][element2])
        .selectOption({ label: get_page_objects_1.pageObjects[pageObject1][element1], });
});
(0, fixtures_1.When)('I/user select(s) {word} from {word}( page) in {word} from {word}( page)', async ({ page, }, element1, pageObject1, element2, pageObject2) => {
    await page.locator(get_page_objects_1.pageObjects[pageObject2][element2])
        .selectOption({ label: get_page_objects_1.pageObjects[pageObject1][element1], });
});
(0, fixtures_1.When)('I/user move(s) to {string}.{string}', async ({ page, }, pageObject, element) => {
    await page.locator(get_page_objects_1.pageObjects[pageObject][element]).hover();
});
(0, fixtures_1.When)('I/user move(s) to {word} from {word}( page)', async ({ page, }, element, pageObject) => {
    await page.locator(get_page_objects_1.pageObjects[pageObject][element]).hover();
});
(0, fixtures_1.When)('I/user reload(s) the page', async ({ page, }) => {
    await page.reload();
});
(0, fixtures_1.When)('I/user wait(s) for {int} ms', async ({ page, }, timeToWait) => {
    // Timeout to wait for in milliseconds
    await page.waitForTimeout(timeToWait);
});
// #### Then steps #############################################################
(0, fixtures_1.Then)('page title should be {string}', async ({ page, }, text) => {
    await (0, test_1.expect)(page).toHaveTitle(text);
});
(0, fixtures_1.Then)('page title should be {string}.{string}', async ({ page, }, pageObject, element) => {
    await (0, test_1.expect)(page).toHaveTitle(get_page_objects_1.pageObjects[pageObject][element]);
});
(0, fixtures_1.Then)('page title should be {word} from {word}( page)', async ({ page, }, element, pageObject) => {
    await (0, test_1.expect)(page).toHaveTitle(get_page_objects_1.pageObjects[pageObject][element]);
});
(0, fixtures_1.Then)('page title should contain {string}', async ({ page, }, text) => {
    const regularExpression = new RegExp(`^.*${text}.*$`, 'g');
    await (0, test_1.expect)(page).toHaveTitle(regularExpression);
});
(0, fixtures_1.Then)('page title should contain {string}.{string}', async ({ page, }, pageObject, element) => {
    const regularExpression = new RegExp(`^.*${get_page_objects_1.pageObjects[pageObject][element]}.*$`, 'g');
    await (0, test_1.expect)(page).toHaveTitle(regularExpression);
});
(0, fixtures_1.Then)('page title should contain {word} from {word}( page)', async ({ page, }, element, pageObject) => {
    const regularExpression = new RegExp(`^.*${get_page_objects_1.pageObjects[pageObject][element]}.*$`, 'g');
    await (0, test_1.expect)(page).toHaveTitle(regularExpression);
});
(0, fixtures_1.Then)('{string}.{string} should be present', async ({ page, }, pageObject, element) => {
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element])).toBeVisible();
});
(0, fixtures_1.Then)('{word} from {word}( page) should be present', async ({ page, }, element, pageObject) => {
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element])).toBeVisible();
});
(0, fixtures_1.Then)('{int} {string}.{string} should be present', async ({ page, }, number, pageObject, element) => {
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element]))
        .toHaveCount(number);
});
(0, fixtures_1.Then)('{int} {word} from {word}( page) should be present', async ({ page, }, number, element, pageObject) => {
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element]))
        .toHaveCount(number);
});
(0, fixtures_1.Then)('{string}.{string} should not be present', async ({ page, }, pageObject, element) => {
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element]))
        .not.toBeVisible();
});
(0, fixtures_1.Then)('{word} from {word}( page) should not be present', async ({ page, }, element, pageObject) => {
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element]))
        .not.toBeVisible();
});
(0, fixtures_1.Then)('{string}.{string} text should be {string}', async ({ page, }, pageObject, element, text) => {
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element]))
        .toHaveText(text);
});
(0, fixtures_1.Then)('{word} from {word}( page) text should be {string}', async ({ page, }, element, pageObject, text) => {
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element]))
        .toHaveText(text);
});
(0, fixtures_1.Then)('{string}.{string} text should be {string}.{string}', async ({ page, }, pageObject1, element1, pageObject2, element2) => {
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject1][element1]))
        .toHaveText(get_page_objects_1.pageObjects[pageObject2][element2]);
});
(0, fixtures_1.Then)('{word} from {word}( page) text should be {word} from {word}( page)', async ({ page, }, element1, pageObject1, element2, pageObject2) => {
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject1][element1]))
        .toHaveText(get_page_objects_1.pageObjects[pageObject2][element2]);
});
(0, fixtures_1.Then)('{string}.{string} text should contain {string}', async ({ page, }, pageObject, element, text) => {
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element]))
        .toContainText(text);
});
(0, fixtures_1.Then)('{word} from {word}( page) text should contain {string}', async ({ page, }, element, pageObject, text) => {
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element]))
        .toContainText(text);
});
(0, fixtures_1.Then)('{string}.{string} text should contain {string}.{string}', async ({ page, }, pageObject1, element1, pageObject2, element2) => {
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject1][element1]))
        .toContainText(get_page_objects_1.pageObjects[pageObject2][element2]);
});
(0, fixtures_1.Then)('{word} from {word}( page) text should contain {word} from {word}( page)', async ({ page, }, element1, pageObject1, element2, pageObject2) => {
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject1][element1]))
        .toContainText(get_page_objects_1.pageObjects[pageObject2][element2]);
});
(0, fixtures_1.Then)('{string}.{string} input should be {string}', async ({ page, }, pageObject, element, text) => {
    const textareaElement = page.locator(get_page_objects_1.pageObjects[pageObject][element]);
    await (0, test_1.expect)(textareaElement).toHaveValue(text);
});
(0, fixtures_1.Then)('{word} from {word}( page) input should be {string}', async ({ page, }, element, pageObject, text) => {
    const textareaElement = page.locator(get_page_objects_1.pageObjects[pageObject][element]);
    await (0, test_1.expect)(textareaElement).toHaveValue(text);
});
(0, fixtures_1.Then)('{string}.{string} input should be {string}.{string}', async ({ page, }, pageObject1, element1, pageObject2, element2) => {
    const textareaElement = page.locator(get_page_objects_1.pageObjects[pageObject1][element1]);
    await (0, test_1.expect)(textareaElement).toHaveValue(get_page_objects_1.pageObjects[pageObject2][element2]);
});
(0, fixtures_1.Then)('{word} from {word}( page) input should be {word} from {word}( page)', async ({ page, }, element1, pageObject1, element2, pageObject2) => {
    const textareaElement = page.locator(get_page_objects_1.pageObjects[pageObject1][element1]);
    await (0, test_1.expect)(textareaElement).toHaveValue(get_page_objects_1.pageObjects[pageObject2][element2]);
});
(0, fixtures_1.Then)('{string}.{string} input should contain {string}', async ({ page, }, pageObject, element, text) => {
    const textareaElement = page.locator(get_page_objects_1.pageObjects[pageObject][element]);
    const textContent = await textareaElement.inputValue();
    (0, test_1.expect)(textContent).toContain(text);
});
(0, fixtures_1.Then)('{word} from {word}( page) input should contain {string}', async ({ page, }, element, pageObject, text) => {
    const textareaElement = page.locator(get_page_objects_1.pageObjects[pageObject][element]);
    const textContent = await textareaElement.inputValue();
    (0, test_1.expect)(textContent).toContain(text);
});
(0, fixtures_1.Then)('{string}.{string} input should contain {string}.{string}', async ({ page, }, pageObject1, element1, pageObject2, element2) => {
    const textareaElement = page.locator(get_page_objects_1.pageObjects[pageObject1][element1]);
    const textContent = await textareaElement.inputValue();
    (0, test_1.expect)(textContent).toContain(get_page_objects_1.pageObjects[pageObject2][element2]);
});
(0, fixtures_1.Then)('{word} from {word}( page) input should contain {word} from {word}( page)', async ({ page, }, element1, pageObject1, element2, pageObject2) => {
    const textareaElement = page.locator(get_page_objects_1.pageObjects[pageObject1][element1]);
    const textContent = await textareaElement.inputValue();
    (0, test_1.expect)(textContent).toContain(get_page_objects_1.pageObjects[pageObject2][element2]);
});
(0, fixtures_1.Then)('{string}.{string} input length should be {int}', async ({ page, }, pageObject, element, number) => {
    const textareaElement = page.locator(get_page_objects_1.pageObjects[pageObject][element]);
    const textContent = await textareaElement.inputValue();
    (0, test_1.expect)(textContent.length).toBe(number);
});
(0, fixtures_1.Then)('{word} from {word}( page) input length should be {int}', async ({ page, }, element, pageObject, number) => {
    const textareaElement = page.locator(get_page_objects_1.pageObjects[pageObject][element]);
    const textContent = await textareaElement.inputValue();
    (0, test_1.expect)(textContent.length).toBe(number);
});
(0, fixtures_1.Then)('page URL should be {string}', async ({ page, }, text) => {
    await (0, test_1.expect)(page).toHaveURL(text);
});
(0, fixtures_1.Then)('page URL should be {string}.{string}', async ({ page, }, pageObject, element) => {
    await (0, test_1.expect)(page).toHaveURL(get_page_objects_1.pageObjects[pageObject][element]);
});
(0, fixtures_1.Then)('page URL should be {word} from {word}( page)', async ({ page, }, element, pageObject) => {
    await (0, test_1.expect)(page).toHaveURL(get_page_objects_1.pageObjects[pageObject][element]);
});
(0, fixtures_1.Then)('page URL should contain {string}', async ({ page, }, text) => {
    const currentUrl = page.url();
    (0, test_1.expect)(currentUrl).toContain(text);
});
(0, fixtures_1.Then)('page URL should contain {string}.{string}', async ({ page, }, pageObject, element) => {
    const currentUrl = page.url();
    (0, test_1.expect)(currentUrl).toContain(get_page_objects_1.pageObjects[pageObject][element]);
});
(0, fixtures_1.Then)('page URL should contain {word} from {word}( page)', async ({ page, }, element, pageObject) => {
    const currentUrl = page.url();
    (0, test_1.expect)(currentUrl).toContain(get_page_objects_1.pageObjects[pageObject][element]);
});
(0, fixtures_1.Then)('{string}.{string} attribute {string} should be {string}', async ({ page, }, pageObject, element, attribute, text) => {
    const regularExpression = new RegExp(`^${text}$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element]))
        .toHaveAttribute(attribute, regularExpression);
});
(0, fixtures_1.Then)('{word} from {word}( page) attribute {string} should be {string}', async ({ page, }, element, pageObject, attribute, text) => {
    const regularExpression = new RegExp(`^${text}$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element]))
        .toHaveAttribute(attribute, regularExpression);
});
(0, fixtures_1.Then)('{string}.{string} attribute {string} should be {string}.{string}', async ({ page, }, pageObject1, element1, attribute, pageObject2, element2) => {
    const regularExpression = new RegExp(`^${get_page_objects_1.pageObjects[pageObject2][element2]}$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject1][element1]))
        .toHaveAttribute(attribute, regularExpression);
});
(0, fixtures_1.Then)('{word} from {word}( page) attribute {string} should be {word} from {word}( page)', async ({ page, }, element1, pageObject1, attribute, element2, pageObject2) => {
    const regularExpression = new RegExp(`^${get_page_objects_1.pageObjects[pageObject2][element2]}$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject1][element1]))
        .toHaveAttribute(attribute, regularExpression);
});
(0, fixtures_1.Then)('{string}.{string} attribute {string} should contain {string}', async ({ page, }, pageObject, element, attribute, text) => {
    const regularExpression = new RegExp(`^.*${text}.*$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element]))
        .toHaveAttribute(attribute, regularExpression);
});
(0, fixtures_1.Then)('{word} from {word}( page) attribute {string} should contain {string}', async ({ page, }, element, pageObject, attribute, text) => {
    const regularExpression = new RegExp(`^.*${text}.*$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element]))
        .toHaveAttribute(attribute, regularExpression);
});
(0, fixtures_1.Then)('{string}.{string} attribute {string} should contain {string}.{string}', async ({ page, }, pageObject1, element1, attribute, pageObject2, element2) => {
    const regularExpression = new RegExp(`^.*${get_page_objects_1.pageObjects[pageObject2][element2]}.*$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject1][element1]))
        .toHaveAttribute(attribute, regularExpression);
});
(0, fixtures_1.Then)('{word} from {word}( page) attribute {string} should contain {word} from {word}( page)', async ({ page, }, element1, pageObject1, attribute, element2, pageObject2) => {
    const regularExpression = new RegExp(`^.*${get_page_objects_1.pageObjects[pageObject2][element2]}.*$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject1][element1]))
        .toHaveAttribute(attribute, regularExpression);
});
(0, fixtures_1.Then)('{string}.{string} attribute {string} should not contain {string}', async ({ page, }, pageObject, element, attribute, text) => {
    const regularExpression = new RegExp(`^.*${text}.*$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element]))
        .not.toHaveAttribute(attribute, regularExpression);
});
(0, fixtures_1.Then)('{word} from {word}( page) attribute {string} should not contain {string}', async ({ page, }, element, pageObject, attribute, text) => {
    const regularExpression = new RegExp(`^.*${text}.*$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element]))
        .not.toHaveAttribute(attribute, regularExpression);
});
(0, fixtures_1.Then)('{string}.{string} attribute {string} should not contain {string}.{string}', async ({ page, }, pageObject1, element1, attribute, pageObject2, element2) => {
    const regularExpression = new RegExp(`^.*${get_page_objects_1.pageObjects[pageObject2][element2]}.*$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject1][element1]))
        .not.toHaveAttribute(attribute, regularExpression);
});
(0, fixtures_1.Then)('{word} from {word}( page) attribute {string} should not contain {word} from {word}( page)', async ({ page, }, element1, pageObject1, attribute, element2, pageObject2) => {
    const regularExpression = new RegExp(`^.*${get_page_objects_1.pageObjects[pageObject2][element2]}.*$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject1][element1]))
        .not.toHaveAttribute(attribute, regularExpression);
});
(0, fixtures_1.Then)('{string}.{string} CSS property {string} should contain {string}', async ({ page, }, pageObject, element, cssProperty, value) => {
    const regularExpression = new RegExp(`^.*${value}.*$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element])).toHaveCSS(cssProperty, regularExpression);
});
(0, fixtures_1.Then)('{word} from {word}( page) CSS property {string} should contain {string}', async ({ page, }, element, pageObject, cssProperty, value) => {
    const regularExpression = new RegExp(`^.*${value}.*$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element])).toHaveCSS(cssProperty, regularExpression);
});
(0, fixtures_1.Then)('{string}.{string} CSS property {string} should contain {string}.{string}', async ({ page, }, pageObject1, element1, cssProperty, pageObject2, element2) => {
    const regularExpression = new RegExp(`^.*${get_page_objects_1.pageObjects[pageObject2][element2]}.*$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject1][element1])).toHaveCSS(cssProperty, regularExpression);
});
(0, fixtures_1.Then)('{word} from {word}( page) CSS property {string} should contain {word} from {word}( page)', async ({ page, }, element1, pageObject1, cssProperty, element2, pageObject2) => {
    const regularExpression = new RegExp(`^.*${get_page_objects_1.pageObjects[pageObject2][element2]}.*$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject1][element1])).toHaveCSS(cssProperty, regularExpression);
});
(0, fixtures_1.Then)('{string}.{string} CSS property {string} should not contain {string}', async ({ page, }, pageObject, element, cssProperty, value) => {
    const regularExpression = new RegExp(`^.*${value}.*$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element])).not.toHaveCSS(cssProperty, regularExpression);
});
(0, fixtures_1.Then)('{word} from {word}( page) CSS property {string} should not contain {string}', async ({ page, }, element, pageObject, cssProperty, value) => {
    const regularExpression = new RegExp(`^.*${value}.*$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject][element])).not.toHaveCSS(cssProperty, regularExpression);
});
(0, fixtures_1.Then)('{string}.{string} CSS property {string} should not contain {string}.{string}', async ({ page, }, pageObject1, element1, cssProperty, pageObject2, element2) => {
    const regularExpression = new RegExp(`^.*${get_page_objects_1.pageObjects[pageObject2][element2]}.*$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject1][element1])).not.toHaveCSS(cssProperty, regularExpression);
});
(0, fixtures_1.Then)('{word} from {word}( page) CSS property {string} should not contain {word} from {word}( page)', async ({ page, }, element1, pageObject1, cssProperty, element2, pageObject2) => {
    const regularExpression = new RegExp(`^.*${get_page_objects_1.pageObjects[pageObject2][element2]}.*$`, 'g');
    await (0, test_1.expect)(page.locator(get_page_objects_1.pageObjects[pageObject1][element1])).not.toHaveCSS(cssProperty, regularExpression);
});
(0, fixtures_1.Then)('response status code should be {int}', async ({ ctx, }, resStatusCode) => {
    await (0, verify_api_1.verifyResponseStatus)(ctx, resStatusCode);
});
(0, fixtures_1.Then)('response body should contain {string}', async ({ ctx, }, resProperty) => {
    await (0, verify_api_1.verifyResponseBody)(ctx, resProperty);
});
(0, fixtures_1.Then)('response body should contain {string}.{string}', async ({ ctx, }, pageObject, element) => {
    await (0, verify_api_1.verifyResponseBody)(ctx, get_page_objects_1.pageObjects[pageObject][element]);
});
(0, fixtures_1.Then)('response body should contain {word} from {word}( page)', async ({ ctx, }, element, pageObject) => {
    await (0, verify_api_1.verifyResponseBody)(ctx, get_page_objects_1.pageObjects[pageObject][element]);
});
(0, fixtures_1.Then)('response headers should contain {string}', async ({ ctx, }, resProperty) => {
    await (0, verify_api_1.verifyResponseHeaders)(ctx, resProperty);
});
(0, fixtures_1.Then)('response headers should contain {string}.{string}', async ({ ctx, }, pageObject, element) => {
    await (0, verify_api_1.verifyResponseHeaders)(ctx, get_page_objects_1.pageObjects[pageObject][element]);
});
(0, fixtures_1.Then)('response headers should contain {word} from {word}( page)', async ({ ctx, }, element, pageObject) => {
    await (0, verify_api_1.verifyResponseHeaders)(ctx, get_page_objects_1.pageObjects[pageObject][element]);
});
//# sourceMappingURL=index.js.map