<script setup lang="ts">
const { data: page } = await useAsyncData("about", () => {
  return queryCollection("about").path("/about").first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

const { global } = useAppConfig();

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
});
</script>

<template>
  <div v-if="page">
    <LazyNuxtPageSection
      headline="About Us"
      :ui="{
        container: '!pb-15 justify-center items-center',
        headline: 'bg-cyan-200 text-sky-900',
      }"
    />
    <LazyNuxtPageSection
      :title="page.title"
      :description="page.description"
      orientation="vertical"
      :ui="{
        container: 'lg:flex sm:flex-row justify-between items-start !pt-0 !pb-0',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start',
      }"
    >
      <LazyNuxtColorModeAvatar
        class="sm:rotate-4 size-55 rounded-lg ring ring-default ring-offset-3 ring-offset-bg"
        :light="global.picture?.light!"
        :dark="global.picture?.dark!"
        :alt="global.picture?.alt!"
        :ui="{
          root: 'mr-6',
        }"
      />
    </LazyNuxtPageSection>
    <NuxtPageSection
      :ui="{
        container: '!pt-0 !pb-0',
      }"
    >
      <LazyContentRenderer v-if="page" :value="page" />
    </NuxtPageSection>
  </div>
</template>
