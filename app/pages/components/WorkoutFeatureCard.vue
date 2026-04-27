<template>
  <div class="w-full h-fit dark:bg-workout-card light:bg-workout-card rounded-3xl grid grid-cols-2 gap-4 p-12">
    <div class="col-span-2 rounded-xl shadow-lg/20 dark:bg-default light:bg-white flex flex-col space-y-2 p-6 min-w-fit">
      <div class="flex-1 flex justify-between items-center">
        <p class="dark:text-gray-300 light:text-slate-600">
          Today's Workout
        </p>
        <Icon
          name="lucide:activity"
          size="20"
          class="text-cyan-600"
        />
      </div>
      <div>
        <h2 class="text-3xl font-bold dark:text-info light:text-black">
          Leg Day
        </h2>
      </div>
      <div>
        <p class="dark:text-gray-300 light:text-slate-600">
          5 exercises &bull; 45 mins
        </p>
      </div>
    </div>
    <div class="rounded-xl shadow-lg/20 dark:bg-default light:bg-white flex flex-col px-6 py-4 min-w-fit">
      <h2 class="text-xl font-bold dark:text-info light:text-black">
        247
      </h2>
      <p class="dark:text-gray-300 light:text-slate-600">
        Total Sets
      </p>
    </div>
    <div class="rounded-xl shadow-lg/20 dark:bg-default light:bg-white flex flex-col px-6 py-4 min-w-fit">
      <h2 class="text-xl font-bold dark:text-info light:text-black">
        12.5K
      </h2>
      <p class="dark:text-gray-300 light:text-slate-600">
        Lbs Lifted
      </p>
    </div>
  </div>
</template>
