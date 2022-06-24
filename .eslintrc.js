// 基本配置
// https://cn.eslint.org/docs/user-guide/getting-started

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
  },
  rules: {
    // enUS: all rules docs https://eslint.org/docs/rules/
    // zhCN: 所有规则文档 https://eslint.bootcss.com/docs/rules/
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "quote-props": "off",
    /* typescript */
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-interface": "off",
    /* other */
    'vue/multi-word-component-names': 'off',
  },
  overrides: [
    {
      files: ["*.html"],
      rules: {
        // https://github.com/vuejs/eslint-plugin-vue/issues/1355
        "vue/comment-directive": "off",
      },
    },
  ],
};
