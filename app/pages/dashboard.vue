<script setup lang="ts">
definePageMeta({
  // middleware: ["auth-global"],
  layout: "dashboard",
  pageTransition: false,
  layoutTransition: false,
});
</script>

<template>
  <NuxtDashboardPanel resizable class="dark:bg-dashboard light:bg-dashboard">
    <NuxtPage />
  </NuxtDashboardPanel>
</template>
