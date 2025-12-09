<template>
  <section class="bg-white py-16 px-6 lg:px-8">
    <div class="max-w-screen-2xl mx-auto">
      <!-- Header -->
      <div class="mb-12">
        <p class="text-blue-600 text-sm font-semibold tracking-wide uppercase mb-2">
          REGE - RENEWABLE ENERGY
        </p>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          What we do
        </h2>
        <div class="flex flex-col md:flex-row gap-8 md:gap-20 items-start">
          <!-- content -->
          <div class="w-full md:w-3/5">
            <p class="text-gray-600 text-base leading-relaxed mb-8">
              At REGE, we believe that clean energy is the foundation of a sustainable future.<br><br>
              We focus on creating accessible and innovative renewable energy solutions — from education to real-world applications — empowering individuals and businesses to join the transition toward a greener earth.
            </p>
            <img 
              src="../../assets/solar.png" 
              alt="Solar panel installation" 
              class="rounded-2xl shadow-lg object-cover w-full"
            />
          </div>
          
          <!-- Grid layout for cards -->
            <div class="w-full md:w-2/5 grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-8">
            <!-- Development Card -->
            <div class="flex flex-col">
              <img 
              src="../../assets/additional/carbon.png" 
              alt="Carbon icon" 
              class="mb-4 w-12 h-12 object-contain"
              />
              <p class="font-bold text-black text-lg mb-2">Development</p>
              <p class="text-gray-600 text-base leading-relaxed mb-4 flex-grow">
              Building the Future of Renewable Energy, One Project at a Time
              </p>
              <router-link to="/solutions#development">
              <button class="bg-[#A4640A] text-white px-8 py-2 rounded-lg font-semibold hover:bg-[#8B5308] transition-colors w-full">
              Learn More
              </button>
              </router-link>
            </div>
            
            <!-- Construction Card -->
            <div class="flex flex-col">
              <img 
              src="../../assets/additional/construction.png" 
              alt="Construction icon" 
              class="mb-4 w-12 h-12 object-contain"
              />
              <p class="font-bold text-black text-lg mb-2">Construction</p>
              <p class="text-gray-600 text-base leading-relaxed mb-4 flex-grow">
              Turning Clean Energy Designs into Reality.
              </p>
              <router-link to="/solutions#construction">
              <button class="bg-[#A4640A] text-white px-8 py-2 rounded-lg font-semibold hover:bg-[#8B5308] transition-colors w-full">
                Learn More 
              </button>
              </router-link>
            </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
