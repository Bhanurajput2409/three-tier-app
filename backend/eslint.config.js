// eslint.config.js
import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended, // Uses ESLint's default recommended rules
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node, // Enables Node.js global variables (like process, require)
      },
    },
    rules: {
      // You can add custom rule overrides here, for example:
      "no-unused-vars": "warn", 
    },
  },
];
