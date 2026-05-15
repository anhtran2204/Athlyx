<script setup lang="ts">
</script>

<template>
  <NuxtDashboardPanel resizable class="dark:bg-slate-900 light:bg-gray-200">
    <template #header>
      <NuxtDashboardNavbar
        title="Nutrition"
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
      <NuxtDashboardToolbar />
    </template>
    <template #body>
      <NuxtPage />
    </template>
  </NuxtDashboardPanel>
</template>
