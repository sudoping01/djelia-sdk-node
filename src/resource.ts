// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { DjeliaSDK } from './index';

export abstract class APIResource {
  protected _client: DjeliaSDK;

  constructor(client: DjeliaSDK) {
    this._client = client;
  }
}
