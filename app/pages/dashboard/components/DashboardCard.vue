<script setup lang="ts">
const cards = [
  {
    title: "Theme",
    description: "Learn how to customize Nuxt UI components using Tailwind CSS.",
    icon: "i-lucide-swatch-book",
    to: "/docs/getting-started/theme/design-system",
    variant: "soft" as const,
  },
  {
    title: "Fonts",
    description: "Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.",
    icon: "i-lucide-a-large-small",
    to: "/docs/getting-started/integrations/fonts",
    variant: "soft" as const,
  },
  {
    title: "Color Mode",
    description: "Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.",
    icon: "i-lucide-sun-moon",
    to: "/docs/getting-started/integrations/color-mode",
    variant: "soft" as const,
  },
  {
    title: "Icons",
    description: "Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.",
    icon: "i-lucide-smile",
    to: "/docs/getting-started/integrations/icons",
    variant: "soft" as const,
  },
  {
    title: "Icons",
    description: "Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.",
    icon: "i-lucide-smile",
    to: "/docs/getting-started/integrations/icons",
    variant: "soft" as const,
  },
  {
    title: "Fonts",
    description: "Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.",
    icon: "i-lucide-a-large-small",
    to: "/docs/getting-started/integrations/fonts",
    variant: "soft" as const,
  },
  {
    title: "Color Mode",
    description: "Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.",
    icon: "i-lucide-sun-moon",
    to: "/docs/getting-started/integrations/color-mode",
    variant: "soft" as const,
  },
];

const cards2 = [
  {
    title: "Theme",
    description: "Learn how to customize Nuxt UI components using Tailwind CSS.",
    icon: "i-lucide-swatch-book",
    to: "/docs/getting-started/theme/design-system",
    variant: "soft" as const,
    class: "lg:row-span-2",
  },
  {
    title: "Fonts",
    description: "Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.",
    icon: "i-lucide-a-large-small",
    to: "/docs/getting-started/integrations/fonts",
    variant: "soft" as const,
    class: "lg:row-span-2",
  },
  {
    title: "Color Mode",
    description: "Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.",
    icon: "i-lucide-sun-moon",
    to: "/docs/getting-started/integrations/color-mode",
    variant: "soft" as const,
    class: "lg:row-span-2",
  },
  {
    title: "Icons",
    description: "Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.",
    icon: "i-lucide-smile",
    to: "/docs/getting-started/integrations/icons",
    variant: "soft" as const,
  },
];
</script>

<template>
  <div class="flex-1 h-full">
    <NuxtPageGrid
      :ui="{
        base: 'lg:grid-rows-4 h-full',
      }"
    >
      <NuxtCard
        class="lg:col-span-2 lg:row-span-2"
        :ui="{
          root: 'bg-elevated/50',
          body: 'p-0 sm:p-0 flex flex-col h-full',
        }"
      >
        <NuxtCarousel
          v-slot="{ item }"
          :items="cards"
          fade
          loop
          dots
          class="flex-1"
          :ui="{
            // root: 'flex-1 flex flex-col h-full items-stretch',
            viewport: 'flex flex-col h-full',
            container: 'ms-0 h-full items-stretch',
            item: 'ps-0',
            prev: 'sm:start-28 top-8/7',
            next: 'sm:end-28 top-8/7',
            dots: 'focus-visible:ring-info bottom-2.25',
          }"
        >
          <NuxtPageCard
            v-bind="item"
            variant="subtle"
            :ui="{
              root: 'ring-0 bg-transparent flex flex-col h-full items-stretch',
              body: 'flex-1',
            }"
          />
        </NuxtCarousel>
      </NuxtCard>

      <NuxtPageCard
        v-for="(card, index) in cards2"
        :key="index"
        v-bind="card"
      />
    </NuxtPageGrid>
  </div>
</template>
