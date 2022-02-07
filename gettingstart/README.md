# gettingstart

- [Firebase のガイド  \|  Firebase Documentation](https://firebase.google.com/docs/guides?hl=ja)
- [Firebase console](https://console.firebase.google.com/u/0/)
- [Firebase でモジュールバンドラーを使用する  \|  Firebase Documentation](https://firebase.google.com/docs/web/module-bundling)

## web 用

- [Firebase を JavaScript プロジェクトに追加する  \|  Firebase Documentation](https://firebase.google.com/docs/web/setup?hl=ja)

メモ

- 最初にプロジェクトを作り、その中に app を作る
  - ので最低 2 つ名前を考える必要
- [Firebase Hosting](https://firebase.google.com/docs/hosting/?authuser=0): サーバとその管理機能を完備した hosting サービス
- 参考に表示されるコードの firebaseConfig はなんか危ういので、firebase.config.js に分割して、gitignore 対象に

## firebase の導入

```bash
yarn init -y -p
yarn add firebase
```
