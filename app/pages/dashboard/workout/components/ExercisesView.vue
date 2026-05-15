<script setup lang="ts">
import type { SelectItem } from "@nuxt/ui";

import type { Exercise } from "~/types";

const filterOptions = ref<SelectItem[]>([
  {
    id: "all",
    label: "All",
    value: "all",
  },
  {
    id: "chest",
    label: "Chest",
    value: "chest",
  },
  {
    id: "back",
    label: "Back",
    value: "back",
  },
  {
    id: "legs",
    label: "Legs",
    value: "legs",
  },
  {
    id: "arms",
    label: "Arms",
    value: "arms",
  },
  {
    id: "shoulders",
    label: "Shoulders",
    value: "shoulders",
  },
]);

const sortOptions = ref<SelectItem[]>([
  {
    id: "name",
    label: "Name",
  },
  {
    id: "category",
    label: "Category",
  },
]);

const exercises = [
  {
    id: crypto.randomUUID(),
    name: "Bench Press",
    category: "Chest",
    equipment: "Barbell",
    difficulty: "Intermediate",
  },
  {
    id: crypto.randomUUID(),
    name: "Pull-ups",
    category: "Back",
    equipment: "Bodyweight",
    difficulty: "Intermediate",
  },
  {
    id: crypto.randomUUID(),
    name: "Squats",
    category: "Legs",
    equipment: "Barbell",
    difficulty: "Intermediate",
  },
  {
    id: crypto.randomUUID(),
    name: "Deadlifts",
    category: "Back",
    equipment: "Barbell",
    difficulty: "Advanced",
  },
  {
    id: crypto.randomUUID(),
    name: "Bicep Curls",
    category: "Arms",
    equipment: "Dumbbells",
    difficulty: "Beginner",
  },
  {
    id: crypto.randomUUID(),
    name: "Tricep Extensions",
    category: "Arms",
    equipment: "Dumbbells",
    difficulty: "Beginner",
  },
  {
    id: crypto.randomUUID(),
    name: "Plank",
    category: "Core",
    equipment: "Bodyweight",
    difficulty: "Beginner",
  },
  {
    id: crypto.randomUUID(),
    name: "Burpees",
    category: "Full Body",
    equipment: "Bodyweight",
    difficulty: "Beginner",
  },
  {
    id: crypto.randomUUID(),
    name: "Leg Press",
    category: "Legs",
    equipment: "Machine",
    difficulty: "Beginner",
  },
  {
    id: crypto.randomUUID(),
    name: "Shoulder Press",
    category: "Shoulders",
    equipment: "Dumbbells",
    difficulty: "Beginner",
  },
  {
    id: crypto.randomUUID(),
    name: "Lat Pulldowns",
    category: "Back",
    equipment: "Machine",
    difficulty: "Beginner",
  },
  {
    id: crypto.randomUUID(),
    name: "Cable Flys",
    category: "Chest",
    equipment: "Cable Machine",
    difficulty: "Beginner",
  },
] satisfies Exercise[];

const results = ref<Exercise[]>(Array.from(exercises));

// Filter by search
const searchQuery = ref("");

// Filter by category
const categoryQuery = ref("Filter by:");

// Sorting
const sortValue = ref("Sort by:");
const sortOrder = ref(""); // null = default, 'asc', 'desc'

const sortIcon = computed(() => {
  if (sortOrder.value === "asc")
    return "lucide:arrow-up-narrow-wide";
  else if (sortOrder.value === "desc")
    return "lucide:arrow-down-wide-narrow";
  else return "lucide:arrow-up-down";
});

function filterHandler(category: string) {
  if (category !== "all") {
    results.value = exercises.filter(exercise =>
      exercise.category.toLowerCase().includes(category.toLowerCase()),
    );
  }
  else {
    results.value = exercises;
  }
}

