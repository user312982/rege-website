<script setup>
import Navbar from './components/navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-900">
    <Navbar />
    <main class="pt-16">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
/* App-level styles moved to Tailwind utility classes */
</style>
