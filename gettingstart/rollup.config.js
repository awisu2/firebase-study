const typescript = require("@rollup/plugin-typescript");
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  preserveModules: false, // チャンクファイルに分割して出力(.d.tsファイル出力)
  output: {
    // file: 'dist/index.js',
    dir: "dist", // preserveModules: true の場合、fileではなくdirで設定
    format: "iife",
  },
  plugins: [
    nodeResolve(),
    typescript({
      declaration: true, // タイプファイルの出力ON
      declarationDir: "dist/@types", // タイプファイルの出力先
    }),
  ],
};
