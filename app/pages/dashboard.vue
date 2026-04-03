<script setup lang="ts">
definePageMeta({
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
