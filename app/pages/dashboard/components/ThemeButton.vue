<template>
  <NuxtTooltip
    arrow
    text="Theme"
  >
    <NuxtColorModeButton class="cursor-pointer hover:bg-elevated/50 active:bg-elevated/50">
      <template #fallback>
        <NuxtButton
          loading
          variant="ghost"
          color="neutral"
        />
      </template>
    </NuxtColorModeButton>
  </NuxtTooltip>
</template>
