"use strict";
/* eslint @typescript-eslint/no-explicit-any: off */
/* eslint no-empty-pattern: off */
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Then = exports.When = exports.Given = exports.test = void 0;
// #############################################################################
const playwright_bdd_1 = require("playwright-bdd");
const get_page_objects_1 = require("./utils/get-page-objects");
exports.test = playwright_bdd_1.test.extend({
    ctx: async ({}, use) => {
        await get_page_objects_1.pageObjectsPromise;
        const ctx = {};
        await use(ctx);
    },
});
_a = (0, playwright_bdd_1.createBdd)(exports.test), exports.Given = _a.Given, exports.When = _a.When, exports.Then = _a.Then;
//# sourceMappingURL=fixtures.js.map