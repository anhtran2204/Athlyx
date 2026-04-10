<script setup lang="ts">
const route = useRoute();
const authStore = useAuthStore();
await authStore.init();
</script>

<template>
  <div
    class="flex flex-col min-h-screen"
    :class="{
      'light:bg-main dark:bg-main': route.fullPath === '/',
      'light:bg-features dark:bg-features': route.fullPath === '/features',
      'light:bg-about dark:bg-about': route.fullPath === '/about',
    }"
  >
    <Header class="bg-transparent" />
    <main class="grow min-w-full flex container">
      <slot />
    </main>
    <Footer class="bg-transparent" />
  </div>
</template>
