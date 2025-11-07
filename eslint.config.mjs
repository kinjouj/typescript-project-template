import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import checkFile from 'eslint-plugin-check-file';
import jest from "eslint-plugin-jest";
import globals from "globals";
import inlinePropsPlugin from "eslint-plugin-no-inline-props";

export default defineConfig(
  { ignores: ["**/*.js", "**/*.mjs"] },
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  stylistic.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  reactHooks.configs.flat.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "react": react,
      "react-hooks": reactHooks,
      "@stylistic": stylistic,
      "check-file": checkFile,
      "jest": jest,
      "my-rule": inlinePropsPlugin
    },
    rules: {
      ...jest.configs["recommended"].rules,
      ...jest.configs["style"].rules,
      "curly": ["error", "all"],
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-constant-condition": "error",
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/array-bracket-spacing": ["error", "always", { singleValue: false }],
      "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "@stylistic/comma-dangle": [
        "error",
        {
          "arrays": "always-multiline",
          "objects": "always-multiline",
          "functions": "ignore",
        },
      ],
      "@stylistic/max-statements-per-line": ["error", { max: 2 }],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/spaced-comment": "off",
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: ["variable", "function"],
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
        },
        {
          selector: ["typeAlias", "interface", "class", "enum"],
          format: ["PascalCase"],
        },
        {
          selector: ["variable", "function"],
          format: ["PascalCase"],
          custom: {
            regex: "^[A-Z]",
            match: true,
          },
        },
      ],
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
      "my-rule/no-inline-props": "error"
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
);
