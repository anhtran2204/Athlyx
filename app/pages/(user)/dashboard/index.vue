<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
  pageTransition: false,
  layoutTransition: false,
});
</script>

<template>
  <NuxtDashboardPanel resizable class="dark:bg-dashboard light:bg-dashboard">
    <template #header>
      <NuxtDashboardNavbar
        title="Home"
        :ui="{
          title: 'text-xl',
        }"
        class="border-dashed border-accented"
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
    </template>
    <template #body />
  </NuxtDashboardPanel>
</template>
