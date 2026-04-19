<script setup lang="ts">
import type { PageFeatureProps } from "@nuxt/ui";

const workoutTrackingFeatures = ref<PageFeatureProps[]>([
  {
    title: "Custom exercise library with 1000+ exercises",
    icon: "lucide:check",
  },
  {
    title: "Progressive overload tracking and suggestions",
    icon: "lucide:check",
  },
  {
    title: "Rest timer and interval tracking",
    icon: "lucide:check",
  },
  {
    title: "Workout templates and routines",
    icon: "lucide:check",
  },
  {
    title: "Form video library and guides",
    icon: "lucide:check",
  },
]);

const nutritionTrackingFeatures = ref<PageFeatureProps[]>([
  {
    title: "Barcode scanner for instant food logging",
    icon: "lucide:check",
  },
  {
    title: "Macro calculator and meal planning",
    icon: "lucide:check",
  },
  {
    title: "Water intake and hydration tracking",
    icon: "lucide:check",
  },
  {
    title: "Custom food database with favorites",
    icon: "lucide:check",
  },
  {
    title: "Meal prep scheduling and reminders",
    icon: "lucide:check",
  },
]);

const analyticsFeatures = ref<PageFeatureProps[]>([
  {
    title: "Interactive charts and progress graphs",
    icon: "lucide:check",
  },
  {
    title: "Body composition and weight tracking",
    icon: "lucide:check",
  },
  {
    title: "Personal records and achievements",
    icon: "lucide:check",
  },
  {
    title: "Trend analysis and predictions",
    icon: "lucide:check",
  },
  {
    title: "Export data and custom reports",
    icon: "lucide:check",
  },
]);

const cards = ref([
  {
    title: "Heart Rate Monitoring",
    description: "Monitor and upload heart rate and vital metrics to ensure safe and effective workouts.",
    icon: "lucide:heart",
  },
  {
    title: "Custom Plans",
    description: "Create personalized workout routines and meal plans tailored to your goals.",
    icon: "lucide:clipboard-list",
  },
  {
    title: "Location Tracking",
    description: "Real time tracking with GPS for your cardio activities, like running, cycling, and hiking.",
    icon: "lucide:map-pinned",
  },
  {
    title: "Goal Setting",
    description: "Set and track fitness and nutrition goals with progress monitoring.",
    icon: "lucide:target",
  },
  {
    title: "Sync Anywhere",
    description: "Seamless sync between web and mobile apps for access anywhere.",
    icon: "lucide:monitor-smartphone",
  },
  {
    title: "Community",
    description: "Connect with others, share achievements, and stay motivated.",
    icon: "lucide:users",
  },
]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.75,
  });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  document.querySelectorAll(".feature").forEach(el => observer.observe(el));
});

