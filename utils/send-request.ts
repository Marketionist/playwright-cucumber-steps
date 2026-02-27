/* eslint max-params: off */

// #############################################################################

import { APIRequestContext } from '@playwright/test';

interface RequestConfig {
    request: APIRequestContext,
    context: Record<string, any>,
    requestMethod: string,
    requestUrl: string,
    requestHeaders?: string,
    requestBody?: string
}

export default async function sendRequest ({
    request,
    context,
    requestMethod,
    requestUrl,
    requestHeaders,
    requestBody,
}: RequestConfig): Promise<Record<any, any>> {
    const reqHeaders = requestHeaders !== undefined && requestHeaders.length > 0 ? JSON.parse(requestHeaders) : {};
    const reqBody = requestBody !== undefined && requestBody.length > 0 ? JSON.parse(requestBody) : {};

    if (requestMethod === 'POST') {
        context.response = await request.post(requestUrl, {
            headers: reqHeaders,
            data: reqBody,
        });
    } else if (requestMethod === 'PUT') {
        context.response = await request.put(requestUrl, {
            headers: reqHeaders,
            data: reqBody,
        });
    } else if (requestMethod === 'PATCH') {
        context.response = await request.patch(requestUrl, {
            headers: reqHeaders,
            data: reqBody,
        });
    } else if (requestMethod === 'DELETE') {
        context.response = await request.delete(requestUrl, {
            headers: reqHeaders,
            data: reqBody,
        });
    } else {
        context.response = await request.get(requestUrl, {
            headers: reqHeaders,
            data: reqBody,
        });
    }

    return context.response;
}
