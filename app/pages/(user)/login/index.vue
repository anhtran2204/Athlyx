<script setup lang="ts">
definePageMeta({
  path: "/login",
  layout: false,
  pageTransition: false,
  layoutTransition: false,
});

const layout = "user-auth";
</script>

<template>
  <div>
    <NuxtLayout :name="layout">
      <ClientOnly>
        <div class="grow max-w-120 mx-auto my-auto py-2 sm:py-4 px-2 sm:px-4 rounded-2xl bg-default ring ring-accented flex flex-col gap-2">
          <div>
            <NuxtButton
              to="/"
              color="info"
              variant="ghost"
              icon="lucide:arrow-left"
            />
          </div>
          <LoginForm />
        </div>
      </ClientOnly>
    </NuxtLayout>
  </div>
</template>
