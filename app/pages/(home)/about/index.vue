<script setup lang="ts">
definePageMeta({
  path: "/about",
});
</script>

<template>
  <div class="min-w-full container">
    <div id="about">
      <LazyAboutSection />
    </div>
    <div id="contacts">
      <LazyContactsSection />
    </div>
  </div>
</template>
