<template>
  <div class="flex flex-col min-h-screen bg-white dark:bg-slate-950">
    <Header />
    <main class="grow min-w-full flex container">
      <slot />
    </main>
    <NuxtSeparator
      icon="lucide:zap"
      type="solid"
      class="h-px"
    />
    <Footer />
  </div>
</template>
