<template>
  <NuxtPageHero>
    <div>
      <div class="mb-7 font-semibold flex items-center gap-1.5 justify-center">
        <div class="inline-flex items-center gap-2 bg-cyan-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium">
          <Icon name="lucide:zap" />
          Track. Train. Transform.
        </div>
      </div>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted text-center">
        A smarter way to train and eat
      </h2>
      <div class="text-base sm:text-lg text-muted text-center text-balance mt-6">
        Elevate your fitness journey with intelligent workout tracking, personalized nutrition planning, and performance analytics—all in one platform built to push you further every day.
      </div>
    </div>
    <div>
      <div class="flex flex-wrap gap-x-6 gap-y-3 justify-center">
        <NuxtButton
          to="/sign_up"
          size="xl"
          variant="solid"
          icon="i-lucide-square-play"
          color="info"
          class="cursor-pointer"
        >
          Get Started
        </NuxtButton>
        <NuxtButton
          to="/features"
          size="xl"
          trailing-icon="i-lucide-arrow-right"
          variant="outline"
          color="neutral"
          class="cursor-pointer"
        >
          Learn More
        </NuxtButton>
      </div>
    </div>
  </NuxtPageHero>
</template>
