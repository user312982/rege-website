<script setup>
import Hero from './home/HeroSection.vue'
import Overview from './home/Overview.vue'
import Footer from './Footer.vue';
</script>

<template>
    <div>
        <Hero 
            backgroundImage="https://example.com/hero.jpg"
            :overlayOpacity="0.7"
        />
        <Overview />
        <Footer />
    </div>
</template>