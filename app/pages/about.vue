<script setup lang="ts">
definePageMeta({
  path: "/about",
});

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.45,
  });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});
</script>

<template>
  <div class="min-w-full container">
    <div id="about" class="about">
      <LazyAboutSection />
    </div>
    <div id="contacts" class="reveal up">
      <LazyContactsSection />
    </div>
  </div>
</template>

<style lang="css" scoped>
.reveal.up {
  opacity: 0;
  transform: translateY(22px);
  transition:
    opacity 1.65s ease,
    transform 1.65s ease;
}

.reveal.up.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
