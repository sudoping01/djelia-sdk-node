// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class Transcribe extends APIResource {
  /**
   * Perform audio transcription in a synchronous manner, with optional French
   * translation.
   *
   * **What does this endpoint do?**
   *
   * - Transcribes the audio file content into text using Bambara models.
   * - Optionally translates the transcribed text into French if
   *   `translate_to_french` is set to `True`.
   *
   * **Behavior Notes:**
   *
   * - If `translate_to_french=False` (default):
   *   - The response contains a list of transcribed segment in Bambara.
   * - If `translate_to_french=True`:
   *   - The response contains the full transcription translated into French.
   *
   * **Headers:**
   *
   * - `x-api-key`: Your API key for authentication.
   * - `Content-Type`: Must be set to `multipart/form-data`.
   *
   * **Parameters:**
   *
   * - `file` (UploadFile): The audio file to transcribe.
   * - `translate_to_french` (bool): Whether to translate the transcription into
   *   French. Defaults to `False`.
   *
   * **Example Request Body:**
   *
   * ```text
   * file: <binary file>
   * translate_to_french: true
   * ```
   *
   * **Example Response (translate_to_french=False):**
   *
   * ```json
   * [
   *   {
   *     "text": "Aw ni ce i ka kene wa.",
   *     "start": 0.0,
   *     "end": 1.0
   *   }
   * ]
   * ```
   *
   * **Example Response (translate_to_french=True):**
   *
   * ```json
   * {
   *   "text": "Bonjour, comment ça va?"
   * }
   * ```
   *
   * **Caution:**
   *
   * - Translation introduces additional latency as it processes the full
   *   transcription for context.
   *
   * Returns: FrenchTranscriptionResponse: A dictionary containing the transcribed
   * (and optionally translated) text.
   */
  createTranscription(
    params: TranscribeCreateTranscriptionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TranscribeCreateTranscriptionResponse> {
    const { translate_to_french, ...body } = params;
    return this._client.post(
      '/api/v1/models/transcribe',
      Core.multipartFormRequestOptions({ query: { translate_to_french }, body, ...options }),
    );
  }

  /**
   * Perform streaming transcription of an uploaded audio file, with optional French
   * translation.
   *
   * **What does this endpoint do?**
   *
   * - Transcribes audio content into text in real-time using Bambara models.
   * - Optionally translates the transcribed text into French if
   *   `translate_to_french` is set to `True`.
   *
   * **Behavior Notes:**
   *
   * - If `translate_to_french=False` (default):
   *   - Each streamed response represents a **chunk** of the transcribed text.
   * - If `translate_to_french=True`:
   *   - Each streamed response represents the **entire transcription** up to that
   *     point, translated into French.
   *   - This is because translation requires full context for accurate results.
   *
   * **Headers:**
   *
   * - `x-api-key`: Your API key for authentication.
   *
   * **Parameters:**
   *
   * - `file` (UploadFile): The audio file to transcribe.
   * - `translate_to_french` (bool): Whether to translate the transcription into
   *   French. Defaults to `False`.
   *
   * **Example Response (Chunk Mode - translate_to_french=False):**
   *
   * ```json
   * {"text": "Aw ni ce", "start": 0.0, "end": 0.2}
   * {"text": "I ka kene wa?", "start": 0.2, "end": 0.4}
   * ```
   *
   * **Example Response (Full Text Mode - translate_to_french=True):**
   *
   * ```json
   * { "text": "Bonjour, comment ça va?" }
   * ```
   *
   * **Caution:**
   *
   * - Translation introduces latency because it requires the full transcription
   *   context for accuracy. Expect longer delays when `translate_to_french=True`.
   *
   * Returns: StreamingResponse: A streaming JSON response containing transcription
   * and optional translation.
   */
  streamTranscription(
    params: TranscribeStreamTranscriptionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TranscribeStreamTranscriptionResponse> {
    const { translate_to_french, ...body } = params;
    return this._client.post(
      '/api/v1/models/transcribe/stream',
      Core.multipartFormRequestOptions({ query: { translate_to_french }, body, ...options }),
    );
  }
}

export interface FrenchTranscriptionResponse {
  /**
   * The transcribed text
   */
  text: string;
}

export interface TranscriptionSegment {
  /**
   * The end of the segment
   */
  end: number;

  /**
   * The start of the segment
   */
  start: number;

  /**
   * The transcribed text of the segment
   */
  text: string;
}

export type TranscribeCreateTranscriptionResponse = FrenchTranscriptionResponse | Array<TranscriptionSegment>;

export type TranscribeStreamTranscriptionResponse = FrenchTranscriptionResponse | TranscriptionSegment;

export interface TranscribeCreateTranscriptionParams {
  /**
   * Body param: The uploaded audio file
   */
  file: Core.Uploadable;

  /**
   * Query param: Flag to translate transcriptions into French
   */
  translate_to_french?: boolean | null;
}

export interface TranscribeStreamTranscriptionParams {
  /**
   * Body param: The uploaded audio file
   */
  file: Core.Uploadable;

  /**
   * Query param: Flag to translate transcriptions into French
   */
  translate_to_french?: boolean | null;
}

export declare namespace Transcribe {
  export {
    type FrenchTranscriptionResponse as FrenchTranscriptionResponse,
    type TranscriptionSegment as TranscriptionSegment,
    type TranscribeCreateTranscriptionResponse as TranscribeCreateTranscriptionResponse,
    type TranscribeStreamTranscriptionResponse as TranscribeStreamTranscriptionResponse,
    type TranscribeCreateTranscriptionParams as TranscribeCreateTranscriptionParams,
    type TranscribeStreamTranscriptionParams as TranscribeStreamTranscriptionParams,
  };
}
