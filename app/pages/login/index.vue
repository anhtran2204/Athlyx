<script setup lang="ts">
definePageMeta({
  layout: "authenticate",
});
</script>

<template>
  <div class="hero container h-200 my-auto bg-base-300 rounded-xl ring-1 ring-white/5 shadow-xl/20 shadow-white/15">
    <div class="hero-content container flex min-h-200 size-full">
      <button class="h-full place-items-start btn btn-link text-sky-400 -ml-2">
        <NuxtLink to="/">
          <Icon name="tabler:arrow-narrow-left" size="24" />
        </NuxtLink>
      </button>
      <div class="card flex-2/6 grid h-full w-screen grow place-items-center">
        <div class="card-body items-center text-center">
          <UserForm label="Login" />
        </div>
      </div>
    </div>
  </div>
</template>
