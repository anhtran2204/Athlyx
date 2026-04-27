<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[][] = [
  [
    {
      label: "Overview",
      icon: "tabler:chart-arcs-3",
      exact: true,
      to: "/dashboard/workout",
    },
    {
      label: "Active Workout",
      icon: "lucide:activity",
      exact: true,
    },
    {
      label: "Routines",
      icon: "lucide:clipboard-list",
    },
    {
      label: "Exercises",
      icon: "lucide:dumbbell",
    },
  ],
];
</script>

<template>
  <NuxtDashboardPanel resizable class="dark:bg-dashboard light:bg-dashboard">
    <template #header>
      <NuxtDashboardNavbar
        title="Workout"
        :ui="{
          title: 'text-xl',
        }"
      >
        <template #leading>
          <LazyNuxtDashboardSidebarCollapse />
        </template>
        <template #right>
          <Notifications />
          <ThemeButton />
          <ProfileButton />
        </template>
      </NuxtDashboardNavbar>
      <NuxtDashboardToolbar
        :ui="{
          root: 'px-4',
        }"
      >
        <NuxtNavigationMenu
          :items="items"
          highlight
          highlight-color="info"
          class="flex-1 -ms-1"
        />
      </NuxtDashboardToolbar>
    </template>
    <template #body>
      <NuxtPage />
    </template>
  </NuxtDashboardPanel>
</template>
