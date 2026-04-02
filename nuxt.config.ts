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
    "@nuxt/content",
    "@nuxt/image",
    "nuxt-vitalizer",
  ],
  // css: ["~~/app/assets/css/main.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  features: {
    inlineStyles: true, // or a function to determine inlining
  },
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
    // build: {
    //   modulePreload: false,
    // },
  },
  nitro: {
    prerender: {
      crawlLinks: true, // Automatically crawls links in your content to find pages
      routes: ["/about"], // Explicitly tell Nuxt to generate the about page
    },
  },
  vitalizer: {
    // Remove the render-blocking entry CSS
    disableStylesheets: "entry",
    disablePrefetchLinks: true,
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
