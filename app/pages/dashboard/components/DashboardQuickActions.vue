<template>
  <div class="flex flex-col gap-4">
    <span class="text-xl font-bold text-pretty">
      Quick Actions
    </span>
    <div class="grid grid-cols-6 gap-4">
      <div class="card one flex flex-col justify-center items-center gap-4 p-4 bg-elevated/50 rounded-xl border border-slate-700">
        <div class="icon flex items-center bg-purple-600 rounded-xl p-3">
          <Icon name="lucide:utensils" size="24" />
        </div>
        <span class="text-sm font-medium text-pretty">Log Meal</span>
      </div>
      <div class="card two flex flex-col justify-center items-center gap-4 p-4 bg-elevated/50 rounded-xl border border-slate-700">
        <div class="icon flex items-center bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl p-3">
          <Icon name="lucide:dumbbell" size="24" />
        </div>
        <span class="text-sm font-medium text-pretty">Start Workout</span>
      </div>
      <div class="card three flex flex-col justify-center items-center gap-4 p-4 bg-elevated/50 rounded-xl border border-slate-700">
        <div class="icon flex items-center bg-green-600 rounded-xl p-3">
          <Icon name="lucide:scale" size="24" />
        </div>
        <span class="text-sm font-medium text-pretty">Add Weight</span>
      </div>
      <div class="card four flex flex-col justify-center items-center gap-4 p-4 bg-elevated/50 rounded-xl border border-slate-700">
        <div class="icon flex items-center bg-blue-600 rounded-xl p-3">
          <Icon name="lucide:droplet" size="24" />
        </div>
        <span class="text-sm font-medium text-pretty">Log Water</span>
      </div>
      <div class="card five flex flex-col justify-center items-center gap-4 p-4 bg-elevated/50 rounded-xl border border-slate-700">
        <div class="icon flex items-center bg-indigo-600 rounded-xl p-3">
          <Icon name="lucide:moon" size="24" />
        </div>
        <span class="text-sm font-medium text-pretty">Add Sleep</span>
      </div>
      <div class="card six flex flex-col justify-center items-center gap-4 p-4 bg-elevated/50 rounded-xl border border-slate-700">
        <div class="icon flex items-center bg-orange-600 rounded-xl p-3">
          <Icon
            name="lucide:trending-up"
            size="24"
          />
        </div>
        <span class="text-sm font-medium text-pretty">View Progress</span>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.icon:hover {
  transition: transform 0.3s ease;
  transform: scale(1.1);
  cursor: pointer;
}

.card:hover {
  transition: transform 0.3s ease;
  transform: translateY(-5px);
  cursor: pointer;
}

.one {
  opacity: 0;
  animation: fadeUp 2s ease 2.6s forwards;
}

.two {
  opacity: 0;
  animation: fadeUp 2s ease 2.7s forwards;
}

.three {
  opacity: 0;
  animation: fadeUp 2s ease 2.8s forwards;
}

.four {
  opacity: 0;
  animation: fadeUp 2s ease 2.9s forwards;
}

.five {
  opacity: 0;
  animation: fadeUp 2s ease 3s forwards;
}

.six {
  opacity: 0;
  animation: fadeUp 2s ease 3.1s forwards;
}
</style>
