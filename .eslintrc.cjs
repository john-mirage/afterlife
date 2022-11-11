module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  root: true,
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    {
      files: ["*.astro", "*.ts", "*.mts", "*.cts", "*.tsx"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
  rules: {
    "prettier/prettier": ["error"],
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
};
