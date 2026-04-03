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
      <NuxtDashboardToolbar>
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
