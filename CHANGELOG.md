# Changelog

## 0.1.0-alpha.4 (2025-05-22)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/sudoping01/djelia-sdk-node/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Bug Fixes

* **api:** improve type resolution when importing as a package ([#29](https://github.com/sudoping01/djelia-sdk-node/issues/29)) ([b89f1e0](https://github.com/sudoping01/djelia-sdk-node/commit/b89f1e0c1c97b1607f193696d56d9d2a17678891))
* **client:** send `X-Stainless-Timeout` in seconds ([#27](https://github.com/sudoping01/djelia-sdk-node/issues/27)) ([8e61540](https://github.com/sudoping01/djelia-sdk-node/commit/8e615401cf599bd99f7015fc85edc061b29f197a))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#25](https://github.com/sudoping01/djelia-sdk-node/issues/25)) ([93d5e42](https://github.com/sudoping01/djelia-sdk-node/commit/93d5e42b828cae8e8aaf6c9c6a4c5e1d26365cf4))
* **mcp:** remove unused tools.ts ([#30](https://github.com/sudoping01/djelia-sdk-node/issues/30)) ([0939611](https://github.com/sudoping01/djelia-sdk-node/commit/0939611aea4cd28189f7d422bd13801b66a332aa))


### Chores

* **ci:** add timeout thresholds for CI jobs ([d81fc16](https://github.com/sudoping01/djelia-sdk-node/commit/d81fc16582014b485324670c9b5256a76e1d4beb))
* **ci:** bump node version for release workflows ([0d54413](https://github.com/sudoping01/djelia-sdk-node/commit/0d544133f0ed6ce9279457d6aa3dc7bcc6ae4b41))
* **ci:** only use depot for staging repos ([d4c926c](https://github.com/sudoping01/djelia-sdk-node/commit/d4c926c1398bf3b240c894d938747b0cb7a2a48d))
* **client:** minor internal fixes ([d9200e3](https://github.com/sudoping01/djelia-sdk-node/commit/d9200e3da4cde4af29494ace39ee654f3427d984))
* **docs:** grammar improvements ([a1bacf7](https://github.com/sudoping01/djelia-sdk-node/commit/a1bacf7b8afc69090162bcc484cedf090919b527))
* **internal:** add aliases for Record and Array ([#28](https://github.com/sudoping01/djelia-sdk-node/issues/28)) ([9194c8d](https://github.com/sudoping01/djelia-sdk-node/commit/9194c8d312cf3060ded1f394005f037790450bdc))
* **internal:** codegen related update ([f5d9cf4](https://github.com/sudoping01/djelia-sdk-node/commit/f5d9cf44bd71d35e78ff4175b010bd31815009c0))
* **internal:** reduce CI branch coverage ([955560b](https://github.com/sudoping01/djelia-sdk-node/commit/955560bc7727a50fa67c084452f46017ae26ba59))
* **internal:** upload builds and expand CI branch coverage ([5ac22d0](https://github.com/sudoping01/djelia-sdk-node/commit/5ac22d092d10df98dafc8b09ab9d82ec226c4a79))


### Documentation

* **readme:** fix typo ([4f4b0f8](https://github.com/sudoping01/djelia-sdk-node/commit/4f4b0f8ae42aa498e0d8c9a32e301db7ec55069f))

## 0.1.0-alpha.3 (2025-03-22)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/sudoping01/djelia-sdk-node/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Bug Fixes

* avoid type error in certain environments ([#22](https://github.com/sudoping01/djelia-sdk-node/issues/22)) ([dc4af94](https://github.com/sudoping01/djelia-sdk-node/commit/dc4af9470666f64fb5f6f893bfc2a09a2c42dc3c))

## 0.1.0-alpha.2 (2025-03-20)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/sudoping01/djelia-sdk-node/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Bug Fixes

* **exports:** ensure resource imports don't require /index ([#18](https://github.com/sudoping01/djelia-sdk-node/issues/18)) ([1df46c8](https://github.com/sudoping01/djelia-sdk-node/commit/1df46c8d6e73d2ceb6b384faea1f45f4c7ba3345))


### Chores

* **exports:** cleaner resource index imports ([#19](https://github.com/sudoping01/djelia-sdk-node/issues/19)) ([cae88cf](https://github.com/sudoping01/djelia-sdk-node/commit/cae88cf85f1f149a6b2b62ebe9356a43ac5e63eb))
* **exports:** stop using path fallbacks ([#20](https://github.com/sudoping01/djelia-sdk-node/issues/20)) ([5194fac](https://github.com/sudoping01/djelia-sdk-node/commit/5194facaafe288772c4a30b0438c264361cf891c))
* **internal:** remove extra empty newlines ([#16](https://github.com/sudoping01/djelia-sdk-node/issues/16)) ([3b0f15e](https://github.com/sudoping01/djelia-sdk-node/commit/3b0f15ec919dbd4ba57dc30375c0740310f3e7bc))

## 0.1.0-alpha.1 (2025-03-11)

Full Changelog: [v0.0.1-alpha.3...v0.1.0-alpha.1](https://github.com/sudoping01/djelia-sdk-node/compare/v0.0.1-alpha.3...v0.1.0-alpha.1)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#12](https://github.com/sudoping01/djelia-sdk-node/issues/12)) ([7dc7603](https://github.com/sudoping01/djelia-sdk-node/commit/7dc7603c750b22d340e6c127a4898c3f1aa95637))
* **client:** accept RFC6838 JSON content types ([#14](https://github.com/sudoping01/djelia-sdk-node/issues/14)) ([1d1b4bb](https://github.com/sudoping01/djelia-sdk-node/commit/1d1b4bbce5b585ec7b2e739d340d27dac466a2eb))

## 0.0.1-alpha.3 (2025-03-04)

Full Changelog: [v0.0.1-alpha.2...v0.0.1-alpha.3](https://github.com/sudoping01/djelia-sdk-node/compare/v0.0.1-alpha.2...v0.0.1-alpha.3)

### Chores

* update SDK settings ([#9](https://github.com/sudoping01/djelia-sdk-node/issues/9)) ([ef8144f](https://github.com/sudoping01/djelia-sdk-node/commit/ef8144f86a384eba6f9f8ae71f12d349952372b8))

## 0.0.1-alpha.2 (2025-03-04)

Full Changelog: [v0.0.1-alpha.1...v0.0.1-alpha.2](https://github.com/sudoping01/djelia-sdk-node/compare/v0.0.1-alpha.1...v0.0.1-alpha.2)

### Chores

* update SDK settings ([#6](https://github.com/sudoping01/djelia-sdk-node/issues/6)) ([9cde4a4](https://github.com/sudoping01/djelia-sdk-node/commit/9cde4a4e292d594c33e0527057ed7515f7990ddf))

## 0.0.1-alpha.1 (2025-03-03)

Full Changelog: [v0.0.1-alpha.0...v0.0.1-alpha.1](https://github.com/sudoping01/djelia-sdk-node/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)

### Chores

* configure new SDK language ([d4a907b](https://github.com/sudoping01/djelia-sdk-node/commit/d4a907bc703242b380aca911ae8b3cd90a72bbbb))
* go live ([#1](https://github.com/sudoping01/djelia-sdk-node/issues/1)) ([f39b76f](https://github.com/sudoping01/djelia-sdk-node/commit/f39b76ffb182c7090c809abf496ca66c1d1ce7c7))
* update SDK settings ([#3](https://github.com/sudoping01/djelia-sdk-node/issues/3)) ([eac8c79](https://github.com/sudoping01/djelia-sdk-node/commit/eac8c7952dd3f554045230bf02ac8da75742cac6))
