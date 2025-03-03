// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DjeliaSDK from 'djelia-sdk';
import { Response } from 'node-fetch';

const client = new DjeliaSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource translate', () => {
  // skipped: tests are disabled for the time being
  test.skip('createTranslation: only required params', async () => {
    const responsePromise = client.api.v1.models.translate.createTranslation({
      source: 'fra_Latn',
      target: 'fra_Latn',
      text: 'text',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createTranslation: required and optional params', async () => {
    const response = await client.api.v1.models.translate.createTranslation({
      source: 'fra_Latn',
      target: 'fra_Latn',
      text: 'text',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listSupportedLanguages', async () => {
    const responsePromise = client.api.v1.models.translate.listSupportedLanguages();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listSupportedLanguages: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v1.models.translate.listSupportedLanguages({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(DjeliaSDK.NotFoundError);
  });
});
