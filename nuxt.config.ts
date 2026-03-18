import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
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

  },
  css: ["~~/app/assets/css/main.css"],
  components: [
    {
      path: "~/components",
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
