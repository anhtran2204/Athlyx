import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    about: defineCollection({
      type: "page",
      source: "about.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
      }),
    }),
  },
});
