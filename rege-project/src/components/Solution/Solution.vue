<script setup>
import HeroSection from '../HeroSection.vue'
import Footer from '../Footer.vue'
import Development from './Development.vue';
import Construction from './Construction.vue';
import Offer from './Offer.vue';

</script>

<template>
    <div>
        <HeroSection 
            backgroundImage="/src/assets/solution/SolutionHero.png"
            heading="“Transforming ideas into real renewable energy action.”"
            :overlayOpacity="0.3"
            minHeight="min-h-[calc(100vh-120px)]"
            headingSize="text-5xl sm:text-[60px]"
            textAlign="text-left"
            :showGradient="true"
        />
        <Development />
        <Construction />
        <Offer />
    </div>
</template>