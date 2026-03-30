<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

const props = defineProps<{
  to?: RouteLocationRaw;
}>();
</script>

<template>
  <NuxtLink :to="props.to" class="btn btn-link text-xl px-0">
    <NuxtColorModeImage
      light="/athlyx-icon-dark.svg"
      dark="/athlyx-icon-light.svg"
      alt="Logo"
    />
  </NuxtLink>
</template>
