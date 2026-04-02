<script setup lang="ts">
import { withoutTrailingSlash } from "ufo";

const route = useRoute();
const { data: page, status: pageStatus } = await useAsyncData("about", () => {
  return queryCollection("about").path(withoutTrailingSlash(route.path)).first();
}, {
  lazy: true,
});

const { global } = useAppConfig();

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
});
</script>

<template>
  <NuxtLoadingIndicator v-if="pageStatus === 'pending'" />
  <div v-else-if="page">
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
      <!-- <NuxtColorModeAvatar
        class="sm:rotate-4 size-55 rounded-lg ring ring-default ring-offset-3 ring-offset-bg"
        :light="global.picture?.light!"
        :dark="global.picture?.dark!"
        :alt="global.picture?.alt!"
        :ui="{
          root: 'mr-6',
        }"
      /> -->
      <NuxtImg
        src="/profile.webp"
        :alt="global.picture?.alt!"
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
</template>
