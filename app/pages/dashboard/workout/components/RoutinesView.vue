<script setup lang="ts">
import type { Exercise } from "~/types";

const exerciseRoutines = [
  {
    id: 1,
    name: "Push Day",
    category: "Strength",
    duration: 60,
    exercises: 8,
    calories: 380,
  },
  {
    id: 2,
    name: "Pull Day",
    category: "Strength",
    duration: 55,
    exercises: 7,
    calories: 380,
  },
  {
    id: 3,
    name: "Leg Day",
    category: "Strength",
    duration: 50,
    exercises: 6,
    calories: 380,
  },
  {
    id: 4,
    name: "HIIT Circuit",
    category: "Cardio",
    duration: 30,
    exercises: 10,
    calories: 380,
  },
  {
    id: 5,
    name: "Core Blast",
    category: "Core",
    duration: 25,
    exercises: 8,
    calories: 380,
  },
];

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

const searchQuery = ref("");
const searchResults = ref<Exercise[]>(Array.from(exercises));
const selectedExercises = ref<Exercise[]>([]);

const sets = ref(3);
const reps = ref(10);
const weight = ref(0);

function addExercise(exercise: Exercise) {
  selectedExercises.value.push(exercise);
}

watch(searchQuery, (newQuery) => {
  if (newQuery) {
    searchResults.value = exercises.filter(exercise =>
      exercise.name.toLowerCase().includes(newQuery.toLowerCase()),
    );
  }
  else {
    searchResults.value = [];
  }
});
</script>

