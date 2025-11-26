<script setup>
import HeroSection from '../HeroSection.vue'
import Overview from './Overview.vue'
import Footer from '../Footer.vue'
import Tech from './TechnologiesPage.vue'
import Video from './Video.vue'
import About from './AboutUs.vue'

</script>

<template>
    <div>
        <HeroSection 
            backgroundImage="/src/assets/background.png"
            heading="“Empowering Tomorrow with Clean Energy Today.”"
            :overlayOpacity="0.3"
            minHeight="min-h-[calc(100vh-120px)]"
            headingSize="text-5xl sm:text-6xl"
            textAlign="text-center"
            :showGradient="true"
        />
        <Overview />
        <Tech />
        <Video />
        <About />
        <Footer />
    </div>
</template>