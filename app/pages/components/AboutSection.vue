<script setup lang="ts">
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
  <div>
    <NuxtPageSection
      headline="About Us"
      :ui="{
        container: '!pb-8 justify-center items-center',
        headline: 'bg-cyan-200 text-sky-900',
      }"
      class="about-headline"
    />
    <NuxtPageSection
      title="Who I Am"
      orientation="horizontal"
      reverse
      :ui="{
        container: 'justify-center items-center gap-0 sm:gap-0',
        headline: 'bg-cyan-200 text-sky-900',
      }"
      class="about-profile"
    >
      <template #description>
        <div class="space-y-4 max-w-lg">
          <div>
            I'm a software engineer with a strong interest in building products that solve real, everyday problems. My focus has always been on creating applications that are not only functional, but intuitive and meaningful to use. I care about clean design, thoughtful user experience, and systems that make complex things feel simple.
          </div>
          <div>
            Outside of programming, fitness has been a consistent part of my life. Like many people, I've spent time trying different apps to track workouts, monitor progress, and plan nutrition — but I often found myself switching between multiple tools that didn't quite fit together.
          </div>
        </div>
      </template>
      <div class="relative flex items-center justify-center">
        <div class="absolute inset-0 bg-linear-to-br from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20" />
        <div class="w-99 relative aspect-square bg-linear-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center border-2 border-slate-300 overflow-hidden">
          <LazyNuxtImg
            provider="github"
            src="anhtran2204"
            alt="My profile picture"
            :preload="{ fetchPriority: 'high' }"
            width="396"
            height="396"
            format="webp"
          />
        </div>
      </div>
    </NuxtPageSection>
    <div class="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 space-y-24 sm:space-y-32 lg:space-y-48">
      <div class="w-full dark:bg-workout-card light:bg-workout-card p-8 sm:p-12 rounded-3xl space-y-4 reveal up">
        <div class="flex flex-col space-y-4">
          <div class="flex items-center gap-4">
            <div class="p-4 dark:bg-slate-900 light:bg-sky-400 rounded-xl flex items-center">
              <Icon
                name="tabler:bulb"
                size="30"
              />
            </div>
            <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-pretty text-highlighted tracking-tight">
              How Athlyx Came To Be
            </div>
          </div>
          <div class="text-lg text-pretty tracking-tight">
            Athlyx started from a simple frustration: there wasn't a single platform that brought together everything I needed in a way that felt complete.
          </div>
          <div class="text-lg text-pretty tracking-tight">
            Most workout trackers focus heavily on logging exercises but lack meaningful insights. Nutrition apps often feel rigid, especially when it comes to representing different cuisines and real-world eating habits. And very few platforms connect training, nutrition, and progress tracking into one cohesive experie
          </div>
          <div class="text-lg text-pretty tracking-tight">
            I wanted to build something better. Athlyx is designed to bring structure and clarity to fitness — combining workout tracking, performance analytics, and flexible nutrition planning into a single platform. One of the key ideas behind it is adaptability: fitness isn't one-size-fits-all, and your tools shouldn't be either.
          </div>
          <div class="text-lg text-pretty tracking-tight">
            Whether it's tracking strength progression, planning meals across different cuisines, or simply staying consistent, Athlyx is built to support the way people actually live and train.
          </div>
        </div>
      </div>
      <div class="w-full dark:bg-analytics-card light:bg-analytics-card p-8 sm:p-12 rounded-3xl space-y-4 reveal up">
        <div class="flex flex-col space-y-4">
          <div class="flex items-center gap-4">
            <div class="p-4 dark:bg-slate-900 light:bg-sky-400 rounded-xl flex items-center">
              <Icon
                name="tabler:target-arrow"
                size="30"
              />
            </div>
            <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-pretty text-highlighted tracking-tight">
              The Goal
            </div>
          </div>
          <div class="text-lg text-pretty tracking-tight">
            The goal of Athlyx is simple: to give people the tools they need to train smarter, stay consistent, and make measurable progress — without unnecessary complexity.
          </div>
          <div class="text-lg text-pretty tracking-tight">
            It's not just about tracking data. It's about understanding it, using it, and improving over time.
          </div>
          <div class="text-lg text-pretty tracking-tight">
            Athlyx is still evolving, but the vision remains the same: a clean, powerful, and intuitive platform that helps you push further every day.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.about-headline {
  opacity: 0;
  animation: fadeUp 2s ease 0.3s forwards;
}

.about-profile {
  opacity: 0;
  animation: fadeUp 2s ease 0.7s forwards;
}

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
