<template>
  <div class="relative lg:col-span-4 min-h-100 flex flex-col flex-1">
    <div class="relative flex flex-col flex-1 bg-elevated/50 rounded-2xl min-w-fit">
      <CarouselCard
        :titles="[
          'Weekly Activity',
          'Weight Progress',
          'Training Volume',
          'Strength Progress',
          'Workout Intensity',
          'Personal Records',
          'Workout Frequency',
        ]"
      />
    </div>
  </div>
</template>
