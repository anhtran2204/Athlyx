<script setup lang="ts">
import { getLocalTimeZone, today } from "@internationalized/date";

import type { Period, Range } from "~/types";

const range = shallowRef<Range>({
  start: today(getLocalTimeZone()).subtract({ days: 14 }),
  end: today(getLocalTimeZone()),
});
const period = ref<Period>("daily");
</script>

<template>
  <NuxtDashboardPanel resizable class="dark:bg-slate-950 light:bg-gray-200">
    <template #header>
      <NuxtDashboardNavbar
        title="Home"
        :ui="{
          title: 'text-xl',
        }"
        :toggle="{
          icon: 'lucide:panel-right-close',
        }"
        class="dark:bg-slate-900 light:bg-white"
      >
        <template #leading>
          <LazyNuxtDashboardSidebarCollapse class="hover:cursor-pointer" />
        </template>
        <template #right>
          <Notifications />
          <ThemeButton />
          <ProfileButton />
        </template>
      </NuxtDashboardNavbar>
      <NuxtDashboardToolbar class="dark:bg-slate-900 light:bg-white">
        <template #left>
          <DatePicker v-model="range" class="-ms-1" />
          <PeriodSelect v-model="period" :range="range" />
        </template>
      </NuxtDashboardToolbar>
    </template>
    <template #body>
      <div class="grow min-w-full container">
        <DashboardView />
      </div>
    </template>
  </NuxtDashboardPanel>
</template>
