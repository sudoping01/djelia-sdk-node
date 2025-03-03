// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class Translate extends APIResource {
  /**
   * Translate text between supported languages.
   *
   * **What does this endpoint do?**
   *
   * - This endpoint translates text from a specified source language to a target
   *   language.
   * - It supports Bambara, French, and English.
   *
   * **Request Requirements:**
   *
   * - The request body must include:
   *   - `text` (str): The text to translate.
   *   - `source` (str): The language code of the source text (e.g., "fra_Latn").
   *   - `target` (str): The language code of the target language (e.g., "bam_Latn").
   *
   * **Headers:**
   *
   * - `x-api-key`: Your API key for authentication.
   * - `Content-Type`: Must be set to `application/json`.
   *
   * **Example Request Body:**
   *
   * ```json
   * {
   *   "text": "Bonjour",
   *   "source": "fra_Latn",
   *   "target": "bam_Latn"
   * }
   * ```
   *
   * **Example Response:**
   *
   * ```json
   * {
   *   "text": "Aw ni ce"
   * }
   * ```
   *
   * **How to use this endpoint?**
   *
   * - Use the `/translate/supported-languages` endpoint to get a list of valid
   *   language codes.
   * - Provide the `text`, `source`, and `target` fields in the request body.
   *
   * Returns: TranslationResponse: A dictionary containing the translated text.
   */
  createTranslation(
    body: TranslateCreateTranslationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TranslateCreateTranslationResponse> {
    return this._client.post('/api/v1/models/translate', { body, ...options });
  }

  /**
   * Retrieve a list of supported languages for translation.
   *
   * **What does this endpoint do?**
   *
   * - Returns all languages supported by the Djelia translation API.
   * - Each language is represented by:
   *   - `code`: The language code (e.g., "bam_Latn" for Bambara).
   *   - `name`: The human-readable name of the language (e.g., "Bambara").
   *
   * **How to use this endpoint?**
   *
   * - Call this endpoint to get the language codes needed for configuring `source`
   *   and `target` parameters in translation requests.
   *
   * **Example Response**:
   *
   * ```json
   * [
   *   { "code": "bam_Latn", "name": "Bambara" },
   *   { "code": "fra_Latn", "name": "French" },
   *   { "code": "eng_Latn", "name": "English" }
   * ]
   * ```
   *
   * Returns: List[SupportedLanguageSchema]: A list of supported languages.
   */
  listSupportedLanguages(
    options?: Core.RequestOptions,
  ): Core.APIPromise<TranslateListSupportedLanguagesResponse> {
    return this._client.get('/api/v1/models/translate/supported-languages', options);
  }
}

export type TranslationLanguage = 'fra_Latn' | 'eng_Latn' | 'bam_Latn';

export interface TranslateCreateTranslationResponse {
  /**
   * The translated text
   */
  text: string;
}

export type TranslateListSupportedLanguagesResponse =
  Array<TranslateListSupportedLanguagesResponse.TranslateListSupportedLanguagesResponseItem>;

export namespace TranslateListSupportedLanguagesResponse {
  export interface TranslateListSupportedLanguagesResponseItem {
    /**
     * The language code.
     */
    code: string;

    /**
     * The name of the language.
     */
    name: string;
  }
}

export interface TranslateCreateTranslationParams {
  /**
   * The source language code (eg: eng_Latn)
   */
  source: TranslationLanguage;

  /**
   * The target language code (eg: bm_Latn)
   */
  target: TranslationLanguage;

  /**
   * The text to translate from source language to target language
   */
  text: string;
}

export declare namespace Translate {
  export {
    type TranslationLanguage as TranslationLanguage,
    type TranslateCreateTranslationResponse as TranslateCreateTranslationResponse,
    type TranslateListSupportedLanguagesResponse as TranslateListSupportedLanguagesResponse,
    type TranslateCreateTranslationParams as TranslateCreateTranslationParams,
  };
}
