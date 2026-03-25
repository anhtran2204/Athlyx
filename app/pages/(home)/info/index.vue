<script setup lang="ts">
definePageMeta({
  path: "/info",
});
</script>

<template>
  <div class="min-w-full container">
    <div id="about">
      <AboutSection />
    </div>
    <div id="contacts">
      <ContactsSection />
    </div>
  </div>
</template>
