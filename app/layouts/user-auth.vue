<template>
  <div class="flex flex-col min-h-screen dark:bg-slate-950 light:bg-white">
    <Header class="bg-transparent" />
    <main class="grow min-w-full flex container">
      <slot />
    </main>
  </div>
</template>
