module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    "turbo",
    "prettier",
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier", "@emotion"],
  rules: {
    "@emotion/pkg-renaming": "error",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-dynamic-require": "off",
    "prettier/prettier": "error",
    "no-use-before-define": "off",
    resolveJsonModule: "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-var-requires": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.spec.{ts,tsx}", "*.config.{js,ts}"],
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      },
    },
  },
};
