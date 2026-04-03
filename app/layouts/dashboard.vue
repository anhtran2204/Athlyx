<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = [[{
  label: "Home",
  icon: "i-lucide-house",
  to: "/dashboard",
  exact: true,
}, {
  label: "Health",
  icon: "lucide:heart-pulse",
  to: "/dashboard/health",
}, {
  label: "Workouts",
  icon: "lucide:dumbbell",
  to: "/dashboard/workout",
}, {
  label: "Nutrition",
  icon: "lucide:utensils",
  to: "/dashboard/nutrition",
}, {
  label: "Settings",
  icon: "i-lucide-settings",
  defaultOpen: true,
  children: [{
    label: "General",
    icon: "lucide:sliders-horizontal",
    to: "/dashboard/settings",
    exact: true,
  }, {
    label: "Profile",
    icon: "lucide:user",
    to: "/dashboard/settings/profile",
  }, {
    label: "Membership",
    icon: "lucide:credit-card",
    to: "/dashboard/settings/membership",
  }, {
    label: "Notifications",
    icon: "lucide:bell",
    to: "/dashboard/settings/notifications",
  }],
}], [{
  label: "Feedback",
  icon: "i-lucide-message-circle",
  to: "https://github.com/nuxt-ui-templates/dashboard",
  target: "_blank",
}, {
  label: "Help & Support",
  icon: "i-lucide-info",
  to: "https://github.com/nuxt/ui",
  target: "_blank",
}]] satisfies NavigationMenuItem[][];

const groups = computed(() => [{
  id: "links",
  label: "Go to",
  items: items.flat(),
}, {
  id: "code",
  label: "Code",
  items: [{
    id: "source",
    label: "View page source",
    icon: "i-simple-icons-github",
    to: `https://github.com/anhtran2204/Athlyx/blob/main/app/pages${route.path === "/" ? "/index" : route.path}.vue`,
    target: "_blank",
  }],
}]);
</script>

<template>
  <NuxtDashboardGroup class="dark:bg-slate-950 light:bg-white">
    <NuxtDashboardSidebar
      collapsible
      resizable
      class="border-0"
      :ui="{ footer: 'border-t border-default' }"
    >
      <template #header="{ collapsed }">
        <Logo
          v-if="!collapsed"
          to="/dashboard"
          class="h-5 w-auto shrink-0"
        />
        <LazySidebarIcon
          v-else
          to="/dashboard"
          class="text-primary mx-auto"
        />
      </template>

      <template #default="{ collapsed }">
        <NuxtDashboardSearchButton :collapsed="collapsed" />

        <NuxtNavigationMenu
          :collapsed="collapsed"
          :items="items[0]"
          orientation="vertical"
          tooltip
          popover
        />

        <NuxtNavigationMenu
          :collapsed="collapsed"
          :items="items[1]"
          orientation="vertical"
          tooltip
          class="mt-auto"
        />
      </template>

      <template #footer="{ collapsed }">
        <NuxtButton
          :avatar="{
            src: 'https://github.com/anhtran2204.png',
            loading: 'lazy' as const,
          }"
          :label="collapsed ? undefined : 'Anh Tran'"
          color="neutral"
          variant="ghost"
          class="w-full"
          :block="collapsed"
        />
      </template>
    </NuxtDashboardSidebar>
    <NuxtDashboardSearch :groups="groups" />
    <slot />
  </NuxtDashboardGroup>
</template>
