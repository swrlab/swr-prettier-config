# SWR Prettier config

- [SWR Prettier config](#swr-prettier-config)
  - [Installation](#installation)
  - [Editor Config](#editor-config)

## Installation

Step 1: Install [npm package](https://www.npmjs.com/package/@swrlab/swr-prettier-config)

```shell
npm install @swrlab/swr-prettier-config
```

or

```shell
yarn add @swrlab/swr-prettier-config -D
```

Step 2: Include in `package.json`:

```json
{
  "prettier": "@swrlab/swr-prettier-config"
}
```

Or create a `.prettierrc.json` file with a link:

```json
"@swrlab/swr-prettier-config"
```

## Editor Config

This repository also contains a [`.editorconfig`](./.editorconfig) file. Consider this version as the main and copy it to other repositories where needed. This should ensure that the same copy is used everywhere.
