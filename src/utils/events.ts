// #############################################################################

import type { Page } from '@playwright/test';

export const capturedEventsKey = '_browserCapturedEvents';

export async function captureEvents (
    page: Page, eventName: string
): Promise<unknown[]> {
    return page.evaluate(([name, key,]) => {
        return (window as any)[key]?.[name] ?? [];
    }, [eventName, capturedEventsKey,]);
}

export async function getLatestEvent (
    page: Page, eventName: string
): Promise<Record<string, unknown> | undefined> {
    const events = await captureEvents(page, eventName);

    return events[events.length - 1] as Record<string, unknown> | undefined;
}
