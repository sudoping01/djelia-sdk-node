# API

## V1

### Models

Types:

- <code><a href="./src/resources/api/v1/models/models.ts">ModelCreateSpeechResponse</a></code>

Methods:

- <code title="post /api/v1/models/tts">client.api.v1.models.<a href="./src/resources/api/v1/models/models.ts">createSpeech</a>({ ...params }) -> unknown</code>

#### Translate

Types:

- <code><a href="./src/resources/api/v1/models/translate.ts">TranslationLanguage</a></code>
- <code><a href="./src/resources/api/v1/models/translate.ts">TranslateCreateTranslationResponse</a></code>
- <code><a href="./src/resources/api/v1/models/translate.ts">TranslateListSupportedLanguagesResponse</a></code>

Methods:

- <code title="post /api/v1/models/translate">client.api.v1.models.translate.<a href="./src/resources/api/v1/models/translate.ts">createTranslation</a>({ ...params }) -> TranslateCreateTranslationResponse</code>
- <code title="get /api/v1/models/translate/supported-languages">client.api.v1.models.translate.<a href="./src/resources/api/v1/models/translate.ts">listSupportedLanguages</a>() -> TranslateListSupportedLanguagesResponse</code>

#### Transcribe

Types:

- <code><a href="./src/resources/api/v1/models/transcribe.ts">FrenchTranscriptionResponse</a></code>
- <code><a href="./src/resources/api/v1/models/transcribe.ts">TranscriptionSegment</a></code>
- <code><a href="./src/resources/api/v1/models/transcribe.ts">TranscribeCreateTranscriptionResponse</a></code>
- <code><a href="./src/resources/api/v1/models/transcribe.ts">TranscribeStreamTranscriptionResponse</a></code>

Methods:

- <code title="post /api/v1/models/transcribe">client.api.v1.models.transcribe.<a href="./src/resources/api/v1/models/transcribe.ts">createTranscription</a>({ ...params }) -> TranscribeCreateTranscriptionResponse</code>
- <code title="post /api/v1/models/transcribe/stream">client.api.v1.models.transcribe.<a href="./src/resources/api/v1/models/transcribe.ts">streamTranscription</a>({ ...params }) -> TranscribeStreamTranscriptionResponse</code>
