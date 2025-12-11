<script setup>
import { ref } from 'vue'
import HeroSection from '../HeroSection.vue'
import Footer from '../Footer.vue'
import NewsCard from './NewsCard.vue'
import { newsArticles as newsData, categories, featuredArticle } from '@/data/newsData.js'
import { useNewsFilter } from '@/composables/useNewsFilter.js'

// Convert imported data to ref
const newsArticles = ref(newsData)

// Use composable for filtering logic
const { searchQuery, selectedCategory, sortBy, filteredArticles } = useNewsFilter(newsArticles)
</script>

<template>
  <div>
    <HeroSection 
      backgroundImage="/src/assets/news/heronews.jpg"
      heading="“Latest News & Updates”"
      :overlayOpacity="0.5"
      minHeight="min-h-[calc(100vh-120px)]"
      headingSize="text-5xl sm:text-6xl"
      textAlign="text-center"
      :showGradient="true"
    />

    <section class="bg-white py-16 px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="mb-12">
          <p class="text-blue-600 text-sm font-semibold tracking-wide uppercase mb-2">
            REGE - RENEWABLE ENERGY
          </p>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            News & Insights
          </h2>
          <p class="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Discover the latest developments in renewable energy technology, industry insights, and REGE's contributions to a sustainable future.
          </p>
        </div>

        <!-- Filter, Search, and Sort Section -->
        <div class="mb-8 space-y-4">
          <!-- Search Bar -->
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1">
              <div class="relative">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search news articles..."
                  class="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg class="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>

            <div class="w-full md:w-48">
              <select
                v-model="sortBy"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title (A-Z)</option>
              </select>
            </div>
          </div>

          <div class="flex flex-wrap gap-3">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              :class="[
                'px-5 py-2 rounded-full font-medium transition-all duration-200',
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              {{ category }}
            </button>
          </div>

          <div class="text-sm text-gray-600">
            Showing {{ filteredArticles.length }} article{{ filteredArticles.length !== 1 ? 's' : '' }}
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <NewsCard
            v-for="article in filteredArticles"
            :key="article.id"
            :category="article.category"
            :title="article.title"
            :description="article.description"
            :date="article.date"
            :image="article.image"
          />
        </div>

        <!-- No Results Message -->
        <div v-if="filteredArticles.length === 0" class="text-center py-16">
          <svg class="mx-auto w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
          <p class="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>

        <!-- Featured Article Section -->
        <div class="mt-16 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 md:p-12">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span class="text-xs font-semibold text-orange-600 uppercase">Featured Story</span>
              <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                {{ featuredArticle.title }}
              </h3>
              <p class="text-gray-600 text-base leading-relaxed mb-6">
                {{ featuredArticle.description }}
              </p>
            </div>
            <div>
              <img 
                :src="featuredArticle.image"
                alt="Award ceremony"
                class="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
