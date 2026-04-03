<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[][] = [
  [
    {
      label: "General",
      icon: "lucide:sliders-horizontal",
      exact: true,
      to: "/dashboard/settings",
    },
    {
      label: "Profile",
      icon: "lucide:user",
      exact: true,
      to: "/dashboard/settings/profile",
    },
    {
      label: "Membership",
      icon: "i-lucide-credit-card",
      to: "/dashboard/settings/membership",
    },
    {
      label: "Notifications",
      icon: "i-lucide-bell",
      to: "/dashboard/settings/notifications",
    },
  ],
  [
    {
      label: "Documentation",
      icon: "i-lucide-book-open",
      to: "https://ui.nuxt.com/docs",
      target: "_blank",
    },
    {
      label: "Help & Feedback",
      icon: "i-lucide-help-circle",
      to: "https://github.com/nuxt/ui/issues",
      target: "_blank",
    },
  ],
];
</script>

<template>
  <NuxtDashboardPanel resizable class="dark:bg-dashboard light:bg-dashboard">
    <template #header>
      <NuxtDashboardNavbar
        title="Settings"
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
