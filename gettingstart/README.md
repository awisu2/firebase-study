# gettingstart

firebase のガイド > firebase を使ってみる > アプリに Firebase を追加する > ウェブ をやってみる

- [Firebase のガイド  \|  Firebase Documentation](https://firebase.google.com/docs/guides?hl=ja)
- [Firebase console](https://console.firebase.google.com/u/0/)
- [Firebase でモジュールバンドラーを使用する  \|  Firebase Documentation](https://firebase.google.com/docs/web/module-bundling)

## web 用

- [Firebase を JavaScript プロジェクトに追加する  \|  Firebase Documentation](https://firebase.google.com/docs/web/setup?hl=ja)

メモ

- firebase では 最初に project を作り、その中に app を作る
  - ので最低 2 つ名前を考える必要
  - app は複数作ることが可能
- app 作成時に表示されるコードの firebaseConfig はなんか危ういので、firebase.config.js(.ts) に分割して、gitignore 対象に
  - コンソールからあとから確認できるので忘れても大丈夫
- 公式の参考コードの注意
  - [アプリで Firebase にアクセスする](https://firebase.google.com/docs/web/setup?hl=ja#access-firebase)
  - firestore に別途設定が必要
  - ドメイン持ちのアクセスでないとエラーになる(ここでは Express 使っている)

## links

- [Firebase Hosting](https://firebase.google.com/docs/hosting/?authuser=0): サーバとその管理機能を完備した hosting サービス

## sample

### firebase の導入

```bash
yarn init -y -p
yarn add firebase

# rollup
yarn add -D @rollup/plugin-typescript typescript tslib @rollup/plugin-node-resolve

# とりあえず見るだけように
yarn add -D express
```

- [rollup\-study/gettingstart at main · awisu2/rollup\-study](https://github.com/awisu2/rollup-study/tree/main/gettingstart#typescriipt-%E5%AF%BE%E5%BF%9C)
- [node\-study/express\-study at main · awisu2/node\-study](https://github.com/awisu2/node-study/tree/main/express-study)

## 事前設定

サンプルでは Firestore Database の cities というコレクションから値を取り出すという処理を行っているので、その実態を作成する

1. 作成したプロジェクトにアクセス
   - [Firebase コンソール](https://console.firebase.google.com/u/0/)
2. Firestore Database > DB 作成 (ルールはデバッグ)
   - デバッグ: 適当に試したかったため
3. コレクションとデータの追加
   - コレクションを作成 > コレクション ID: cities > ドキュメントの追加 > ドキュメント ID: 自動 ID, name, string, abc

### code

参考コードを typescript にして動作するようにしたもの。(rollup とかでまとめましょうとか言われたので)

_firebase.config.ts_

実際の値は app 作成時や、コンソールで確認できるのでそちらで

```ts
export const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx",
  projectId: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx",
  appId: "xxx",
  measurementId: "xxx",
};
```

_firebase.app.ts_

ほぼ公式サンプルまま

```ts
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

import { firebaseConfig } from "./firebase.config";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

// Get a list of cities from your database
export async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
```

_src/index.ts_

呼び出し

```ts
import { db, getCities } from "./firebase.app";

const ret = getCities(db);

getCities(db)
  .then((v) => {
    console.log(v);
  })
  .catch((err) => {
    console.log(err);
  });
```

## rollup, express 設定

コードを参照ください

```bash
# rollupでビルド
npm run build
# express サーバを開始
npm run start
```

[http://localhost:3000/view/index.html](http://localhost:3000/view/index.html) の consle で firesbase で追加した値の取得が確認できる
