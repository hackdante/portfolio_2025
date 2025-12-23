import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // 1. Restricción de Console (Solo permite warn y error)
      "no-console": ["error", { allow: ["warn", "error"] }],

      // 2. Comentarios prohibidos (Bloquea el commit si existen)
      "no-warning-comments": [
        "error",
        {
          terms: ["todo", "fixme", "temp", "debug", "console.log"],
          location: "anywhere",
        },
      ],

      "no-alert": "error",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
