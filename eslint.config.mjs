import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],

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

  {
    files: [
      "types/**/index.ts",
      "shared/**/index.ts",
      "utils/**/index.ts",
      "core/**/index.ts",
    ],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/*"],
              message:
                "❌ No uses aliases (@/) dentro de barrels internos. Usa imports relativos.",
            },
          ],
        },
      ],
    },
  },

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
