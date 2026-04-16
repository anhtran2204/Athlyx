<script setup lang="ts">
const { data: page, status: pageStatus, refresh: pageRefresh } = await useAsyncData("about", () => {
  return queryCollection("about").path("/about").first();
});

onMounted(() => {
  pageRefresh();
});

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title || "About",
  description: page.value?.seo?.description || page.value?.description,
});

effect(() => {
  console.log(pageStatus.value);
  if (pageStatus.value !== "pending") {
    pageRefresh();
  }
});
</script>

<template>
  <div v-if="page">
    <NuxtPageSection
      headline="About Us"
      :ui="{
        container: '!pb-15 justify-center items-center',
        headline: 'bg-cyan-200 text-sky-900',
      }"
    />
    <NuxtPageSection
      :title="page.title"
      :description="page.description"
      orientation="vertical"
      :ui="{
        container: 'lg:flex sm:flex-row justify-between items-center !pt-0 !pb-0',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start',
      }"
    >
      <LazyNuxtImg
        provider="github"
        src="anhtran2204"
        alt="My profile picture"
        :preload="{ fetchPriority: 'high' }"
        width="220"
        height="293"
        format="webp"
        class="sm:rotate-4 rounded-lg ring ring-default ring-offset-3 ring-offset-bg mr-6"
      />
    </NuxtPageSection>
    <NuxtPageSection
      :ui="{
        container: '!pt-0 !pb-0',
      }"
    >
      <LazyContentRenderer v-if="page" :value="page" />
    </NuxtPageSection>
  </div>
  <span v-else class="flex py-8 sm:py-16 justify-center items-center">
    <div class="loading loading-md" />
  </span>
</template>
