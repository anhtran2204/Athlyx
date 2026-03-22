import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-03-21",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/hints",
    "@nuxt/fonts",
  ],
  routeRules: {
    "/": { appLayout: "default" },
    "/login": { appLayout: "authenticate" },
    "/signup": { appLayout: "authenticate" },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["~~/app/assets/css/main.css"],
  ui: {
    prefix: "Nuxt",
  },
  pages: {
    pattern: ["**/*.vue", "!**/components/**"],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
    "~/components",
    {
      path: "~/pages",
      pattern: "**/components/**",
      pathPrefix: false,
    },
  ],
  vite: {
    plugins: [
      tailwindcss(),
      tsconfigPaths(),
    ],
    optimizeDeps: {
      include: [
        "@vue/devtools-core",
        "@vue/devtools-kit",
      ],
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
    checker: {
      eslintPath: "eslint",
    },
  },
});
