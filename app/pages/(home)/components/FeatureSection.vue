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
</script>

<template>
  <div class="grow flex flex-col light:bg-features dark:bg-features">
    <NuxtPageSection
      title="Three Pillars of Success"
      headline="Core Features"
      description="Master fitness, nutrition, and analytics to achieve your ultimate athletic potential."
      :ui="{
        headline: 'bg-cyan-200 text-sky-700',
        header: 'flex flex-col justify-center items-center',
      }"
    />
    <NuxtPageSection
      title="Advanced Fitness Tracking"
      description="Log every workout with precision. Track sets, reps, weight, and form. Monitor your strength gains and endurance improvements over time with our intelligent tracking system."
      icon="lucide:activity"
      orientation="horizontal"
      :features="workoutTrackingFeatures"
      :ui="{
        leading: 'w-12 h-12 light:bg-tracking dark:bg-tracking rounded-xl flex items-center justify-center flex-shrink-0',
        leadingIcon: 'text-white',
      }"
    >
      <NuxtPageFeature />
    </NuxtPageSection>
    <NuxtPageSection
      title="Smart Nutrition Planning"
      description="Fuel your performance with precision nutrition tracking. Monitor macros, calories, and meal timing to optimize your diet for maximum results."
      icon="lucide:apple"
      orientation="horizontal"
      reverse
      :features="nutritionTrackingFeatures"
      :ui="{
        leading: 'w-12 h-12 light:bg-tracking dark:bg-tracking rounded-xl flex items-center justify-center flex-shrink-0',
        leadingIcon: 'text-white',
      }"
    >
      <NuxtPageFeature />
    </NuxtPageSection>
    <NuxtPageSection
      title="Data-Driven Analytics"
      description="Transform your data into actionable insights. Visualize progress, identify trends, and make informed decisions to accelerate your fitness journey."
      icon="lucide:chart-no-axes-combined"
      orientation="horizontal"
      :features="analyticsFeatures"
      :ui="{
        leading: 'w-12 h-12 light:bg-tracking dark:bg-tracking rounded-xl flex items-center justify-center flex-shrink-0',
        leadingIcon: 'text-white',
      }"
    >
      <NuxtPageFeature />
    </NuxtPageSection>
    <NuxtPageSection
      title="Take control of your productivity"
      headline="Other Features"
      description="More powerful features designed to help you reach your fitness and nutrition goals faster."
      class="grow"
      :ui="{
        headline: 'bg-blue-300 text-blue-700',
        header: 'flex flex-col justify-center items-center',
      }"
    >
      <NuxtPageGrid>
        <NuxtPageCard
          v-for="(card, index) in cards"
          :key="index"
          v-bind="card"
          spotlight
          spotlight-color="info"
          class="transition delay-50 duration-600 ease-in-out hover:-translate-y-1 hover:scale-105"
        />
      </NuxtPageGrid>
    </NuxtPageSection>
    <CtaSection />
  </div>
</template>
