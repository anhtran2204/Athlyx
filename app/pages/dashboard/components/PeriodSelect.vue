<script setup lang="ts">
import { DateFormatter, getLocalTimeZone } from "@internationalized/date";
import { eachDayOfInterval } from "date-fns";

import type { Period, Range } from "~/types";

const props = defineProps<{
  range: Range;
}>();

const df = new DateFormatter("en-US", { dateStyle: "medium" });
const model = defineModel<Period>({ required: true });
const days = computed(() => eachDayOfInterval({
  start: df.format(props.range.start.toDate(getLocalTimeZone())),
  end: df.format(props.range.end.toDate(getLocalTimeZone())),
}));

const periods = computed<Period[]>(() => {
  if (days.value.length <= 8) {
    return [
      "daily",
    ];
  }

  if (days.value.length <= 31) {
    return [
      "daily",
      "weekly",
    ];
  }

  return [
    "weekly",
    "monthly",
  ];
});

// Ensure the model value is always a valid period
watch(periods, () => {
  if (!periods.value.includes(model.value)) {
    model.value = periods.value[0]!;
  }
});
</script>

<template>
  <NuxtSelect
    v-model="model"
    :items="periods"
    color="neutral"
    variant="ghost"
    class="data-[state=open]:bg-elevated"
    :ui="{
      base: 'text-default',
      value: 'capitalize font-medium ',
      item: 'capitalize font-medium ',
      trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200 text-default',
    }"
  />
</template>
