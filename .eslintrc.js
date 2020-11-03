module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended", // "plugin:vue/vue3-strongly-recommended"もあります
    "@vue/typescript",
    "plugin:prettier/recommended",
    "prettier/vue", // 必須ではありません(ルールを書き換えるだけのため)
    "prettier/@typescript-eslint" // 必須ではありません(ルールを書き換えるだけのため)
  ],
  env: {
    node: true
  },
  rules: {}
};
