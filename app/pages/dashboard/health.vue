<script setup lang="ts">
import { LazyFileUploadModal } from "#components";

const data = ref(false);

const overlay = useOverlay();
const modal = overlay.create(LazyFileUploadModal);

async function openModal() {
  await modal.open();
}
</script>

<template>
  <NuxtDashboardPanel resizable class="dark:bg-dashboard light:bg-dashboard">
    <template #header>
      <NuxtDashboardNavbar
        title="Health"
        :ui="{
          title: 'text-xl',
        }"
      >
        <template #leading>
          <LazyNuxtDashboardSidebarCollapse />
        </template>
        <template #right>
          <Notifications />
          <ThemeButton />
          <ProfileButton />
        </template>
      </NuxtDashboardNavbar>
      <NuxtDashboardToolbar>
        <template #right>
          <NuxtButton
            color="neutral"
            variant="ghost"
            icon="tabler:upload"
            label="Upload"
            class="text-muted hover:text-highlighted hover:cursor-pointer"
            @click="openModal"
          />
        </template>
      </NuxtDashboardToolbar>
    </template>
    <template #body>
      <NuxtPage v-if="data" />
      <div v-else class="flex-1 flex justify-center items-center">
        <NuxtEmpty
          icon="lucide:file"
          title="No data found"
          description="Once you upload your health data, you'll start seeing insights about your well being"
          variant="naked"
          :actions="[{
            color: 'neutral',
            variant: 'ghost',
            icon: 'tabler:upload',
            label: 'Upload',
            class: 'text-muted hover:text-highlighted hover:cursor-pointer',
            onClick: openModal,
          }]"
          :ui="{
            header: '',
            actions: '',
          }"
        />
      </div>
    </template>
  </NuxtDashboardPanel>
</template>
