<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const links = ref<ButtonProps[]>([
  {
    label: "Get started",
    color: "info",
    to: "/signup",
  },
  {
    label: "Learn more",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right",
    to: "/features",
  },
]);
</script>

<template>
  <NuxtPageCTA
    title="Trusted and supported by our amazing community"
    description="We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
    variant="soft"
    :links="links"
  >
    <LazyStarsBackground />
  </NuxtPageCTA>
</template>
