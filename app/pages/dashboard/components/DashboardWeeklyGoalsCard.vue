<template>
  <div class="flex flex-col gap-4 p-4 sm:p-6 rounded-2xl">
    <div class="text-xl font-bold text-pretty">
      <span>Weekly Goals</span>
    </div>
    <div class="p-4 bg-orange-900/30 border border-orange-600 rounded-xl flex flex-col gap-2">
      <div class="flex items-center gap-3">
        <div class="p-2 bg-orange-600 rounded-xl flex justify-center items-center">
          <Icon name="lucide:flame" size="24" />
        </div>
        <div class="flex flex-col text-pretty">
          <span class="text-2xl font-bold">24</span>
          <span class="text-sm text-muted">Day Streak</span>
        </div>
      </div>
      <div class="text-xs text-muted">
        <span>Keep it up! &#128293;</span>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex justify-between">
        <span>Workouts</span>
        <span class="font-semibold">4/5</span>
      </div>
      <div class="w-full h-3 rounded-full bg-slate-700">
        <div class="w-4/5 h-3 bg-cyan-700 rounded-full" />
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex justify-between">
        <span>Calories</span>
        <span class="font-semibold">6/7</span>
      </div>
      <div class="w-full h-3 rounded-full bg-slate-700">
        <div class="w-6/7 h-3 bg-orange-700 rounded-full" />
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex justify-between">
        <span>Water</span>
        <span class="font-semibold">7/7</span>
      </div>
      <div class="w-full h-3 rounded-full bg-slate-700">
        <div class="w-full h-3 bg-blue-700 rounded-full" />
      </div>
    </div>
  </div>
</template>
