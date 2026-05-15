<script setup lang="ts">
definePageMeta({
  // middleware: ["auth-global"],
  layout: "dashboard",
  pageTransition: false,
  layoutTransition: false,
});
</script>

<template>
  <NuxtDashboardPanel resizable class="dark:bg-slate-950 light:bg-gray-200">
    <NuxtPage />
  </NuxtDashboardPanel>
</template>
