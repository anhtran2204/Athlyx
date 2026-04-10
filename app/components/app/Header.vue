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
    to: "/about",
    active: route.fullPath === "/about",
  },
]);
</script>

<template>
  <NuxtHeader
    class="border-0"
  >
    <template #left>
      <Logo to="/" class="h-6 w-auto -ml-4" />
    </template>

    <NuxtNavigationMenu
      highlight
      highlight-color="info"
      :items="items"
    />

    <template #body>
      <div class="flex gap-1">
        <NuxtNavigationMenu
          orientation="vertical"
          highlight
          highlight-color="info"
          :items="items"
        />
      </div>
    </template>

    <template #right>
      <NuxtColorModeButton class="cursor-pointer hover:bg-elevated/50 active:bg-elevated/50">
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
        class="cursor-pointer text-muted hover:text-highlighted hover:bg-elevated/50 active:bg-elevated/50"
      >
        Sign In
      </NuxtButton>
      <NuxtButton
        to="/sign-up"
        variant="ghost"
        color="info"
        class="cursor-pointer text-muted hover:text-info"
      >
        Get Started
      </NuxtButton>
    </template>
  </NuxtHeader>
</template>
