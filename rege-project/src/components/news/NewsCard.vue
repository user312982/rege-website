<script setup>
defineProps({
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <img 
      :src="image" 
      :alt="title"
      class="w-full h-48 object-cover"
    />
    <div class="p-6">
      <span class="text-xs font-semibold text-blue-600 uppercase">{{ category }}</span>
      <h3 class="text-xl font-bold text-gray-900 mt-2 mb-3">
        {{ title }}
      </h3>
      <p class="text-gray-600 text-sm mb-4">
        {{ description }}
      </p>
      <p class="text-xs text-gray-500">{{ date }}</p>
    </div>
  </div>
</template>
