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
    "@vercel/analytics",
    "@vercel/speed-insights",
    "nuxt-security",
    "nuxt-charts",
  ],
  // css: ["~~/app/assets/css/main.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  features: {
    inlineStyles: true,
  },
  ui: {
    prefix: "Nuxt",
  },
  pages: {
    pattern: ["**/*.vue", "!**/components/**"],
  },
  routeRules: {
    "/home:": { redirect: { to: "/", statusCode: 301 } },
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
  nitro: {
    prerender: {
      crawlLinks: true, // Automatically crawls links in your content to find pages
      routes: ["/about"],
      ignore: ["/dashboard"],
    },
    routeRules: {
      "/__nuxt_content/**": { csurf: false } as any,
    },
  },
  security: {
    csrf: false,
    headers: {
      contentSecurityPolicy: {
        "img-src": [
          "'self'",
          "data:",
          "https://avatars.githubusercontent.com",
          "https://github.com",
        ],
        "script-src": [
          "'self'",
          "https:",
          "'unsafe-inline'",
          "'strict-dynamic'",
          "'wasm-unsafe-eval'",
          "'nonce-{{nonce}}'",
        ],
        "script-src-attr": false,
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
