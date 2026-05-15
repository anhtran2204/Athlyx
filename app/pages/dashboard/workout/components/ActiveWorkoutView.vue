<script setup lang="ts">
import type { CalendarDate } from "@internationalized/date";
import { DateFormatter, getLocalTimeZone, isToday, today } from "@internationalized/date";

const df = new DateFormatter("en-US", { dateStyle: "medium" });

const activeWorkout = [
  {
    id: 1,
    name: "Bench Press",
    category: "Chest",
    sets: 4,
    reps: 10,
    weight: 185,
    completed: true,
  },
  {
    id: 2,
    name: "Incline Dumbbell Press",
    category: "Chest",
    sets: 3,
    reps: 12,
    weight: 70,
    completed: true,
  },
  {
    id: 3,
    name: "Cable Flys",
    category: "Chest",
    sets: 3,
    reps: 15,
    weight: 50,
    completed: false,
  },
  {
    id: 4,
    name: "Tricep Dips",
    category: "Triceps",
    sets: 3,
    reps: 10,
    completed: false,
  },
  {
    id: 5,
    name: "Skull Crushers",
    category: "Triceps",
    sets: 3,
    reps: 10,
    weight: 60,
    completed: false,
  },
];

const recentWorkouts = [
  {
    id: 1,
    name: "Chest & Triceps",
    duration: 45,
    exercises: 5,
    calories: 380,
    loggedAt: today(getLocalTimeZone()).subtract({ days: 1 }),
  },
  {
    id: 2,
    name: "HIIT Cardio",
    duration: 30,
    exercises: 8,
    calories: 420,
    loggedAt: today(getLocalTimeZone()).subtract({ days: 2 }),
  },
  {
    id: 3,
    name: "Back & Biceps",
    duration: 50,
    exercises: 6,
    calories: 350,
    loggedAt: today(getLocalTimeZone()).subtract({ days: 3 }),
  },
  {
    id: 4,
    name: "Legs",
    duration: 55,
    exercises: 7,
    calories: 480,
    loggedAt: today(getLocalTimeZone()).subtract({ days: 4 }),
  },
  {
    id: 5,
    name: "Shoulders",
    duration: 40,
    exercises: 5,
    calories: 320,
    loggedAt: today(getLocalTimeZone()).subtract({ days: 5 }),
  },
  {
    id: 6,
    name: "Upper Body",
    duration: 15,
    exercises: 3,
    calories: 390,
    loggedAt: today(getLocalTimeZone()).subtract({ days: 6 }),
  },
  {
    id: 7,
    name: "Lower Body",
    duration: 10,
    exercises: 3,
    calories: 440,
    loggedAt: today(getLocalTimeZone()).subtract({ days: 7 }),
  },
];

function dateFormat(date: CalendarDate) {
  if (isToday(date, getLocalTimeZone())) {
    return "Today";
  }
  else if (today(getLocalTimeZone()).subtract({ days: 1 }).compare(date) === 0) {
    return "Yesterday";
  }
  return df.format(date.toDate(getLocalTimeZone()));
}
</script>

<template>
  <div class="flex flex-col flex-1 gap-4 sm:gap-6">
    <div class="flex flex-col gap-4 bg-elevated/50 p-4 rounded-2xl border-2 border-cyan-600">
      <div class="flex justify-between items-center">
        <div class="flex flex-col items-start gap-2">
          <div class="flex items-center gap-2 px-2 py-1 bg-cyan-600 rounded-xl text-xs font-semibold">
            <Icon name="lucide:activity" size="12" />
            <p>In Progress</p>
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-bold text-pretty">Chest & Triceps</span>
            <span class="text-muted text-sm text-pretty">Started 25 minutes ago</span>
          </div>
        </div>
        <div class="flex flex-col items-end">
          <span class="text-3xl text-cyan-600 font-bold">2/5</span>
          <span class="text-muted text-xs text-pretty">Exercises</span>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-2">
        <div
          v-for="workout in activeWorkout"
          :key="workout.name"
          class="rounded-lg p-3"
          :class="{
            'bg-green-900/30 border border-green-600/50': workout.completed,
            'bg-slate-800/75 border border-slate-700': !workout.completed,
          }"
        >
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-3">
              <div
                class="flex items-center rounded-xl p-1.5"
                :class="{
                  'bg-green-600': workout.completed,
                  'bg-slate-700': !workout.completed,
                }"
              >
                <Icon
                  v-if="workout.completed"
                  name="lucide:check"
                  size="22"
                />
                <span v-else class="text-md flex items-center justify-center font-bold size-6">{{ workout.id }}</span>
              </div>
              <div class="flex flex-col">
                <span class="text-sm font-semibold">{{ workout.name }}</span>
                <span class="text-muted text-xs">{{ workout.sets }} sets x {{ workout.reps }} reps x {{ workout.weight }} lbs</span>
              </div>
            </div>
            <div v-if="!workout.completed" class="bg-cyan-600 hover:bg-cyan-700 flex items-center px-4 py-1.5 rounded-lg hover:cursor-pointer hover:scale-105 transition duration-200 ease-in-out">
              <span class="text-sm font-semibold text-pretty">
                Start
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-2">
        <div class="flex-1 bg-cyan-600 text-white font-semibold text-pretty rounded-2xl p-3 hover:cursor-pointer hover:bg-cyan-700">
          <span class="flex justify-center items-center">Continue Workout</span>
        </div>
        <div class="w-30 bg-slate-800 text-white font-semibold text-pretty border-2 border-slate-700 rounded-2xl p-3 hover:cursor-pointer hover:bg-slate-700">
          <span class="flex justify-center items-center">Finish</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <span class="text-xl font-bold text-pretty">Recent Workouts</span>
      <div class="grid grid-cols-1 gap-2">
        <div
          v-for="workout in recentWorkouts"
          :key="workout.id"
          class="bg-slate-800/75 border border-slate-700 rounded-lg p-3 hover:bg-slate-700/75 hover:cursor-pointer hover:translate-x-2 transition duration-300 ease-in-out"
        >
          <div class="flex justify-between items-center">
            <div class="flex gap-3">
              <div class="flex items-center p-2 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg">
                <Icon name="lucide:dumbbell" size="22" />
              </div>
              <div class="flex flex-col">
                <span class="text-sm font-semibold">{{ workout.name }}</span>
                <span class="text-muted text-xs">{{ dateFormat(workout.loggedAt) }}</span>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col">
                <span class="text-xs text-muted text-pretty">Duration</span>
                <span class="text-xs text-center font-semibold">{{ workout.duration }} min</span>
              </div>
              <div class="flex flex-col">
                <span class="text-xs text-muted text-pretty">Calories</span>
                <span class="text-xs text-orange-600 text-center font-semibold">{{ workout.calories }}</span>
              </div>
              <div class="flex flex-col">
                <span class="text-xs text-muted text-pretty">Exercises</span>
                <span class="text-xs text-center font-semibold">{{ workout.exercises }}</span>
              </div>
              <div class="flex items-center text-muted">
                <Icon name="lucide:chevron-right" size="22" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
