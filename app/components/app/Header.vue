<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
    active: route.fullPath === "/",
  },
  {
    label: "Features",
    to: "/features",
    active: route.fullPath === "/features",
  },
  {
    label: "About",
    to: "/info",
    active: route.fullPath === "/info",
  },
]);
</script>

<template>
  <NuxtHeader>
    <template #left>
      <Logo class="h-6 w-auto -ml-4" />
    </template>

    <template #default>
      <div class="flex gap-1">
        <NuxtNavigationMenu
          highlight
          highlight-color="info"
          :items="items"
        />
      </div>
    </template>

    <template #right>
      <NuxtColorModeButton class="cursor-pointer">
        <template #fallback>
          <NuxtButton
            loading
            variant="ghost"
            color="neutral"
          />
        </template>
      </NuxtColorModeButton>
      <NuxtButton
        to="/login"
        variant="ghost"
        color="neutral"
        class="cursor-pointer text-muted hover:text-highlighted"
      >
        Sign In
      </NuxtButton>
      <NuxtButton
        to="/signup"
        variant="ghost"
        color="info"
        class="cursor-pointer text-muted hover:text-info"
      >
        Get Started
      </NuxtButton>
    </template>
  </NuxtHeader>
</template>
