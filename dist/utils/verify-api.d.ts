import { APIRequestContext } from '@playwright/test';
interface RequestConfig {
    request: APIRequestContext;
    context: Record<string, any>;
    requestMethod: string;
    requestUrl: string;
    requestHeaders?: string;
    requestBody?: string;
}
export declare function sendRequest({ request, context, requestMethod, requestUrl, requestHeaders, requestBody, }: RequestConfig): Promise<Record<any, any>>;
export declare function verifyResponseStatus(context: Record<string, any>, responseStatusCode: number): Promise<void>;
export declare function verifyResponseBody(context: Record<string, any>, responseProperty: string): Promise<void>;
export declare function verifyResponseHeaders(context: Record<string, any>, responseProperty: string): Promise<void>;
export {};
//# sourceMappingURL=verify-api.d.ts.map