function sortHandler() {
  const value = sortValue.value as keyof typeof results.value[0];
  if (sortOrder.value === "") {
    sortOrder.value = "asc";
    results.value.sort((a, b) => a[value].localeCompare(b[value]));
  }
  else if (sortOrder.value === "asc") {
    sortOrder.value = "desc";
    results.value.sort((a, b) => b[value].localeCompare(a[value]));
  }
  else if (sortOrder.value === "desc") {
    sortOrder.value = "";
    results.value = Array.from(exercises);
  }
}

watch(searchQuery, (newQuery) => {
  if (newQuery) {
    results.value = exercises.filter(exercise =>
      exercise.name.toLowerCase().includes(newQuery.toLowerCase()),
    );
  }
  else {
    results.value = exercises;
  }
});
</script>

<template>
  <div class="flex flex-col flex-1 gap-6">
    <div class="flex items-center gap-4">
      <NuxtInput
        id="search-exercises"
        v-model="searchQuery"
        name="search-exercises"
        icon="lucide-search"
        placeholder="Search exercises..."
        size="md"
        color="info"
        :ui="{
          base: 'bg-slate-700/50 rounded-xl py-3',
        }"
        class="flex-1"
      />
      <div class="flex justify-center items-center gap-3">
        <NuxtSelect
          v-model="categoryQuery"
          :items="filterOptions"
          color="info"
          variant="subtle"
          icon="lucide:filter"
          :ui="{
            base: 'rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors px-3 py-2 text-sm gap-2 text-info ring ring-inset ring-info/25 bg-info/10 hover:bg-info/15 active:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-info',
            leadingIcon: 'text-info',
            trailingIcon: 'text-info',
            placeholder: 'text-info',
          }"
          @change.prevent="filterHandler(categoryQuery)"
        />
        <NuxtSelect
          v-model="sortValue"
          value-key="id"
          :items="sortOptions"
          color="info"
          variant="subtle"
          :leading-icon="sortIcon"
          placeholder="Sort by:"
          :ui="{
            base: 'rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors px-3 py-2 text-sm gap-2 text-info ring ring-inset ring-info/25 bg-info/10 hover:bg-info/15 active:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-info',
            leadingIcon: 'text-info',
            trailingIcon: 'text-info',
            placeholder: 'text-info',
          }"
          @change.prevent="sortHandler"
        />
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <div
        v-for="exercise in results"
        :key="exercise.id"
        class="bg-gray-300 dark:bg-slate-800 rounded-xl border border-slate-700 p-4 sm:p-6 flex flex-col gap-4 hover:cursor-pointer hover:transition-all hover:-translate-y-1 duration-200 ease-in-out"
      >
        <div class="flex justify-center items-center h-40 bg-linear-to-br from-cyan-800/50 to-blue-900/50 border border-cyan-700 p-4 rounded-lg">
          <Icon
            name="lucide:dumbbell"
            size="45"
            class="text-cyan-400"
          />
        </div>
        <span class="text-white text-lg font-bold text-pretty">{{ exercise.name }}</span>
        <div class="flex flex-col gap-2">
          <div class="flex justify-between">
            <span class="text-muted text-sm">Primary Muscle</span>
            <span class="text-cyan-600 font-semibold text-sm">{{ exercise.category }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted text-sm">Equipment</span>
            <span class="text-highlighted font-semibold text-sm">{{ exercise.equipment }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted text-sm">Difficulty</span>
            <span
              class="font-semibold text-sm"
              :class="{
                'text-green-600': exercise.difficulty.toLowerCase() === 'beginner',
                'text-orange-600': exercise.difficulty.toLowerCase() === 'intermediate',
                'text-red-600': exercise.difficulty.toLowerCase() === 'advanced',
              }"
            >{{ exercise.difficulty }}</span>
          </div>
        </div>
        <div class="opacity-0 flex justify-center items-center p-4 bg-linear-to-r from-cyan-600 to-blue-600 rounded-2xl hover:cursor-pointer hover:opacity-100">
          <span class="text-white font-semibold text-pretty flex items-center gap-2">
            <Icon name="lucide:plus" size="20" />
            Add Workout
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
