<template>
  <section class="relative">
    <!-- Top half: White background -->
    <div class="bg-[#F5F6F7] py-8 px-6 lg:px-8">
      <div class="max-w-screen-2xl mx-auto h-32"></div>
    </div>
    
    <!-- Bottom half: Blue background -->
    <div class="bg-[#051C2F] py-8 px-6 lg:px-8">
      <div class="max-w-screen-2xl mx-auto">
        <!-- Video positioned to span both sections -->
        <div class="flex justify-center -mt-48">
            <iframe 
            class="w-full max-w-2xl h-96 rounded-lg shadow-2xl" 
            src="https://www.youtube.com/embed/1kUE0BZtTRc" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
        </div>
        <div class="h-32"></div>
      </div>
    </div>
  </section>
</template>
