# @seserageek/eslint-config

<a href="https://www.npmjs.com/package/@seserageek/eslint-config"><img src="https://img.shields.io/npm/v/@seserageek/eslint-config
"></a>
<a href="https://www.npmjs.com/package/@seserageek/eslint-config"><img src="https://img.shields.io/npm/l/@seserageek/eslint-config
"></a>

Seserageek の共通 ESLint 設定です。

## 利用条件

- ESLint をインストール済みであること。

## 使い方

パッケージをインストールしてください。

```bash
npm install --save-dev --save-exact @seserageek/eslint-config
```

`eslint.config.js` を以下のように設定してください。

```javascript
import { flatConfig } from "@seserageek/eslint-config";

export default [
  ...flatConfig,
  // your custom configs
];
```
