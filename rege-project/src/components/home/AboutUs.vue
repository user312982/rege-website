<template>
  <section class="relative bg-white h-screen px-6 lg:px-8 bg-cover " :style="{ backgroundImage: `url(${sustainabilityBg})` }">
    <!-- Optional: Dark overlay for better text readability -->
    <div class="absolute inset-0 bg-black/30"></div>
    <div class="relative max-w-screen-2xl mx-auto h-full flex flex-col">
      <!-- Header -->
      <div class="mb-12">
        <h2 class="text-4xl md:text-5xl font-regular text-black mb-6 pt-28">
          Sustainability
        </h2>
        <p class="max-w-[400px]">
          At REGE, sustainability is our core commitment — we strive to balance technological innovation with environmental responsibility to create lasting positive impact for people and the planet.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import sustainabilityBg from '@/assets/sustainability.png'
</script>
