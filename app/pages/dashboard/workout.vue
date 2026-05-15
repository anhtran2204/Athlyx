<script setup lang="ts">
</script>

<template>
  <NuxtDashboardPanel resizable class="dark:bg-slate-950 light:bg-white">
    <template #header>
      <NuxtDashboardNavbar
        title="Workout"
        :ui="{
          title: 'text-xl',
        }"
        class="dark:bg-slate-900 light:bg-gray-300"
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
    <template #body>
      <NuxtPage />
    </template>
  </NuxtDashboardPanel>
</template>
