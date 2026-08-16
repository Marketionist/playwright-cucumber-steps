import type { Page } from '@playwright/test';
export declare const capturedEventsKey = "_browserCapturedEvents";
export declare function captureEvents(page: Page, eventName: string): Promise<unknown[]>;
export declare function getLatestEvent(page: Page, eventName: string): Promise<Record<string, unknown> | undefined>;
//# sourceMappingURL=events.d.ts.map