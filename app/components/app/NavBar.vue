<script setup lang="ts">
const auth = ref(false);
</script>

<template>
  <div class="navbar relative w-400 backdrop-blur-sm rounded-4xl mx-auto bg-transparent">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-link text-xl">
        <img src="~~/assets/images/athlyx-icon-light.svg" alt="logo">
      </NuxtLink>
    </div>
    <div class="navbar-center space-x-4">
      <NuxtLink to="/" class="rounded-md px-3 py-2 font-medium hover:bg-white/5 text-lg">
        Home
      </NuxtLink>
      <NuxtLink to="/" class="rounded-md px-3 py-2 font-medium hover:bg-white/5 text-lg">
        Features
      </NuxtLink>
      <NuxtLink to="/" class="rounded-md px-3 py-2 font-medium hover:bg-white/5 text-lg">
        About
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <div v-if="auth" class="dropdown dropdown-end">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost btn-circle avatar"
        >
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            >
          </div>
        </div>
        <ul
          tabindex="-1"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
      <div v-else class="mr-3 flex gap-2">
        <NuxtLink to="/login" class="btn btn-outline hover:bg-white hover:text-black rounded-full">
          Login
        </NuxtLink>
        <NuxtLink to="/signup" class="btn btn-soft btn-info rounded-full">
          Sign up
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
