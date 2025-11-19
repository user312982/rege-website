<script setup>
import Hero from './home/HeroSection.vue'
import Overview from './home/Overview.vue'
import Footer from './Footer.vue'
import Tech from './home/Technologies.vue'
import Video from './home/Video.vue'
import About from './home/AboutUs.vue'

</script>

<template>
    <div>
        <Hero 
            backgroundImage="https://example.com/hero.jpg"
            :overlayOpacity="0.7"
        />
        <Overview />
        <Tech />
        <Video />
        <About />
        <Footer />
    </div>
</template>