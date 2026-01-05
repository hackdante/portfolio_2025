import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-restricted-types": [
        "error",
        {
          types: {
            Object:
              "Usa interfaces o Record<string, T> para definir objetos con estructura.",
            Function:
              "Define la firma de la función exactamente (ej: () => void) para mayor seguridad.",
            Boolean: "Usa 'boolean' (minúscula).",
            Number: "Usa 'number' (minúscula).",
            String: "Usa 'string' (minúscula).",
            Symbol: "Usa 'symbol' (minúscula).",
          },
        },
      ],

      "@typescript-eslint/consistent-type-assertions": [
        "error",
        {
          assertionStyle: "as",
          objectLiteralTypeAssertions: "allow-as-parameter",
        },
      ],

      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-alert": "error",
      "no-inline-comments": "off",
      "no-warning-comments": [
        "warn",
        {
          terms: ["todo", "fixme"],
          location: "anywhere",
        },
      ],

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
          caughtErrors: "all",
        },
      ],
    },
  },
  {
    files: [
      "**/types/index.ts",
      "**/shared/index.ts",
      "**/utils/index.ts",
      "**/core/index.ts",
    ],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/*"],
              message:
                "❌ Prohibido usar alias @/ en barrels. Usa rutas relativas para evitar ciclos.",
            },
          ],
        },
      ],
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
