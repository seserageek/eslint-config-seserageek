# @seserageek/eslint-config

![./LICENSE](https://img.shields.io/github/license/nuxt/nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D)

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


