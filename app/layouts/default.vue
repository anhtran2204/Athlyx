<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div
    class="flex flex-col min-h-screen"
    :class="{
      'light:bg-main dark:bg-main': route.fullPath === '/',
      'light:bg-features dark:bg-features': route.fullPath === '/features',
      'light:bg-about dark:bg-about': route.fullPath === '/info',
    }"
  >
    <Header class="bg-transparent" />
    <main class="grow min-w-full flex container">
      <slot />
    </main>
    <!-- <NuxtSeparator
      icon="lucide:zap"
      type="solid"
      class="h-px"
    /> -->
    <Footer class="bg-transparent" />
  </div>
</template>
