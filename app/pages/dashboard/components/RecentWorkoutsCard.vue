<template>
  <NuxtPageCard
    :ui="{
      header: 'w-full',
    }"
  >
    <template #header>
      <div class="flex w-full justify-between items-center">
        <span>
          <div class="text-xl text-pretty text-highlighted font-semibold">
            Recent Workouts
          </div>
        </span>
        <NuxtLink to="/dashboard/workout" class="text-pretty text-center text-sky-400 flex gap-2 justify-center items-center">
          View All
          <Icon name="tabler:arrow-right" />
        </NuxtLink>
      </div>
    </template>
    <slot />
  </NuxtPageCard>
</template>
