<template>
  <div class="flex flex-col p-4 sm:p-6 rounded-2xl gap-4">
    <div class="flex justify-between">
      <span class="text-xl font-bold text-pretty">Recent Activity</span>
      <span class="flex items-center gap-1 text-sm text-cyan-600 hover:text-cyan-700 font-semibold text-pretty hover:cursor-pointer">
        View All
        <Icon name="lucide:chevron-right" size="16" />
      </span>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="flex justify-between items-center hover:cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/75 rounded-xl w-full p-4">
        <div class="flex items-center gap-4 w-full">
          <div class="flex items-center bg-sky-600 p-2.5 rounded-xl">
            <Icon name="lucide:dumbbell" size="20" />
          </div>
          <div class="flex flex-col text-pretty">
            <span class="text-md font-bold">Chest & Triceps</span>
            <span class="text-sm text-muted">2 hours ago</span>
          </div>
        </div>
        <div class="text-slate-400">
          <Icon name="lucide:chevron-right" size="20" />
        </div>
      </div>
      <div class="flex justify-between items-center hover:cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/75 rounded-xl w-full p-4">
        <div class="flex items-center gap-4 w-full">
          <div class="flex items-center bg-purple-600 p-2.5 rounded-xl">
            <Icon name="lucide:utensils" size="20" />
          </div>
          <div class="flex flex-col text-pretty">
            <span class="text-md font-bold">Lunch Logged</span>
            <span class="text-sm text-muted">3 hours ago</span>
          </div>
        </div>
        <div class="text-slate-400">
          <Icon name="lucide:chevron-right" size="20" />
        </div>
      </div>
      <div class="flex justify-between items-center hover:cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/75 rounded-xl w-full p-4">
        <div class="flex items-center gap-4 w-full">
          <div class="flex items-center bg-green-600 p-2.5 rounded-xl">
            <Icon name="lucide:scale" size="20" />
          </div>
          <div class="flex flex-col text-pretty">
            <span class="text-md font-bold">Weight: 177 lbs</span>
            <span class="text-sm text-muted">7hours ago</span>
          </div>
        </div>
        <div class="text-slate-400">
          <Icon name="lucide:chevron-right" size="20" />
        </div>
      </div>
      <div class="flex justify-between items-center hover:cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/75 rounded-xl w-full p-4">
        <div class="flex items-center gap-4 w-full">
          <div class="flex items-center bg-purple-600 p-2.5 rounded-xl">
            <Icon name="lucide:utensils" size="20" />
          </div>
          <div class="flex flex-col text-pretty">
            <span class="text-md font-bold">Lunch Logged</span>
            <span class="text-sm text-muted">9 hours ago</span>
          </div>
        </div>
        <div class="text-slate-400">
          <Icon name="lucide:chevron-right" size="20" />
        </div>
      </div>
    </div>
  </div>
</template>
