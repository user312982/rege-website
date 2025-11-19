<template>
  <section class="relative">
    <!-- Top half: White background -->
    <div class="bg-white py-8 px-6 lg:px-8">
      <div class="max-w-screen-2xl mx-auto h-32"></div>
    </div>
    
    <!-- Bottom half: Blue background -->
    <div class="bg-[#051C2F] py-8 px-6 lg:px-8">
      <div class="max-w-screen-2xl mx-auto">
        <!-- Video positioned to span both sections -->
        <div class="flex justify-center -mt-48">
          <video class="h-96 rounded-lg shadow-2xl" controls>
            <source src="../../assets/video/what-we-do.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="h-32"></div>
      </div>
    </div>
  </section>
</template>
