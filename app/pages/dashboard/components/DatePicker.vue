<script setup lang="ts">
import { DateFormatter, getLocalTimeZone, today } from "@internationalized/date";

import type { Range } from "~/types";

const df = new DateFormatter("en-US", { dateStyle: "medium" });

// Directly using the CalendarDate range from the parent
const selected = defineModel<Range>({ required: true });

const ranges = [
  { label: "Last 7 days", days: 7 },
  { label: "Last 14 days", days: 14 },
  { label: "Last 30 days", days: 30 },
  { label: "Last 3 months", months: 3 },
  { label: "Last 6 months", months: 6 },
  { label: "Last year", years: 1 },
];

function isRangeSelected(range: { days?: number; months?: number; years?: number }) {
  if (!selected.value.start || !selected.value.end)
    return false;

  const currentDate = today(getLocalTimeZone());
  let startDate = currentDate.copy();

  if (range.days)
    startDate = startDate.subtract({ days: range.days });
  else if (range.months)
    startDate = startDate.subtract({ months: range.months });
  else if (range.years)
    startDate = startDate.subtract({ years: range.years });

  return selected.value.start.compare(startDate) === 0 && selected.value.end.compare(currentDate) === 0;
}

function selectRange(range: { days?: number; months?: number; years?: number }) {
  const endDate = today(getLocalTimeZone());
  let startDate = endDate.copy();

  if (range.days)
    startDate = startDate.subtract({ days: range.days });
  else if (range.months)
    startDate = startDate.subtract({ months: range.months });
  else if (range.years)
    startDate = startDate.subtract({ years: range.years });

  selected.value = { start: startDate, end: endDate };
}
</script>

<template>
  <NuxtPopover :content="{ align: 'start' }" :modal="true">
    <NuxtButton
      color="neutral"
      variant="ghost"
      icon="i-lucide-calendar"
      class="group"
    >
      <span class="truncate">
        <template v-if="selected.start && selected.end">
          <!-- Convert to JS Date only at the last second for f ormatting -->
          {{ df.format(selected.start.toDate(getLocalTimeZone())) }} -
          {{ df.format(selected.end.toDate(getLocalTimeZone())) }}
        </template>
        <template v-else>Pick a date</template>
      </span>
      <template #trailing>
        <NuxtIcon
          name="i-lucide-chevron-down"
          class="group-data-[state=open]:rotate-180 transition-transform"
          size="20"
        />
      </template>
    </NuxtButton>

    <template #content>
      <div class="flex items-stretch sm:divide-x divide-default">
        <div class="hidden sm:flex flex-col justify-center">
          <LazyNuxtButton
            v-for="(rangeItem, index) in ranges"
            :key="index"
            :label="rangeItem.label"
            variant="ghost"
            color="neutral"
            truncate
            class="rounded-none px-4 hover:bg-elevated/50 hover:cursor-pointer"
            :class="[isRangeSelected(rangeItem) ? 'bg-elevated' : '']"
            @click="selectRange(rangeItem)"
          />
        </div>

        <LazyNuxtCalendar
          v-model="selected"
          :number-of-months="2"
          range
          color="info"
          class="p-2"
          :ui="{
            header: '[&>button]:hover:cursor-pointer',
            cell: 'hover:cursor-pointer',
            headCell: 'hover:cursor-text',
          }"
        />
      </div>
    </template>
  </NuxtPopover>
</template>
