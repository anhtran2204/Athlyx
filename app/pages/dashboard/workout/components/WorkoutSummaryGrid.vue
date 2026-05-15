<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
    <div class="flex flex-col p-4 sm:p-6 gap-3 bg-orange-300/25 dark:bg-orange-900/30 rounded-2xl border border-slate-300 dark:border-slate-700">
      <div class="flex">
        <div class="flex items-center p-2 bg-orange-600 rounded-lg text-white">
          <Icon name="lucide:flame" size="24" />
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <div>Avg Calories / Workout</div>
        <div>
          <span class="text-3xl font-bold text-pretty">485</span> kcal
        </div>
        <div class="text-sm text-muted">
          <span class="text-green-600">+12%</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col p-4 sm:p-6 gap-3 bg-purple-300/25 dark:bg-purple-900/30 rounded-2xl border border-slate-300 dark:border-slate-700">
      <div class="flex">
        <div class="flex items-center p-2 bg-purple-600 rounded-lg text-white">
          <Icon name="lucide:chart-column" size="24" />
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <div>Avg Volume / Week</div>
        <div>
          <span class="text-3xl font-bold text-pretty">84.2K</span> lbs
        </div>
        <div class="text-sm text-muted">
          <span class="text-green-600">+8%</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col p-4 sm:p-6 gap-3 bg-blue-300/25 dark:bg-blue-900/30 rounded-2xl border border-slate-300 dark:border-slate-700">
      <div class="flex">
        <div class="flex items-center p-2 bg-blue-600 rounded-lg text-white">
          <Icon name="lucide:clock" size="24" />
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <div>Avg Duration</div>
        <div>
          <span class="text-3xl font-bold text-pretty">46</span> min
        </div>
        <div class="text-sm text-muted">
          <span class="text-green-600">+5 min</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col p-4 sm:p-6 gap-3 bg-green-300/25 dark:bg-green-900/30 rounded-2xl border  border-slate-300 dark:border-slate-700">
      <div class="flex">
        <div class="flex items-center p-2 bg-green-600 rounded-lg text-white">
          <Icon name="lucide:target" size="24" />
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <div>Workouts This Month</div>
        <div>
          <span class="text-3xl font-bold text-pretty">18</span> sessions
        </div>
        <div class="text-sm text-muted">
          <span class="text-green-600">+3 vs last</span>
        </div>
      </div>
    </div>
  </div>
</template>
