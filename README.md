# Turborepo Example

このリポジトリは Turborepo を使ってモノレポ構成の npm パッケージを管理するプロジェクトのサンプルです。

- [Turborepo を使ってモノレポ構成の npm パッケージ を管理する](https://cam-inc.co.jp/p/techblog/728530570199434396)

## ディレクトリ構成

```
  root/
    ├ apps/
    │  └ sample-app/ # packages で publish したパッケージを利用した サンプルプロジェクト
    │       └ package.json
    |
    └ packages/
          ├ eslint-config/ # packages 内のみで使われる共通の eslint の設定
          │ └ package.json
          |
          ├ sample-1/ # npm に publish したいパッケージ
          │ └ package.json
          |
          ├ sample-2/ # npm に publish したいパッケージ
          │ └ package.json
          |
          └ tsconfig/ # packages 内のみで使われる共通の tsの設定ファイル
               └ package.json
```

## npm scripts

```json
  "scripts": {
    "dev:app": "sample-app を起動します",
    "build": "全ての app, package をビルドします",
    "lint": "全ての app, package の lint を実行します",
    "lint:fix": "全ての app, package の lint:fix を実行します",
    "format": "プロジェクトのコード全体のフォーマットチェックをします",
    "format:fix": "プロジェクトのコード全体をフォーマットします",
    "type-check": "全ての app, package の type-check を実行します"
  },
```
