// #############################################################################

import { APIRequestContext, expect } from '@playwright/test';

interface RequestConfig {
    request: APIRequestContext,
    context: Record<string, any>,
    requestMethod: string,
    requestUrl: string,
    requestHeaders?: string,
    requestBody?: string
}

export async function sendRequest ({
    request,
    context,
    requestMethod,
    requestUrl,
    requestHeaders,
    requestBody,
}: RequestConfig): Promise<Record<any, any>> {
    let reqHeaders;
    let reqBody;
    let response;

    if (typeof requestHeaders === 'string' && requestHeaders.length > 0) {
        reqHeaders = JSON.parse(requestHeaders);
    } else if (typeof requestHeaders === 'object') {
        reqHeaders = requestHeaders;
    } else {
        reqHeaders = {};
    }

    if (typeof requestBody === 'string' && requestBody.length > 0) {
        reqBody = JSON.parse(requestBody);
    } else if (typeof requestBody === 'object') {
        reqBody = requestBody;
    } else {
        reqBody = {};
    }

    if (requestMethod === 'POST') {
        response = await request.post(requestUrl, {
            headers: reqHeaders,
            data: reqBody,
        });
    } else if (requestMethod === 'PUT') {
        response = await request.put(requestUrl, {
            headers: reqHeaders,
            data: reqBody,
        });
    } else if (requestMethod === 'PATCH') {
        response = await request.patch(requestUrl, {
            headers: reqHeaders,
            data: reqBody,
        });
    } else if (requestMethod === 'DELETE') {
        response = await request.delete(requestUrl, {
            headers: reqHeaders,
            data: reqBody,
        });
    } else {
        response = await request.get(requestUrl, {
            headers: reqHeaders,
            data: reqBody,
        });
    }

    const responseStatus = response.status();
    const responseHeaders = response.headers();
    let responseBody;

    try {
        responseBody = await response.json();
        // If parsing succeeds, treat body as a JSON object
    } catch {
        // If parsing fails, treat body as a string
        responseBody = await response.text();
    }

    context.response = {
        status: responseStatus,
        headers: responseHeaders,
        body: responseBody,
    };

    return context.response;
}

export async function verifyResponseBody (
    context: Record<string, any>,
    responseProperty: string
) {
    try {
        const resProperty = JSON.parse(responseProperty);

        // If parsing succeeds, treat responseProperty as a JSON object
        await expect(context.response.body).toEqual(expect.objectContaining(resProperty));
    } catch {
        // If parsing fails, treat responseProperty as a string
        expect(context.response.body).toContain(responseProperty);
    }
}

export async function verifyResponseHeaders (
    context: Record<string, any>,
    responseProperty: string
) {
    try {
        const resProperty = JSON.parse(responseProperty);

        // If parsing succeeded, responseProperty was a string with a JSON object inside
        await expect(context.response.headers).toEqual(
            expect.objectContaining(resProperty)
        );
    } catch {
        // If parsing failed, responseProperty was a JSON object
        await expect(context.response.headers).toEqual(
            expect.objectContaining(responseProperty as any as Record<string, any>)
        );
    }
}
