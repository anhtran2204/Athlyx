<template>
  <div class="flex flex-col w-full rounded-2xl gap-4 p-4 sm:p-6">
    <div class="flex justify-between">
      <span class="text-xl text-pretty font-bold">Active Workout</span>
      <div class="flex items-center rounded-full px-3 py-1 gap-2 text-sm font-semibold bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400">
        <div class="size-2 rounded-full bg-green-600 animate-pulse" />
        <span>In Progress</span>
      </div>
    </div>
    <div class="flex flex-col rounded-xl p-6 mb-4 dashboard dark:bg-workout-card light:bg-workout-card">
      <div class="flex justify-between mb-4">
        <div class="flex flex-col items-start">
          <span class="text-xl font-bold mb-1">Chest & Triceps</span>
          <span class="text-sm text-muted">Started 25 minutes ago</span>
        </div>
        <div class="flex flex-col items-end">
          <span class="text-2xl text-info font-bold">2/5</span>
          <span class="text-sm text-muted">exercises</span>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-2 mb-4 text-white">
        <div class="flex flex-col justify-center items-center p-2 bg-slate-800 rounded-xl">
          <span class="text-lg font-bold">25:32</span>
          <span class="text-sm text-muted">Time</span>
        </div>
        <div class="flex flex-col justify-center items-center p-2 bg-slate-800 rounded-xl">
          <span class="text-lg font-bold text-orange-600">185</span>
          <span class="text-sm text-muted">Calories</span>
        </div>
        <div class="flex flex-col justify-center items-center p-2 bg-slate-800 rounded-xl">
          <span class="text-lg font-bold text-purple-600">3.2K</span>
          <span class="text-sm text-muted">Volume</span>
        </div>
        <div class="flex flex-col justify-center items-center p-2 bg-slate-800 rounded-lg">
          <span class="text-lg font-bold">8</span>
          <span class="text-sm text-muted">Sets</span>
        </div>
      </div>
      <div class="flex gap-2">
        <div class="flex-1 bg-linear-to-r from-cyan-600 to-blue-600 rounded-xl text-center text-white px-5 py-2.5 hover:cursor-pointer">
          <span class="text-md font-semibold">Resume Workout</span>
        </div>
        <div class="bg-white hover:bg-slate-300 dark:bg-elevated hover:dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-center px-5 py-2.5  hover:cursor-pointer">
          <span class="text-md font-semibold">Finish</span>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-baseline gap-2">
      <span class="text-sm text-muted">or</span>
      <span class="text-info font-medium tracking-tight text-pretty hover:cursor-pointer">Start New Workout</span>
    </div>
  </div>
</template>
