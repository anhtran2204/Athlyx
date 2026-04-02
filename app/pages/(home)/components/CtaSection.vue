<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const links = ref<ButtonProps[]>([
  {
    label: "Get started",
    trailingIcon: "lucide:arrow-right",
    color: "info",
    to: "/sign_up",
  },
]);
</script>

<template>
  <NuxtPageCTA
    title="Trusted and supported by our amazing community"
    description="We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
    variant="soft"
    :links="links"
    class="dark:bg-cta"
  >
    <LazyStarsBackground />
  </NuxtPageCTA>
</template>