function scrollToFeatures() {
  document.querySelector(".reveal")?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <div class="grow flex flex-col light:bg-features dark:bg-features">
    <div class="flex flex-col items-center justify-center py-8 sm:py-16 my-16 sm:my-24 lg:my-32">
      <div class="main-headline mb-8 font-semibold flex items-center gap-1.5 justify-center">
        <div class="inline-flex items-center gap-2 bg-cyan-200 text-sky-700 px-4 py-2 rounded-full text-sm font-medium">
          Core Features
        </div>
      </div>
      <h1 class="main-title text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted text-center">
        Three Pillars of Success
      </h1>
      <div class="main-description max-w-4xl flex items-center justify-center text-base sm:text-lg text-muted text-center text-balance mt-6">
        Athlyx boasts a wide range of features while retaining its core simplicity and focusing on three pillars: workout logging, diet planning, and analyzing those metrics. Browse through the list of features below and see how they can help you stay motivated and reach your fitness goals.
      </div>
      <div class="main-icon w-full mt-36 flex justify-center">
        <Icon
          name="lucide:circle-chevron-down"
          size="60"
          class="animate-bounce cursor-pointer"
          @click="scrollToFeatures"
        />
      </div>
    </div>
    <div class="reveal left">
      <NuxtPageSection
        title="Advanced Fitness Tracking"
        description="Log every workout with precision. Track sets, reps, weight, and form. Monitor your strength gains and endurance improvements over time with our intelligent tracking system."
        icon="lucide:activity"
        orientation="horizontal"
        :features="workoutTrackingFeatures"
        :ui="{
          leading: 'w-12 h-12 light:bg-workout dark:bg-workout rounded-xl flex items-center justify-center flex-shrink-0',
          leadingIcon: 'text-white',
          features: 'light:text-cyan-700 dark:text-cyan-600',
        }"
      >
        <WorkoutFeatureCard class="reveal right" />
      </NuxtPageSection>
    </div>
    <div class="reveal right">
      <NuxtPageSection
        title="Smart Nutrition Planning"
        description="Fuel your performance with precision nutrition tracking. Monitor macros, calories, and meal timing to optimize your diet for maximum results."
        icon="lucide:apple"
        orientation="horizontal"
        reverse
        :features="nutritionTrackingFeatures"
        :ui="{
          leading: 'w-12 h-12 light:bg-nutrition dark:bg-nutrition rounded-xl flex items-center justify-center flex-shrink-0',
          leadingIcon: 'text-white',
          features: 'light:text-purple-700 dark:text-purple-600',
        }"
      >
        <NutritionFeatureCard class="reveal left" />
      </NuxtPageSection>
    </div>
    <div class="reveal left">
      <NuxtPageSection
        title="Data-Driven Analytics"
        description="Transform your data into actionable insights. Visualize progress, identify trends, and make informed decisions to accelerate your fitness journey."
        icon="lucide:chart-no-axes-combined"
        orientation="horizontal"
        :features="analyticsFeatures"
        :ui="{
          leading: 'w-12 h-12 light:bg-analytics dark:bg-analytics rounded-xl flex items-center justify-center flex-shrink-0',
          leadingIcon: 'text-white',
          features: 'light:text-blue-700 dark:text-blue-500 delay-200',
        }"
      >
        <AnalyticsFeatureCard class="reveal right" />
      </NuxtPageSection>
    </div>
    <div>
      <NuxtPageSection
        title="Take control of your productivity"
        headline="Other Features"
        description="More powerful features designed to help you reach your fitness and nutrition goals faster."
        :ui="{
          headline: 'bg-blue-300 text-blue-700',
          header: 'flex flex-col justify-center items-center',
        }"
        class="grow"
      >
        <NuxtPageGrid>
          <NuxtPageCard
            v-for="(card, index) in cards"
            :key="index"
            v-bind="card"
            spotlight
            spotlight-color="info"
            class="reveal up"
          />
        </NuxtPageGrid>
      </NuxtPageSection>
    </div>
    <CtaSection class="mt-16 sm:mt-24 lg:mt-32" />
  </div>
</template>

<style lang="css" scoped>
.main-headline {
  opacity: 0;
  animation: fadeUp 2s ease 0.3s forwards;
}

.main-title {
  opacity: 0;
  animation: fadeUp 2s ease 0.6s forwards;
}

.main-description {
  opacity: 0;
  animation: fadeUp 2s ease 0.9s forwards;
}

.main-icon {
  opacity: 0;
  animation: fadeUp 2.5s ease 1.5s forwards;
}

.feature.left {
  opacity: 0;
  transform: translateX(-22px);
  transition:
    opacity 1.35s ease,
    transform 1.35s ease;
}

.feature.right {
  opacity: 0;
  transform: translateX(22px);
  transition:
    opacity 1.35s ease,
    transform 1.35s ease;
}

.feature.left.visible,
.feature.right.visible {
  opacity: 1;
  transform: translateX(0);
}

.reveal.left {
  opacity: 0;
  transform: translateX(-22px);
  transition:
    opacity 1.65s ease,
    transform 1.65s ease;
}

.reveal.right {
  opacity: 0;
  transform: translateX(22px);
  transition:
    opacity 1.65s ease,
    transform 1.65s ease;
}

.reveal.up {
  opacity: 0;
  transform: translateY(22px);
  transition:
    opacity 1.65s ease,
    transform 1.65s ease;
}

.reveal.left.visible,
.reveal.right.visible {
  opacity: 1;
  transform: translateX(0);
}

.reveal.up.visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal.up.visible:hover {
  transition: transform 0.3s ease-in-out 0.05s;
  transform: translateY(-4px) scale(1.05);
}
</style>
