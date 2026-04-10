<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();
</script>

<template>
  <NuxtLayout name="error-layout">
    <NuxtError
      :clear="{
        color: 'neutral',
        size: 'xl',
        icon: 'i-lucide-arrow-left',
        class: 'rounded-full',
      }"
      :error="{
        statusCode: error.status,
        statusMessage: error.statusText,
        message: error.message,
      }"
    />
  </NuxtLayout>
</template>
