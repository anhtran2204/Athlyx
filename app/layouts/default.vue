<template>
  <div class="flex flex-col min-h-screen bg-slate-950">
    <header class="sticky z-50 top-0 py-4">
      <NavBar />
    </header>
    <main class="grow flex pb-4">
      <slot />
    </main>
    <Footer />
  </div>
</template>
