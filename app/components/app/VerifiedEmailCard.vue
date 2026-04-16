<template>
  <div class="min-w-full flex flex-col items-center justify-center gap-4">
    <NuxtPageCard
      icon="lucide:circle-check"
      title="Email Verified"
      description="Your email address was successfully verified"
      class="w-full max-w-md"
      :ui="{
        root: 'bg-transparent ring-0',
        wrapper: 'justify-center items-center text-center gap-4',
        title: 'text-xl',
        leadingIcon: 'size-15 flex justify-center items-center',
      }"
    >
      <NuxtButton
        to="/login"
        label="Back to login"
        leading-icon="lucide:arrow-left"
        color="info"
        variant="outline"
        size="lg"
        class="w-fit mx-auto mt-4"
        loading-auto
      />
    </NuxtPageCard>
  </div>
</template>
