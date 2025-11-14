<script setup>
import Navbar from './components/navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-900">
    <div class="relative z-50">
      <Navbar />
    </div>
    <main class="relative z-0">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
/* App-level styles moved to Tailwind utility classes */
</style>
