<script setup>
import { ref, computed } from 'vue'
import HeroSection from '../HeroSection.vue'
import Footer from '../Footer.vue'
import NewsCard from './NewsCard.vue'

const newsArticles = ref([
  {
    id: 1,
    category: 'Solar Energy',
    title: 'REGE Launches New Solar Farm in Northern Region',
    description: 'Our latest solar installation will generate clean electricity for over 10,000 homes, reducing carbon emissions by 15,000 tons annually.',
    date: 'December 5, 2025',
    dateValue: new Date('2025-12-05'),
    image: '/src/assets/news/solarpanel.jpg'
  },
  {
    id: 2,
    category: 'Wind Energy',
    title: 'Record-Breaking Wind Turbine Efficiency Achieved',
    description: 'REGE\'s innovative wind turbine design achieves 47% efficiency, setting new industry standards for renewable energy generation.',
    date: 'November 28, 2025',
    dateValue: new Date('2025-11-28'),
    image: '/src/assets/news/windturbin.jpg'
  },
  {
    id: 3,
    category: 'Hydro Energy',
    title: 'Sustainable Hydropower Project Completed',
    description: 'Our new hydroelectric facility provides reliable clean energy while preserving local ecosystems and wildlife habitats.',
    date: 'November 15, 2025',
    dateValue: new Date('2025-11-15'),
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'Solar Energy',
    title: 'Solar Panel Innovation Breakthrough',
    description: 'New solar panel technology increases energy conversion efficiency by 30%, making solar power more accessible and affordable.',
    date: 'October 20, 2025',
    dateValue: new Date('2025-10-20'),
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop'
  },
  {
    id: 5,
    category: 'Wind Energy',
    title: 'Offshore Wind Farm Construction Begins',
    description: 'REGE breaks ground on largest offshore wind farm project, expected to power 500,000 homes with clean energy.',
    date: 'September 10, 2025',
    dateValue: new Date('2025-09-10'),
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&auto=format&fit=crop'
  },
  {
    id: 6,
    category: 'Hydro Energy',
    title: 'Smart Hydro Technology Deployed',
    description: 'Implementing AI-powered systems to optimize hydroelectric power generation while protecting aquatic environments.',
    date: 'August 5, 2025',
    dateValue: new Date('2025-08-05'),
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&auto=format&fit=crop'
  }
])

// Filter and search states
const searchQuery = ref('')
const selectedCategory = ref('All')
const sortBy = ref('newest')

// Available categories
const categories = ['All', 'Solar Energy', 'Wind Energy', 'Hydro Energy']

// Computed filtered and sorted articles
const filteredArticles = computed(() => {
  let filtered = newsArticles.value

  // Filter by category
  if (selectedCategory.value !== 'All') {
    filtered = filtered.filter(article => article.category === selectedCategory.value)
  }

  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(article => 
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query)
    )
  }

  // Sort articles
  const sorted = [...filtered]
  if (sortBy.value === 'newest') {
    sorted.sort((a, b) => b.dateValue - a.dateValue)
  } else if (sortBy.value === 'oldest') {
    sorted.sort((a, b) => a.dateValue - b.dateValue)
  } else if (sortBy.value === 'title') {
    sorted.sort((a, b) => a.title.localeCompare(b.title))
  }

  return sorted
})
</script>

<template>
  <div>
    <HeroSection 
      backgroundImage="/src/assets/news/heronews.jpg"
      heading="Latest News & Updates"
      subheading="Stay informed about renewable energy innovations and REGE's achievements"
      :overlayOpacity="0.5"
      minHeight="min-h-[calc(100vh-120px)]"
      headingSize="text-5xl sm:text-6xl"
      textAlign="text-center"
      :showGradient="true"
    />

    <!-- News Content Section -->
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

            <!-- Sort By Dropdown -->
            <div class="w-full md:w-48">
              <select
                v-model="sortBy"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title (A-Z)</option>
              </select>
            </div>
          </div>

          <!-- Category Filter Buttons -->
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

          <!-- Results Count -->
          <div class="text-sm text-gray-600">
            Showing {{ filteredArticles.length }} article{{ filteredArticles.length !== 1 ? 's' : '' }}
          </div>
        </div>

        <!-- News Grid -->
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
                REGE Wins International Sustainability Award 2025
              </h3>
              <p class="text-gray-600 text-base leading-relaxed mb-6">
                We are honored to receive the Global Green Energy Leadership Award, recognizing our commitment to innovation, environmental stewardship, and sustainable development across all our renewable energy projects.
              </p>
              <button class="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Read Full Story
              </button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop" 
                alt="Award ceremony"
                class="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
