<script setup>
import HeroSection from '../HeroSection.vue'
import { ref } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  telephone: '',
  email: '',
  message: ''
})

const submitForm = () => {
  console.log('Form submitted:', form.value)
  // Add your form submission logic here
  alert('Thank you for contacting us! We will get back to you soon.')
}
</script>

<template>
  <div>
    <HeroSection 
      backgroundImage="/src/assets/contact/herocontact.jpg"
      heading="“Get In Touch”"
      :overlayOpacity="0.5"
      minHeight="min-h-[calc(100vh-120px)]"
      headingSize="text-5xl sm:text-6xl"
      textAlign="text-center"
      :showGradient="true"
    />

    <!-- Contact Form Section -->
    <section class="bg-gray-50 py-16 px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          
          <p class="text-gray-600 text-base leading-relaxed mb-8">
            We're here to support your journey toward clean energy.<br>
            Whether you have questions, project ideas, or partnership<br>
            opportunities let's work together to build a greener future.
          </p>

          <!-- Our Location Button -->
          <a 
            href="https://maps.app.goo.gl/JRCwnfEsDUZ3ySRA8" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-lg mb-8 transition-colors"
          >
            Our Location
          </a>

          <!-- Contact Form -->
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- First Name and Last Name -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="block text-sm text-gray-600 mb-2">
                  First Name*
                </label>
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full border-b-2 border-yellow-600 bg-transparent py-2 px-0 text-gray-900 focus:outline-none focus:border-yellow-700 transition-colors"
                />
              </div>
              <div>
                <label for="lastName" class="block text-sm text-gray-600 mb-2">
                  Last Name*
                </label>
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full border-b-2 border-yellow-600 bg-transparent py-2 px-0 text-gray-900 focus:outline-none focus:border-yellow-700 transition-colors"
                />
              </div>
            </div>

            <!-- Telephone and Email -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="telephone" class="block text-sm text-gray-600 mb-2">
                  Telephone*
                </label>
                <input
                  id="telephone"
                  v-model="form.telephone"
                  type="tel"
                  required
                  class="w-full border-b-2 border-yellow-600 bg-transparent py-2 px-0 text-gray-900 focus:outline-none focus:border-yellow-700 transition-colors"
                />
              </div>
              <div>
                <label for="email" class="block text-sm text-gray-600 mb-2">
                  Email*
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full border-b-2 border-yellow-600 bg-transparent py-2 px-0 text-gray-900 focus:outline-none focus:border-yellow-700 transition-colors"
                />
              </div>
            </div>

            <!-- Message Textarea -->
            <div>
              <label for="message" class="block text-sm text-gray-600 mb-2">
                How can we help?
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                class="w-full border-2 border-gray-300 rounded-lg bg-white py-3 px-4 text-gray-900 focus:outline-none focus:border-yellow-600 transition-colors resize-none"
                placeholder="Tell us about your project or inquiry..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-end">
              <button
                type="submit"
                class="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <!-- Contact Information Cards -->
        <div class="grid md:grid-cols-3 gap-6 mt-12">
          <!-- Email Card -->
          <div class="bg-white rounded-xl p-6 shadow-lg text-center">
            <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Email Us</h3>
            <p class="text-gray-600 text-sm">rege@example.com</p>
          </div>

          <!-- Phone Card -->
          <div class="bg-white rounded-xl p-6 shadow-lg text-center">
            <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Call Us</h3>
            <p class="text-gray-600 text-sm">+62 ***-****-****</p>
          </div>

          <!-- Location Card -->
          <div class="bg-white rounded-xl p-6 shadow-lg text-center">
            <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Visit Us</h3>
            <p class="text-gray-600 text-sm">109 Wall Street<br>Manhattan, NY 10006</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
