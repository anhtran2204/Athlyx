<script setup lang="ts">
const items = ref(["Backlog", "Todo", "In Progress", "Done"]);
const value = ref("Backlog");
</script>

<template>
  <NuxtSelect
    v-model="value"
    :items="items"
    color="neutral"
    variant="ghost"
  />
</template>
