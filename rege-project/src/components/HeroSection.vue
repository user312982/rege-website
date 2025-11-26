<template>
  <div class="bg-gray-900 bg-cover bg-center relative" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black" :style="{ opacity: overlayOpacity }"></div>

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <!-- Gradient Top (optional) -->
      <div v-if="showGradient" class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      
      <!-- Content -->
      <div class="mx-auto max-w-2xl py-16 sm:py-24" :class="minHeight">
        <div :class="textAlign">
          <h1 :class="['font-regular tracking-tight text-balance text-white', headingSize]">
            {{ heading }}
          </h1>
          <p v-if="subheading" class="mt-6 text-lg leading-8 text-gray-300">
            {{ subheading }}
          </p>
        </div>
      </div>
      
      <!-- Gradient Bottom (optional) -->
      <div v-if="showGradient" class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  // URL background image
  backgroundImage: {
    type: String,
    required: true
  },
  // Teks heading utama
  heading: {
    type: String,
    required: true
  },
  // Teks subheading (optional)
  subheading: {
    type: String,
    default: ''
  },
  // Opacity overlay (0-1)
  overlayOpacity: {
    type: Number,
    default: 0.3
  },
  // Alignment: 'text-center' atau 'text-left'
  textAlign: {
    type: String,
    default: 'text-center'
  },
  // Ukuran heading (Tailwind classes)
  headingSize: {
    type: String,
    default: 'text-5xl sm:text-6xl'
  },
  // Min height class
  minHeight: {
    type: String,
    default: 'min-h-[calc(100vh-120px)]'
  },
  // Tampilkan gradient decorations
  showGradient: {
    type: Boolean,
    default: true
  }
})
</script>
