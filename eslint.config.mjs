import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Restricción estricta de consola: solo permite warn/error en desarrollo, pero Next.js fallará en build con cualquier console.log
      "no-console": ["error", { allow: ["warn", "error"] }],
      
      "sonarjs/prefer-readonly-properties": "off",
      "sonarjs/cognitive-complexity": "off",
      "sonarjs/no-duplicate-string": "off",
      "sonarjs/no-negated-condition": "off",
      
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/prefer-readonly-parameter-types": "off",

      // Bloqueo de términos prohibidos
      "no-warning-comments": [
        "error",
        {
          terms: ["todo", "fixme", "temp", "debug", "console.log"],
          location: "anywhere",
        },
      ],

      "no-alert": "error",

      // PROHIBICIÓN DE COMENTARIOS: Configuración de limpieza total
      "no-inline-comments": "error", // Prohíbe comentarios en la misma línea que el código
      "spaced-comment": "off", // No se permite el uso de comentarios con espacio
      "multiline-comment-style": ["error", "starred-block"], // Cualquier comentario de bloque debe ser eliminado o fallará

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