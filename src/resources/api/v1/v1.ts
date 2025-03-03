// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ModelsAPI from './models/models';
import { ModelCreateSpeechParams, ModelCreateSpeechResponse, Models } from './models/models';

export class V1 extends APIResource {
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);
}

V1.Models = Models;

export declare namespace V1 {
  export {
    Models as Models,
    type ModelCreateSpeechResponse as ModelCreateSpeechResponse,
    type ModelCreateSpeechParams as ModelCreateSpeechParams,
  };
}
