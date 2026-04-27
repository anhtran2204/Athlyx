<template>
  <div class="w-full dark:bg-nutrition-card light:bg-nutrition-card rounded-3xl grid grid-cols-3 gap-4 p-12">
    <div class="col-span-3 rounded-xl shadow-lg/20 dark:bg-default light:bg-white flex flex-col space-y-2 p-6">
      <div class="flex-1 flex justify-between items-center">
        <p class="dark:text-gray-300 light:text-slate-600">
          Daily Nutrition
        </p>
        <Icon
          name="lucide:apple"
          size="20"
          class="text-purple-600"
        />
      </div>
      <div>
        <h2 class="text-3xl font-bold dark:text-info light:text-black">
          2,247
        </h2>
      </div>
      <div>
        <p class="dark:text-gray-300 light:text-slate-600">
          of 2,500 calories
        </p>
      </div>
      <div class="w-full h-3 mt-2 dark:bg-gray-500 light:bg-slate-200 rounded-full">
        <div class="w-[90%] h-3 rounded-full bg-linear-to-r from-purple-500 to-blue-500" />
      </div>
    </div>
    <div class="rounded-xl shadow-lg/20 dark:bg-default light:bg-white flex flex-col px-6 py-4">
      <h2 class="text-xl font-bold dark:text-info light:text-black flex justify-center">
        180g
      </h2>
      <p class="dark:text-gray-300 light:text-slate-600 flex justify-center">
        Protein
      </p>
    </div>
    <div class="rounded-xl shadow-lg/20 dark:bg-default light:bg-white flex flex-col px-6 py-4">
      <h2 class="text-xl font-bold dark:text-info light:text-black flex justify-center">
        220g
      </h2>
      <p class="dark:text-gray-300 light:text-slate-600 flex justify-center">
        Carbs
      </p>
    </div>
    <div class="rounded-xl shadow-lg/20 dark:bg-default light:bg-white flex flex-col px-6 py-4">
      <h2 class="text-xl font-bold dark:text-info light:text-black flex justify-center">
        65g
      </h2>
      <p class="dark:text-gray-300 light:text-slate-600 flex justify-center">
        Fats
      </p>
    </div>
  </div>
</template>
