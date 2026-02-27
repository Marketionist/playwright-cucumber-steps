'use strict';
/* eslint max-params: off */

// #############################################################################

export default async function sendRequest (
    request,
    contxt,
    requestMethod,
    requestUrl,
    requestHeaders,
    requestBody
) {
    const reqHeaders = requestHeaders.length > 0 ? JSON.parse(requestHeaders) : {};
    const reqBody = requestBody.length > 0 ? JSON.parse(requestBody) : {};

    if (requestMethod === 'POST') {
        contxt.response = await request.post(requestUrl, {
            headers: reqHeaders,
            data: reqBody,
        });
    } else if (requestMethod === 'PUT') {
        contxt.response = await request.put(requestUrl, {
            headers: reqHeaders,
            data: reqBody,
        });
    } else if (requestMethod === 'PATCH') {
        contxt.response = await request.patch(requestUrl, {
            headers: reqHeaders,
            data: reqBody,
        });
    } else if (requestMethod === 'DELETE') {
        contxt.response = await request.delete(requestUrl, {
            headers: reqHeaders,
            data: reqBody,
        });
    } else {
        contxt.response = await request.get(requestUrl, {
            headers: reqHeaders,
            data: reqBody,
        });
    }

    return contxt.response;
}
