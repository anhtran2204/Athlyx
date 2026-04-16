<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

const props = defineProps<{
  to?: RouteLocationRaw;
}>();
</script>

<template>
  <NuxtLink :to="props.to" class="btn btn-link text-xl px-0">
    <NuxtColorModeImage
      light="/athlyx-logo-dark.svg"
      dark="/athlyx-logo-light.svg"
      alt="Logo"
      :width="140"
      :height="38"
      class="focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2 focus-visible:before:ring-info"
    />
  </NuxtLink>
</template>
