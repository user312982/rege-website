<template>
  <nav class="fixed top-0 left-0 right-0 bg-white shadow-sm z-[999]">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button 
          type="button" 
          @click="toggleMobileMenu"
          class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-2 focus:-outline-offset-1 focus:outline-orange-500"
        >
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <!-- Hamburger icon (show when menu is closed) -->
          <svg v-if="!isMobileMenuOpen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <!-- Close icon (show when menu is open) -->
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
            <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
        <div class="flex shrink-0 items-center text-gray-900 font-bold text-lg">
            <img 
                src="../assets/Mentary.png"
                class="h-[20px] w-auto"
              />
        </div>
        <div class="hidden sm:ml-6 sm:block ">
          <div class="flex space-x-4">
            <!-- Use router-link so navigation is handled by vue-router -->
            <router-link to="/" class="rounded-md px-3 py-2 text-sm font-medium text-orange-500 hover:text-orange-600">Home</router-link>
            <router-link to="/technologies" class="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:text-orange-500">Technologies</router-link>
            <router-link to="/solutions" class="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:text-orange-500">Solutions</router-link>
            <router-link to="/news" class="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:text-orange-500">News</router-link>
            <router-link to="/about" class="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:text-orange-500">About</router-link>
            <router-link to="/contact" class="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:text-orange-500">Contact</router-link>

            
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state -->
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0 -translate-y-1"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-1"
  >
    <div v-if="isMobileMenuOpen" class="sm:hidden bg-white border-t border-gray-200">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <!-- Mobile menu with updated colors -->
        <router-link 
          to="/" 
          @click="closeMobileMenu"
          class="block rounded-md px-3 py-2 text-base font-medium text-orange-500 hover:bg-gray-100"
        >
          Home
        </router-link>
        <router-link 
          to="/about" 
          @click="closeMobileMenu"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
        >
          About
        </router-link>
        <router-link 
          to="/technologies" 
          @click="closeMobileMenu"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
        >
          Technologies
        </router-link>
        <router-link 
          to="/solutions" 
          @click="closeMobileMenu"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
        >
          Solutions
        </router-link>
        <router-link 
          to="/news" 
          @click="closeMobileMenu"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
        >
          News
        </router-link>
        <router-link 
          to="/contact" 
          @click="closeMobileMenu"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
        >
          Contact
        </router-link>
      </div>
    </div>
  </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>
