<template>
  <div class="flex flex-col min-h-screen bg-slate-950">
    <Header class="bg-transparent" />
    <main class="grow min-w-full flex container">
      <slot />
    </main>
  </div>
</template>
