// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as TranscribeAPI from './transcribe';
import {
  FrenchTranscriptionResponse,
  Transcribe,
  TranscribeCreateTranscriptionParams,
  TranscribeCreateTranscriptionResponse,
  TranscribeStreamTranscriptionParams,
  TranscribeStreamTranscriptionResponse,
  TranscriptionSegment,
} from './transcribe';
import * as TranslateAPI from './translate';
import {
  Translate,
  TranslateCreateTranslationParams,
  TranslateCreateTranslationResponse,
  TranslateListSupportedLanguagesResponse,
  TranslationLanguage,
} from './translate';

export class Models extends APIResource {
  translate: TranslateAPI.Translate = new TranslateAPI.Translate(this._client);
  transcribe: TranscribeAPI.Transcribe = new TranscribeAPI.Transcribe(this._client);

  /**
   * Generate speech audio from Bambara text.
   *
   * **What does this endpoint do?**
   *
   * - Converts text into speech audio using Bambara models.
   * - Allows selecting different speaker profiles for synthesized speech.
   *
   * **Headers:**
   *
   * - `x-api-key`: Your API key for authentication.
   * - `Content-Type`: Must be set to `application/json`.
   *
   * **Parameters:**
   *
   * - `text` (str): The input text to be synthesized into speech.
   * - `speaker` (int): The ID of the speaker profile to use for speech synthesis.
   *
   * **Example Request Body:**
   *
   * ```json
   * {
   *   "text": "Aw ni ce",
   *   "speaker": 1
   * }
   * ```
   *
   * **Response:**
   *
   * - Returns the synthesized audio in WAV format.
   *
   * **Example Response Usage:**
   *
   * - Save the response content as a `.wav` file to listen to the generated audio.
   *
   * **How to use this endpoint?**
   *
   * - Provide the text and speaker parameters in the request body.
   * - Use the returned WAV file in your applications, or save it for playback.
   *
   * **Caution:**
   *
   * - The response is a binary stream (audio), so ensure your application can handle
   *   binary responses.
   *
   * Returns: Response: The synthesized audio in WAV format.
   */
  createSpeech(body: ModelCreateSpeechParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/api/v1/models/tts', { body, ...options });
  }
}

export type ModelCreateSpeechResponse = unknown;

export interface ModelCreateSpeechParams {
  /**
   * The bambara text to synthesize
   */
  text: string;

  /**
   * The speaker ID to use
   */
  speaker?: 0 | 1 | 2 | 3 | 4 | null;
}

Models.Translate = Translate;
Models.Transcribe = Transcribe;

export declare namespace Models {
  export {
    type ModelCreateSpeechResponse as ModelCreateSpeechResponse,
    type ModelCreateSpeechParams as ModelCreateSpeechParams,
  };

  export {
    Translate as Translate,
    type TranslationLanguage as TranslationLanguage,
    type TranslateCreateTranslationResponse as TranslateCreateTranslationResponse,
    type TranslateListSupportedLanguagesResponse as TranslateListSupportedLanguagesResponse,
    type TranslateCreateTranslationParams as TranslateCreateTranslationParams,
  };

  export {
    Transcribe as Transcribe,
    type FrenchTranscriptionResponse as FrenchTranscriptionResponse,
    type TranscriptionSegment as TranscriptionSegment,
    type TranscribeCreateTranscriptionResponse as TranscribeCreateTranscriptionResponse,
    type TranscribeStreamTranscriptionResponse as TranscribeStreamTranscriptionResponse,
    type TranscribeCreateTranscriptionParams as TranscribeCreateTranscriptionParams,
    type TranscribeStreamTranscriptionParams as TranscribeStreamTranscriptionParams,
  };
}
