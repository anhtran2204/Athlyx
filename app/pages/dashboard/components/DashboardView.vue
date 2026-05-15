<script setup lang="ts">
const authStore = useAuthStore();
console.log(authStore.user);
</script>

<template>
  <div class="flex flex-col h-full space-y-8">
    <div class="dashboard-header flex flex-col gap-2">
      <div class="text-3xl text-pretty font-bold">
        Welcome back, {{ authStore.user?.name || authStore.user?.email }}
      </div>
      <div class="text-muted text-pretty">
        Here's your fitness overview for today
      </div>
    </div>
    <div class="dashboard-summary flex flex-col gap-2">
      <div class="flex flex-col gap-3 bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl p-6 text-white shadow-lg">
        <div class="text-lg text-pretty font-semibold opacity-90">
          Today's Summary
        </div>
        <DashboardSummaryCard />
      </div>
    </div>
    <NuxtPageGrid
      :ui="{
        base: 'lg:grid-cols-6 grid-flow-row h-full',
      }"
    >
      <DashboardActiveWorkoutCard class="dashboard-workout lg:col-span-4 bg-elevated/50" />
      <DashboardMacroCard class="dashboard-nutrition lg:col-span-2 bg-elevated/50" />
      <DashboardWeeklyActivityCard class="dashboard-activity" />
      <DashboardWeeklyGoalsCard class="dashboard-goals lg:col-span-2 bg-elevated/50" />
      <DashboardRecentActivityCard class="dashboard-recent lg:col-span-6 bg-elevated/50" />
      <DashboardQuickActions class="dashboard-quick lg:col-span-6" />
    </NuxtPageGrid>
  </div>
</template>

<style lang="css" scoped>
.dashboard-header {
  opacity: 0;
  animation: fadeUp 2s ease 0.3s forwards;
}

.dashboard-summary {
  opacity: 0;
  animation: fadeUp 2s ease 0.6s forwards;
}

.dashboard-workout {
  opacity: 0;
  animation: fadeUp 2s ease 0.9s forwards;
}

.dashboard-nutrition {
  opacity: 0;
  animation: fadeUp 2s ease 1.2s forwards;
}

.dashboard-activity {
  opacity: 0;
  animation: fadeUp 2s ease 1.5s forwards;
}

.dashboard-goals {
  opacity: 0;
  animation: fadeUp 2s ease 1.8s forwards;
}

.dashboard-recent {
  opacity: 0;
  animation: fadeUp 2s ease 2.1s forwards;
}

.dashboard-quick {
  opacity: 0;
  animation: fadeUp 2s ease 2.4s forwards;
}
</style>
