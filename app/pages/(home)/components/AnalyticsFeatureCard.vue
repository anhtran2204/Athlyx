<template>
  <div class="w-full h-fit dark:bg-analytics-card light:bg-analytics-card rounded-3xl grid grid-cols-2 gap-4 p-12">
    <div class="col-span-2 rounded-xl shadow-lg/20 dark:bg-default light:bg-white flex flex-col space-y-2 p-6">
      <div class="flex-1 flex justify-between items-center">
        <p class="dark:text-gray-300 light:text-slate-600">
          Progress Overview
        </p>
        <Icon
          name="lucide:chart-no-axes-combined"
          size="20"
          class="text-blue-600"
        />
      </div>
      <div>
        <div class="flex justify-between">
          <p class="text-sm dark:text-gray-300 light:text-slate-600">
            Strength
          </p>
          <p class="dark:text-success light:text-green-600 font-semibold">
            +22%
          </p>
        </div>
        <div class="w-full h-3 mt-2 dark:bg-gray-500 light:bg-slate-200 rounded-full">
          <div class="w-[75%] h-3 rounded-full bg-linear-to-r from-blue-500 to-indigo-600" />
        </div>
      </div>
      <div>
        <div class="flex justify-between">
          <p class="text-sm dark:text-gray-300 light:text-slate-600">
            Endurance
          </p>
          <p class="dark:text-success light:text-green-600 font-semibold">
            +15%
          </p>
        </div>
        <div class="w-full h-3 mt-2 dark:bg-gray-500 light:bg-slate-200 rounded-full">
          <div class="w-[60%] h-3 rounded-full bg-linear-to-r from-blue-500 to-indigo-600" />
        </div>
      </div>
      <div>
        <div class="flex justify-between">
          <p class="text-sm dark:text-gray-300 light:text-slate-600">
            Consistency
          </p>
          <p class="dark:text-success light:text-green-600 font-semibold">
            +35%
          </p>
        </div>
        <div class="w-full h-3 mt-2 dark:bg-gray-500 light:bg-slate-200 rounded-full">
          <div class="w-[90%] h-3 rounded-full bg-linear-to-r from-blue-500 to-indigo-600" />
        </div>
      </div>
    </div>
  </div>
</template>
