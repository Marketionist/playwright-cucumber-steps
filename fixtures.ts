/* eslint @typescript-eslint/no-explicit-any: off */
/* eslint no-empty-pattern: off */

import { test as base, createBdd } from 'playwright-bdd';

interface Fixtures {
    ctx: Record<string, any>
}

export const test = base.extend<Fixtures>({
    ctx: async ({}, use) => {
        const ctx = {};

        await use(ctx);
    },
});

export const { Given, When, Then, } = createBdd(test);
