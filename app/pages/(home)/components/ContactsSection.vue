<script setup lang="ts">
const cards = ref([
  {
    title: "Smart Tracking",
    description: "Automatically track workouts, meals, and progress with intelligent logging.",
    icon: "lucide:activity",
  },
  {
    title: "Custom Plans",
    description: "Create personalized workout routines and meal plans tailored to your goals.",
    icon: "lucide:clipboard-list",
  },
  {
    title: "Analytics",
    description: "Detailed insights and visualizations to understand your fitness journey.",
    icon: "lucide:chart-no-axes-combined",
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
  <NuxtPageSection
    title="Take control of your productivity"
    headline="Features"
    description="Powerful features designed to help you reach your fitness and nutrition goals faster."
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
</template>
