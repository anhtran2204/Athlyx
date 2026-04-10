<!-- <script setup lang="ts">
import { CalendarDate, DateFormatter, getLocalTimeZone, today } from "@internationalized/date";

import type { Range } from "~/types";

const df = new DateFormatter("en-US", {
  dateStyle: "medium",
});

const selected = defineModel<Range>({ required: true });

const ranges = [
  { label: "Last 7 days", days: 7 },
  { label: "Last 14 days", days: 14 },
  { label: "Last 30 days", days: 30 },
  { label: "Last 3 months", months: 3 },
  { label: "Last 6 months", months: 6 },
  { label: "Last year", years: 1 },
];

function toCalendarDate(date: Date) {
  return new CalendarDate(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  );
}

const calendarRange = computed({
  get: () => ({
    start: selected.value.start ? toCalendarDate(selected.value.start) : undefined,
    end: selected.value.end ? toCalendarDate(selected.value.end) : undefined,
  }),
  set: (newValue: { start: CalendarDate | null; end: CalendarDate | null }) => {
    selected.value = {
      start: newValue.start ? newValue.start.toDate(getLocalTimeZone()) : new Date(),
      end: newValue.end ? newValue.end.toDate(getLocalTimeZone()) : new Date(),
    };
  },
});

function isRangeSelected(range: { days?: number; months?: number; years?: number }) {
  if (!selected.value.start || !selected.value.end)
    return false;

  const currentDate = today(getLocalTimeZone());
  let startDate = currentDate.copy();

  if (range.days) {
    startDate = startDate.subtract({ days: range.days });
  }
  else if (range.months) {
    startDate = startDate.subtract({ months: range.months });
  }
  else if (range.years) {
    startDate = startDate.subtract({ years: range.years });
  }

  const selectedStart = toCalendarDate(selected.value.start);
  const selectedEnd = toCalendarDate(selected.value.end);

  return selectedStart.compare(startDate) === 0 && selectedEnd.compare(currentDate) === 0;
}

function selectRange(range: { days?: number; months?: number; years?: number }) {
  const endDate = today(getLocalTimeZone());
  let startDate = endDate.copy();

  if (range.days) {
    startDate = startDate.subtract({ days: range.days });
  }
  else if (range.months) {
    startDate = startDate.subtract({ months: range.months });
  }
  else if (range.years) {
    startDate = startDate.subtract({ years: range.years });
  }

  selected.value = {
    start: startDate.toDate(getLocalTimeZone()),
    end: endDate.toDate(getLocalTimeZone()),
  };
}
</script>

<template>
  <NuxtPopover :content="{ align: 'start' }" :modal="true">
    <NuxtButton
      color="neutral"
      variant="ghost"
      icon="i-lucide-calendar"
      class="data-[state=open]:bg-elevated group hover:cursor-pointer"
    >
      <span class="truncate">
        <template v-if="selected.start">
          <template v-if="selected.end">
            {{ df.format(selected.start) }} - {{ df.format(selected.end) }}
          </template>
          <template v-else>
            {{ df.format(selected.start) }}
          </template>
        </template>
        <template v-else>
          Pick a date
        </template>
      </span>

      <template #trailing>
        <NuxtIcon name="i-lucide-chevron-down" class="shrink-0 text-dimmed size-5 group-data-[state=open]:rotate-180 transition-transform duration-200" />
      </template>
    </NuxtButton>

    <template #content>
      <div class="flex items-stretch sm:divide-x divide-default">
        <div class="hidden sm:flex flex-col justify-center">
          <LazyNuxtButton
            v-for="(range, index) in ranges"
            :key="index"
            :label="range.label"
            color="neutral"
            variant="ghost"
            class="rounded-none px-4 hover:cursor-pointer"
            :class="[isRangeSelected(range) ? 'bg-elevated' : 'hover:bg-elevated/50']"
            truncate
            @click="selectRange(range)"
          />
        </div>

        <ClientOnly>
          <LazyNuxtCalendar
            v-model="calendarRange"
            color="info"
            class="p-2"
            :number-of-months="2"
            range
            :ui="{
              header: '[&>button]:hover:cursor-pointer',
              cell: 'hover:cursor-pointer',
            }"
          />
        </ClientOnly>
      </div>
    </template>
  </NuxtPopover>
</template> -->

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
        <NuxtIcon name="i-lucide-chevron-down" class="group-data-[state=open]:rotate-180 transition-transform" />
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
