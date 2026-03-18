<script setup lang="ts">

</script>

<template>
  <div class="grow bg-main h-full py-24 sm:py-32">
    <div class="mx-auto my-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-10">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-lg font-semibold text-sky-400">
          Train. Track. Transform.
        </h2>
        <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
          A smarter way to train and eat
        </p>
        <p class="mt-6 text-lg/8 text-gray-300">
          Elevate your fitness journey with intelligent workout tracking, personalized nutrition planning,
          and performance analytics—all in one platform built to push you further <em><strong>every day</strong></em>.
        </p>
      </div>
      <div class="mx-auto max-w-2xl lg:text-center flex justify-center items-center gap-4">
        <button class="btn btn-info rounded-full">
          <NuxtLink to="/signup">
            Get Started
          </NuxtLink>
        </button>
        <button class="btn btn-link">
          <NuxtLink to="/" class="text-sm/6 font-semibold text-white flex place-items-center gap-1">
            Learn more <Icon name="tabler:arrow-narrow-right" size="24" />
          </NuxtLink>
        </button>
      </div>
    </div>
  </div>
</template>
