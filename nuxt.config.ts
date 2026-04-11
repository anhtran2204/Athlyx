import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-03-21",
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/hints",
    "@nuxt/fonts",
    "@nuxt/content",
    "@nuxt/image",
    "nuxt-vitalizer",
    "@pinia/nuxt",
    "nuxt-csurf",
    "@vercel/analytics",
    "@vercel/speed-insights",
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
        "better-auth/vue",
        "better-auth",
        "better-auth/adapters/prisma",
        "better-auth/api",
        "zod",
      ],
      exclude: [
        "@prisma/client",
        "@prisma/adapter-pg",
        "pg",
      ],
    },
    build: {
      modulePreload: false,
    },
  },
  csurf: {
    methodsToProtect: ["POST", "PUT", "PATCH", "DELETE"], // the request methods we want CSRF protection for
    addCsrfTokenToEventCtx: true,
  },
  nitro: {
    prerender: {
      crawlLinks: true, // Automatically crawls links in your content to find pages
      routes: ["/about"],
      ignore: ["/dashboard"],
    },
    routeRules: {
      "/__nuxt_content/**": { csurf: false } as any,
      "/api/auth/**": {
        cors: true,
        headers: {
          "access-control-allow-origin": "https://www.athlyxfit.com",
          "access-control-allow-methods": "*",
        },
      },
    },
  },
  content: {
    experimental: { sqliteConnector: "native" },
  },
  image: {
    github: {
      baseURL: "https://avatars.githubusercontent.com/",
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
