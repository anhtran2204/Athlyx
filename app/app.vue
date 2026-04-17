<script setup lang="ts">
import "~/assets/css/main.css";

useHead({
  title: "Athlyx - Workout Tracker & Nutrition Planner",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<template>
  <NuxtApp :toaster="{ position: 'top-right' }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </NuxtApp>
</template>
