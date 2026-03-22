<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>

<template>
  <div class="hero container h-200 my-auto bg-base-300 rounded-xl ring-1 ring-white/5 shadow-xl/20 shadow-white/15 ">
    <div class="hero-content container flex flex-col justify-center items-center min-h-200 size-full">
      <NuxtLink class="self-start btn btn-link text-sky-400 -ml-2" to="/">
        <Icon name="tabler:arrow-narrow-left" size="24" />
      </NuxtLink>
      <div class="card flex-2/6 grid h-full w-screen grow pb-10! py-20 drop-shadow-xl/25">
        <div class="card-body items-center text-center">
          <UserForm :label="props.label" />
        </div>
      </div>
    </div>
  </div>
</template>
