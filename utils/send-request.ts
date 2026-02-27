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
    let reqHeaders;
    let reqBody;

    if (typeof requestHeaders === 'string') {
        reqHeaders = JSON.parse(requestHeaders);
    } else if (typeof requestHeaders === 'object') {
        reqHeaders = requestHeaders;
    } else {
        reqHeaders = {};
    }

    if (typeof requestBody === 'string') {
        reqBody = JSON.parse(requestBody);
    } else if (typeof requestBody === 'object') {
        reqBody = requestBody;
    } else {
        reqBody = {};
    }

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
