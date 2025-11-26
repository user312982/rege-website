<template>
  <div class="min-h-screen bg-gray-50">
    <section class="w-full py-20">
      <div class="max-w-6xl mx-auto px-6">
        <TabGroup>
          <div class="flex justify-between items-center relative mb-16">
            <div class="absolute top-1/2 left-0 w-full h-[2px] bg-yellow-700/40 -z-10"></div>

            <TabList class="flex justify-between w-full">
              <Tab
                v-for="(milestone, idx) in milestones"
                :key="milestone.year"
                v-slot="{ selected }"
                as="template"
              >
                <button class="flex flex-col items-center space-y-3">
                  <div 
                    :class="[
                      'w-5 h-5 rounded-full transition-all duration-200',
                      selected ? 'bg-yellow-700 scale-125' : 'bg-yellow-700/50 hover:bg-yellow-700'
                    ]"
                  ></div>
                  <span 
                    :class="[
                      'font-medium transition-colors',
                      selected ? 'text-gray-900 font-bold' : 'text-gray-600'
                    ]"
                  >
                    {{ milestone.year }}
                  </span>
                </button>
              </Tab>
            </TabList>
          </div>

          <TabPanels>
            <TabPanel
              v-for="milestone in milestones"
              :key="milestone.year"
              :class="[
                'transition-opacity duration-300',
                'focus:outline-none'
              ]"
            >
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div class="bg-white shadow-xl rounded-xl p-6 border border-gray-100 max-w-sm">
                  <p class="font-semibold text-gray-700 mb-2">
                    {{ milestone.year }}
                  </p>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    {{ milestone.description }}
                  </p>
                </div>

                <div class="rounded-xl overflow-hidden shadow-xl">
                  <img
                    :src="milestone.image"
                    :alt="milestone.year"
                    class="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </section>

    <section class="w-full py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 class="text-2xl font-bold text-yellow-800 mb-4">
            Our Vision
          </h2>
          <p class="text-gray-600 leading-relaxed">
            To accelerate the global transition to renewable energy by delivering
            innovative, reliable, and sustainable development and construction
            solutions that create lasting value for our clients, communities, and
            the planet.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p class="text-gray-600 leading-relaxed">
            To be the world's most trusted partner in renewable energy development
            and construction, recognized for our unwavering commitment to
            innovation, excellence, and environmental stewardship in building a
            carbon-neutral future.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { ref } from 'vue'

const milestones = ref([
{
    year: 1990,
    description: 'REGE was founded with a pioneering vision to revolutionize renewable energy solutions, establishing the foundation for sustainable power generation.',
    image: '/src/assets/about/lamp.png'
  },
  {
    year: 2000,
    description: 'Launched first large-scale solar farm project, demonstrating the viability of commercial renewable energy and setting industry standards.',
    image: '/src/assets/sustainability.png'
  },
  {
    year: 2005,
    description: 'REGE (Renewable Energy for a Greener Earth) received the World\'s Best Clean Electricity Award, recognizing its breakthrough innovation in sustainable power generation and environmental impact.',
    image: '/src/assets/background.png'
  },
  {
    year: 2015,
    description: 'Expanded globally with wind energy projects across multiple continents, powering millions of homes with clean, renewable electricity.',
    image: '/src/assets/technologies/wind.png'
  },
  {
    year: 2020,
    description: 'Achieved carbon neutrality milestone and launched advanced hydro projects, cementing leadership in integrated renewable energy solutions.',
    image: '/src/assets/technologies/hydro.png'
  }
])
</script>
