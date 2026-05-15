<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";

const items = ref<TabsItem[]>([
  {
    label: "Overview",
    icon: "tabler:chart-arcs-3",
    slot: "overview",
  },
  {
    label: "Active Workout",
    icon: "lucide:activity",
    slot: "active",
  },
  {
    label: "Routines",
    icon: "lucide:clipboard-list",
    slot: "routines",
  },
  {
    label: "Exercises",
    icon: "lucide:dumbbell",
    slot: "exercises",
  },
]);
</script>

<template>
  <div class="relative w-full flex flex-1 justify-between">
    <div class="relative flex flex-col w-full">
      <NuxtTabs
        :items="items"
        color="info"
        variant="link"
        :ui="{
          root: 'flex-1',
          content: 'flex flex-col flex-1',
        }"
      >
        <template #overview>
          <div class="flex flex-col flex-1 justify-between gap-6 sm:gap-8 my-4 sm:my-6">
            <WorkoutSummaryGrid />
            <DashboardWeeklyActivityCard />
          </div>
        </template>
        <template #active>
          <div class="flex flex-col flex-1 justify-between gap-6 sm:gap-8 my-4 sm:my-6">
            <ActiveWorkoutView />
          </div>
        </template>
        <template #routines>
          <div class="flex flex-col flex-1 justify-between gap-6 sm:gap-8 my-4 sm:my-6">
            <RoutinesView />
          </div>
        </template>
        <template #exercises>
          <div class="flex flex-col flex-1 justify-between gap-6 sm:gap-8 my-4 sm:my-6">
            <ExercisesView />
          </div>
        </template>
      </NuxtTabs>
    </div>
  </div>
</template>
