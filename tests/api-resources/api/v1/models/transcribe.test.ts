// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DjeliaSDK, { toFile } from 'djelia';
import { Response } from 'node-fetch';

const client = new DjeliaSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transcribe', () => {
  // skipped: tests are disabled for the time being
  test.skip('createTranscription: only required params', async () => {
    const responsePromise = client.api.v1.models.transcribe.createTranscription({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('createTranscription: required and optional params', async () => {
    const response = await client.api.v1.models.transcribe.createTranscription({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      translate_to_french: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('streamTranscription: only required params', async () => {
    const responsePromise = client.api.v1.models.transcribe.streamTranscription({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('streamTranscription: required and optional params', async () => {
    const response = await client.api.v1.models.transcribe.streamTranscription({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      translate_to_french: true,
    });
  });
});
