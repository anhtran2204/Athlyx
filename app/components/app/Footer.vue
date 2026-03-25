<script setup lang="ts">
</script>

<template>
  <NuxtFooter class="border-0">
    <template #left>
      <p class="text-muted text-sm">
        Copyright © 2026-{{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <NuxtButton
        icon="i-simple-icons-linkedin"
        color="neutral"
        variant="ghost"
        to="https://linkedin.com/in/phan-a-tran/"
        target="_blank"
        aria-label="LinkedIn"
      />
      <NuxtButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/anhtran2204"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </NuxtFooter>
</template>
