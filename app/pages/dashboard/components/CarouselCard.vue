<script setup lang="ts">
const props = defineProps<{
  titles: string[];
}>();

const slots = useSlots();
const slotNodes = slots.default?.() ?? [];

const currentIndex = ref(0);

function prev() {
  currentIndex.value = (currentIndex.value - 1 + props.titles.length) % props.titles.length;
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.titles.length;
}

function goToCard(index: number) {
  currentIndex.value = index;
}
</script>

<template>
  <div class="min-w-fit w-full h-full flex flex-col items-center">
    <header class="min-w-fit w-full">
      <slot name="header">
        <div class="flex min-w-fit p-4 sm:p-6 justify-between gap-8">
          <div class="text-xl text-pretty text-highlighted font-bold">
            {{ titles[currentIndex] }}
          </div>
          <div class="flex gap-4">
            <NuxtButton
              color="neutral"
              variant="soft"
              class="rounded-xl hover:cursor-pointer hover:bg-slate-300 hover:dark:bg-accented/75 border border-slate-300 dark:border-slate-600"
              @click="prev"
            >
              <Icon name="lucide:chevron-left" size="20" />
            </NuxtButton>
            <div class="flex items-center gap-1">
              <button
                v-for="(_, index) in titles"
                :key="index"
                class="size-2 rounded-full transition-all"
                :class="{
                  'bg-cyan-600 w-6': index === currentIndex,
                  'bg-slate-300 dark:bg-slate-600': index !== currentIndex,
                }"
                aria-label="Go to chart {{index + 1}}"
                @click="goToCard(index)"
              />
            </div>
            <NuxtButton
              color="neutral"
              variant="soft"
              class="rounded-xl hover:cursor-pointer hover:bg-slate-300 hover:dark:bg-accented/75 border border-slate-300 dark:border-slate-600"
              @click="next"
            >
              <Icon name="lucide:chevron-right" size="20" />
            </NuxtButton>
          </div>
        </div>
      </slot>
    </header>

    <main class="min-w-full px-8 sm:px-16 flex-1 flex justify-center items-center">
      <component
        :is="slotNodes[currentIndex]"
        v-if="slotNodes[currentIndex] && slotNodes.length > 0"
        class="h-full"
      />
      <div v-else class="flex flex-col gap-4">
        <div class="flex justify-center">
          <Icon name="tabler:info-circle" size="24" />
        </div>
        <span>No Data</span>
      </div>
    </main>

    <footer class="p-4 sm:px-6">
      <slot name="footer" />
    </footer>
  </div>
</template>