<template>
  <div class="flex flex-col gap-6">
    <NuxtModal
      :close="{
        class: 'z-50',
      }"
      :ui="{
        content: 'bg-slate-800 border border-slate-700 rounded-2xl max-w-4xl! divide-y-2! divide-slate-700/50!',
        footer: 'p-6',
        body: 'sm:p-8',
      }"
    >
      <NuxtButton
        label="Create Custom Routine"
        leading-icon="lucide:plus"
        :ui="{
          base: 'justify-center font-semibold text-xl text-info gap-2 p-6 bg-cyan-950/15 hover:cursor-pointer hover:bg-cyan-950/30 hover:shadow-lg border-2 border-cyan-600 active:bg-cyan-950/30 border-dashed rounded-xl transition-all group',
          leadingIcon: 'size-6 group-hover:scale-110 transition-transform duration-200 ease-in-out',
          label: 'group-hover:scale-102 transition-transform duration-200 ease-in-out',
        }"
      />
      <template #header="{ close }">
        <div class="flex flex-1 justify-between items-center gap-8">
          <div class="flex flex-col flex-1 gap-2">
            <span class="text-xl font-bold text-pretty">Create Custom Routine</span>
            <NuxtInput
              id="search-routine"
              name="search-routine"
              placeholder="Routine Name (e.g., Upper Body Strength)"
              size="xl"
              color="info"
              :ui="{
                base: 'bg-slate-700/50 rounded-xl',
              }"
            />
          </div>
          <NuxtButton
            color="neutral"
            variant="ghost"
            icon="lucide:x"
            :ui="{
              base: 'hover:bg-slate-700/50 active:bg-slate-700/50',
            }"
            @click="close"
          />
        </div>
      </template>
      <template #body>
        <div v-if="selectedExercises.length === 0" class="border-2 border-dashed border-slate-700/50 rounded-xl p-8 sm:p-16 flex justify-center items-center">
          <div class="flex flex-col gap-4">
            <span class="text-muted">No exercises added yet</span>
            <NuxtModal
              :ui="{
                content: 'bg-slate-800 border border-slate-700 rounded-2xl max-w-xl! h-200! sm:h-220!',
              }"
            >
              <NuxtButton
                label="Add Exercise"
                leading-icon="lucide:plus"
                :ui="{
                  base: 'justify-center bg-linear-to-br from-cyan-500 to-blue-600 text-white text-md font-semibold rounded-lg p-2.5 hover:cursor-pointer hover:bg-linear-to-br hover:from-cyan-600 hover:to-blue-700',
                }"
              />
              <template #content>
                <div class="min-h-full flex flex-col gap-4 p-4 sm:p-6">
                  <span class="text-xl text-pretty font-bold">Select Exercise</span>
                  <NuxtInput
                    id="search-exercises"
                    v-model="searchQuery"
                    name="search-exercises"
                    icon="lucide-search"
                    placeholder="Search exercises..."
                    size="xl"
                    color="info"
                    :ui="{
                      base: 'bg-slate-700/50 rounded-xl py-3',
                    }"
                  />
                  <div class="grid grid-cols-1 gap-2 overflow-y-auto">
                    <div
                      v-for="exercise in searchResults"
                      :key="exercise.id"
                      class="bg-slate-700/50 hover:bg-slate-700/75 border border-slate-700 rounded-xl p-4 cursor-pointer"
                      @click="addExercise(exercise)"
                    >
                      <div class="flex flex-col">
                        <span class="text-pretty font-semibold">{{ exercise.name }}</span>
                        <span class="text-muted text-sm">{{ exercise.category }} &bull; {{ exercise.equipment }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </NuxtModal>
          </div>
        </div>
        <div v-else class="grid grid-cols-1 gap-2 overflow-y-auto">
          <div
            v-for="exercise in selectedExercises"
            :key="exercise.id"
            class="bg-slate-800 border border-slate-700 flex flex-col gap-3 rounded-xl p-4 sm:p-6"
          >
            <span class="text-md font-bold text-pretty">{{ exercise.name }}</span>
            <div class="flex gap-4">
              <div class="flex flex-col gap-2">
                <span class="text-muted text-xs">Sets</span>
                <NuxtInput v-model="sets" type="number" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-muted text-xs">Reps</span>
                <NuxtInput v-model="reps" type="number" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-muted text-xs">Weight (lbs)</span>
                <NuxtInput v-model="weight" type="number" />
              </div>
              <div class="text-red-700 hover:bg-red-900/30 self-start flex items-center p-2 rounded-lg" @click="selectedExercises.splice(selectedExercises.indexOf(exercise), 1)">
                <Icon name="lucide:trash-2" size="24" />
              </div>
            </div>
          </div>
          <NuxtModal
            :ui="{
              content: 'bg-slate-800 border border-slate-700 rounded-2xl max-w-xl! h-200! sm:h-220!',
            }"
          >
            <NuxtButton
              label="Add Exercise"
              leading-icon="lucide:plus"
              :ui="{
                base: 'bg-transparent hover:bg-slate-900/25 active:bg-slate-900/25 justify-center text-white text-md font-semibold rounded-lg p-2.5 border-2 border-dashed border-slate-700 hover:cursor-pointer',
              }"
            />
            <template #content="{ close }">
              <div class="min-h-full flex flex-col gap-4 p-4 sm:p-6">
                <span class="text-xl text-pretty font-bold">Select Exercise</span>
                <NuxtInput
                  id="search-exercises"
                  v-model="searchQuery"
                  name="search-exercises"
                  icon="lucide-search"
                  placeholder="Search exercises..."
                  size="xl"
                  color="info"
                  :ui="{
                    base: 'bg-slate-700/50 rounded-xl py-3',
                  }"
                />
                <div class="grid grid-cols-1 gap-2 overflow-y-auto">
                  <div
                    v-for="exercise in searchResults"
                    :key="exercise.id"
                    class="bg-slate-700/50 hover:bg-slate-700/75 border border-slate-700 rounded-xl p-4 cursor-pointer"
                    @click="{
                      addExercise(exercise);
                      close()
                    }"
                  >
                    <div class="flex flex-col">
                      <span class="text-pretty font-semibold">{{ exercise.name }}</span>
                      <span class="text-muted text-sm">{{ exercise.category }} &bull; {{ exercise.equipment }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </NuxtModal>
        </div>
      </template>
      <template #footer="{ close }">
        <div class="flex flex-1 gap-2">
          <NuxtButton
            icon="lucide:save"
            label="Save Routine"
            class="flex-1 text-md font-semibold text-pretty hover:cursor-pointer"
            :ui="{
              base: 'bg-linear-to-br from-cyan-500 to-blue-600 hover:bg-linear-to-br hover:from-cyan-600 hover:to-blue-700 rounded-xl px-4 py-2.5 text-white flex justify-center gap-2 disabled:opacity-50 disabled:bg-linear-to-br disabled:from-cyan-600 disabled:to-blue-700',
            }"
            :disabled="selectedExercises.length === 0"
          />
          <div
            class="bg-slate-900/50 hover:bg-slate-900/75 active:bg-slate-900/75 border-2 border-slate-700 rounded-xl px-4 py-2.5 text-white flex items-center gap-2 hover:cursor-pointer"
            @click="{
              close();
              selectedExercises = []
            }"
          >
            <span class="text-pretty font-semibold">Cancel</span>
          </div>
        </div>
      </template>
    </NuxtModal>
    <div class="grid grid-cols-3 gap-6">
      <div
        v-for="routine in exerciseRoutines"
        :key="routine.id"
        class="flex flex-col gap-4 p-6 bg-elevated rounded-2xl border border-slate-700 hover:cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ease-in-out"
      >
        <div class="flex justify-between items-center">
          <div class="flex items-center p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl">
            <Icon
              name="lucide:dumbbell"
              size="24"
              class="text-white"
            />
          </div>
          <div class="bg-cyan-900/25 px-3 py-1 rounded-xl text-xs text-cyan-700 font-semibold text-pretty">
            <span>{{ routine.category }}</span>
          </div>
        </div>
        <span class="text-xl font-bold text-pretty">{{ routine.name }}</span>
        <div class="flex flex-col gap-2">
          <div class="flex justify-between">
            <span class="text-muted text-sm text-pretty">Exercises</span>
            <span class="text-sm font-semibold text-pretty">{{ routine.exercises }}</span>
          </div>
          <div class="flex justify-between mb-4">
            <span class="text-muted text-sm text-pretty">Duration</span>
            <span class="text-sm font-semibold text-pretty">{{ routine.duration }} min</span>
          </div>
          <div class="opacity-0 flex justify-center items-center p-4 bg-linear-to-r from-cyan-600 to-blue-600 rounded-2xl hover:cursor-pointer hover:opacity-100">
            <span class="text-white font-semibold text-pretty">Use Routine</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
