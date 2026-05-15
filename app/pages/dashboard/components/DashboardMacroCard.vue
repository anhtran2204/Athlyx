<script setup lang="ts">
defineOptions({
  tags: ["donutcharts", "basic"],
});

const macroData = ref([110, 180, 55]);

const macroLabels = {
  Protein: {
    name: "Protein",
    target: 150,
    color: "var(--ui-error)",
  },
  Carbs: {
    name: "Carbs",
    target: 200,
    color: "var(--ui-info)",
  },
  Fats: {
    name: "Fats",
    target: 65,
    color: "var(--ui-success)",
  },
};
</script>

<template>
  <div class="flex flex-col w-full rounded-2xl gap-4 p-4 sm:p-6">
    <span class="text-xl font-bold text-pretty">
      Today's Macros
    </span>
    <div class="mb-0">
      <DonutChart
        :data="macroData"
        :categories="macroLabels"
        :hide-legend="true"
        :height="150"
        :radius="5"
        :pad-angle="0.05"
        :arc-width="20"
      >
        <div class="text-center">
          <div class="text-3xl font-semibold">
            {{ macroData.reduce((acc, curr) => acc + curr, 0) }}g
          </div>
        </div>
        <div class="text-center text-muted">
          Total
        </div>
      </DonutChart>
    </div>
    <div class="flex flex-col gap-2">
      <div class="w-full flex justify-between">
        <div>
          <div class="flex gap-2 items-center">
            <div
              class="size-3 rounded-full"
              :style="{
                backgroundColor: `${macroLabels.Protein.color}`,
              }"
            />
            <span>{{ macroLabels.Protein.name }}</span>
          </div>
        </div>
        <div>
          <div class="text-pretty font-semibold">
            {{ macroData.at(0) }} / {{ macroLabels.Protein.target }}
          </div>
        </div>
      </div>
      <div class="w-full h-3 bg-slate-700 rounded-full">
        <div
          class="h-3 rounded-full"
          :style="{
            width: `${(macroData.at(0)! / macroLabels.Protein.target) * 100}%`,
            backgroundColor: `${macroLabels.Protein.color}`,
          }"
        />
      </div>
      <div class="w-full flex justify-between">
        <div>
          <div class="flex gap-2 items-center">
            <div
              class="size-3 rounded-full"
              :style="{
                backgroundColor: `${macroLabels.Carbs.color}`,
              }"
            />
            <span>{{ macroLabels.Carbs.name }}</span>
          </div>
        </div>
        <div>
          <div class="text-pretty font-semibold">
            {{ macroData.at(1) }} / {{ macroLabels.Carbs.target }}
          </div>
        </div>
      </div>
      <div class="w-full h-3 bg-slate-700 rounded-full">
        <div
          class="h-3 rounded-full"
          :style="{
            width: `${(macroData.at(1)! / macroLabels.Carbs.target) * 100}%`,
            backgroundColor: `${macroLabels.Carbs.color}`,
          }"
        />
      </div>
      <div class="w-full flex justify-between">
        <div>
          <div class="flex gap-2 items-center">
            <div
              class="size-3 rounded-full"
              :style="{
                backgroundColor: `${macroLabels.Fats.color}`,
              }"
            />
            <span>{{ macroLabels.Fats.name }}</span>
          </div>
        </div>
        <div>
          <div class="text-pretty font-semibold">
            {{ macroData.at(2) }} / {{ macroLabels.Fats.target }}
          </div>
        </div>
      </div>
      <div class="w-full h-3 bg-slate-700 rounded-full">
        <div
          class="h-3 rounded-full"
          :style="{
            width: `${(macroData.at(2)! / macroLabels.Fats.target) * 100}%`,
            backgroundColor: `${macroLabels.Fats.color}`,
          }"
        />
      </div>
    </div>
  </div>
</template>
