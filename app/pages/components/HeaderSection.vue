<template>
  <NuxtPageHero>
    <div>
      <div class="hero-headline mb-7 font-semibold flex items-center gap-1.5 justify-center">
        <div class="inline-flex items-center gap-2 bg-cyan-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium">
          <Icon name="lucide:zap" />
          Track. Train. Transform.
        </div>
      </div>
      <h1 class="hero-title text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted text-center">
        A smarter way to train and eat
      </h1>
      <div class="hero-description text-base sm:text-lg text-muted text-center text-balance mt-6">
        Elevate your fitness journey with intelligent workout tracking, personalized nutrition planning, and performance analytics—all in one platform built to push you further every day.
      </div>
    </div>
    <div class="hero-actions">
      <div class="flex flex-wrap gap-x-6 gap-y-3 justify-center">
        <NuxtButton
          to="/login"
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

<style lang="css" scoped>
.hero-headline {
  opacity: 0;
  animation: fadeUp 2s ease 0.3s forwards;
}

.hero-title {
  opacity: 0;
  animation: fadeUp 2s ease 0.6s forwards;
}

.hero-description {
  opacity: 0;
  animation: fadeUp 2s ease 0.9s forwards;
}

.hero-actions {
  opacity: 0;
  animation: fadeUp 2s ease 1.2s forwards;
}
</style>
