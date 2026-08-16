"use strict";
// #############################################################################
Object.defineProperty(exports, "__esModule", { value: true });
exports.capturedEventsKey = void 0;
exports.captureEvents = captureEvents;
exports.getLatestEvent = getLatestEvent;
exports.capturedEventsKey = '_browserCapturedEvents';
async function captureEvents(page, eventName) {
    return page.evaluate(([name, key,]) => {
        return window[key]?.[name] ?? [];
    }, [eventName, exports.capturedEventsKey,]);
}
async function getLatestEvent(page, eventName) {
    const events = await captureEvents(page, eventName);
    return events[events.length - 1];
}
//# sourceMappingURL=events.js.map