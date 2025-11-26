<script setup>
import HeroSection from '../HeroSection.vue'
import Offer from '../Technologies/Offer.vue'
import Footer from '../Footer.vue'
import Tech from '../Technologies/TechnologiesCategory.vue'
import reach from '../Technologies/reach.vue'
</script>

<template>
    <div>
        <HeroSection 
            backgroundImage="/src/assets/heroTech.png"
            heading="“Technology drives the future of clean energy.”"
            :overlayOpacity="0.3"
            minHeight="min-h-[calc(100vh-120px)]"
            headingSize="text-5xl sm:text-6xl"
            textAlign="text-center"
            :showGradient="true"
        />
        <Offer />
        <Tech />
        <reach />
        <Footer />
    </div>
</template>