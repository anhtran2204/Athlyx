<script setup lang="ts">
import { LazyAuthForm } from "#components";
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();
const overlay = useOverlay();
const modal = overlay.create(LazyAuthForm);

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

async function openModal(type: string) {
  await modal.open({ authType: type });
}
</script>

<template>
  <NuxtHeader class="border-0">
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
        variant="ghost"
        color="neutral"
        class="cursor-pointer text-muted hover:text-highlighted hover:bg-elevated/50 active:bg-elevated/50"
        @click="openModal('login')"
      >
        Sign In
      </NuxtButton>
      <NuxtButton
        variant="ghost"
        color="info"
        class="cursor-pointer text-muted hover:text-info"
        @click="openModal('sign_up')"
      >
        Get Started
      </NuxtButton>
    </template>
  </NuxtHeader>
</template>
