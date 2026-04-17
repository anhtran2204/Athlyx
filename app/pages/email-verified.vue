<script setup lang="ts">
definePageMeta({
  path: "/email-verified",
  layout: false,
  pageTransition: false,
  layoutTransition: false,
});

const layout = "user-auth";
const expiringToken = ref(false);

onBeforeMount(async () => {
  const token = new URLSearchParams(window.location.search).get("token") || new URLSearchParams(window.location.search).get("error");
  if (token === "TOKEN_EXPIRED" || !token) {
    expiringToken.value = true;
  }
});
</script>

<template>
  <NuxtLayout :name="layout">
    <ClientOnly>
      <div class="grow max-w-120 mx-auto my-auto py-2 sm:py-4 px-2 sm:px-4 rounded-2xl bg-default ring ring-accented flex flex-col gap-2">
        <!-- <div>
            <NuxtButton
              color="info"
              variant="ghost"
              icon="lucide:arrow-left"
              class="hover:cursor-pointer"
              @click="router.back"
            />
          </div> -->
        <LazyVerifiedEmailCard v-if="!expiringToken" />
        <LazyExpiredLinkCard v-else />
      </div>
    </ClientOnly>
  </NuxtLayout>
</template>
