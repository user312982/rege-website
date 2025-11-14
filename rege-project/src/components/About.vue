<script setup>
import Hero from './about/HeroSection.vue'
import AboutDescription from './about/AboutDescription.vue'
import Footer from './Footer.vue';
</script>

<template>
    <div>
        <Hero 
            backgroundImage="../../assets/about.png"
            :overlayOpacity="0.7"
        />
    </div>
    <AboutDescription />
    <Footer />
</template>