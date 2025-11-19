<template>
  <section class="bg-white py-16 px-6 lg:px-8">
    <div class="max-w-screen-2xl mx-auto">
      <!-- Header -->
      <div class="mb-12">
        <p class="text-blue-600 text-sm font-semibold tracking-wide uppercase mb-2">
          REGE - RENEWABLE ENERGY
        </p>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Technologies
        </h2>
        
        <TabGroup>
          <div class="grid md:grid-cols-2 gap-40">
            <div>
              <p class="text-black">REGE develops innovative renewable energy technologies that power a cleaner and more sustainable future.</p>
              <br><br/>
              <TabList class="flex space-x-4">
                <Tab  
                  v-for="category in Object.keys(categories)"
                  as="template"
                  :key="category"
                  v-slot="{ selected }"
                >
                  <button
                    :class="[
                      'text-24px text-black font-bold transition duration-150 border-b-2 ',
                      selected ? 'border-black' : 'hover:border-black'
                    ]"
                  >
                    {{category}}
                  </button> 
                </Tab>
              </TabList>
            </div>
        
            <div>
              <TabPanels class="mt-6">
                <TabPanel 
                  v-for="(posts, idx) in Object.values(categories)"
                  :key="idx"
                  :class="[
                    'rounded-xl bg-white p-3',
                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  ]"
                >
                  <img 
                    :src="posts.image" 
                    :alt="posts.title"
                    class="w-full h-auto rounded-lg object-cover"
                  />
                </TabPanel>
              </TabPanels>
            </div>
          </div>
        </TabGroup>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { ref } from 'vue'

const categories = ref({
  'Wind': {
    title: 'Wind Energy',
    image: new URL('../../assets/technologies/wind.png', import.meta.url).href
  },
'Solar': {
    title: 'Solar Energy',
    image: new URL('../../assets/technologies/solar.png', import.meta.url).href
  },
  'Hydro': {
    title: 'Hydro Energy',
    image: new URL('../../assets/technologies/hydro.png', import.meta.url).href
  }
})
</script>
