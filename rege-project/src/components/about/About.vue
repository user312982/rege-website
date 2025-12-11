<script setup>
import HeroSection from '../HeroSection.vue'
import AboutDescription from './AboutDescription.vue'
import AboutMission from './AboutMission.vue'
import Footer from '../Footer.vue'
</script>

<template>
    <div>
        <HeroSection 
            backgroundImage="/src/assets/about.png"
            heading="“We are committed to empowering communities with clean energy knowledge and technology to create a sustainable future for all.”"
            :overlayOpacity="0.3"
            minHeight="min-h-[calc(100vh-120px)]"
            headingSize="text-5xl sm:text-6xl"
            textAlign="text-center"
            :showGradient="true"
        />
        <AboutDescription />
        <AboutMission />
    </div>
</template>