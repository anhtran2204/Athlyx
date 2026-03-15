import antfu from "@antfu/eslint-config";

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

// TODO: add eslint-plugin-tailwindcss v4 when released

export default withNuxt(
  antfu({
    type: "app",
    vue: true,
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    ignores: ["**/*.md"],
  }, {
    rules: {
      "vue/max-attributes-per-line": ["error", {
        singleline: {
          max: 2,
        },
        multiline: {
          max: 1,
        },
      }],
      "ts/no-redeclare": "off",
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["warn"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "no-process-env": ["error"],
      "unicorn/filename-case": ["error", {
        case: "kebabCase",
        ignore: ["README.md"],
      }],
      "vue/block-order": ["error", {
        order: [["script", "template"], "style"],
      }],
    },
  }),
)
  .override(
    "antfu/perfectionist/setup",
    {
      rules: {
        "perfectionist/sort-imports": ["error", {
          groups: [
            ["value-builtin", "type-builtin"],
            ["value-external", "type-external"],
            ["value-internal", "type-internal"],
            ["value-parent", "type-parent", "value-sibling", "type-sibling", "value-index", "type-index"],
            "side-effect",
            "ts-equals-import",
            "unknown",
          ],
          type: "natural",
        }],
      },
    },
  );
