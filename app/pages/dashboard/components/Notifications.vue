<template>
  <NuxtPopover :content="{ align: 'end' }">
    <NuxtTooltip arrow text="Notifications">
      <NuxtButton
        variant="ghost"
        color="neutral"
        square
        class="hover:cursor-pointer"
      >
        <NuxtChip color="info" inset>
          <Icon name="lucide:bell" size="20" />
        </NuxtChip>
      </NuxtButton>
    </NuxtToolTip>
    <template #content>
      <h1 class="size-48 m-4 inline-flex">
        Notifications
      </h1>
    </template>
  </NuxtPopover>
</template>
