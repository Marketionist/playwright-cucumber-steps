'use strict';
/* eslint no-empty-pattern: off */

// #############################################################################

import { test as base, createBdd } from 'playwright-bdd';

export const test = base.extend({
    ctx: async ({}, use) => {
        const ctx = {};

        await use(ctx);
    },
});

export const { Given, When, Then, } = createBdd(test);
