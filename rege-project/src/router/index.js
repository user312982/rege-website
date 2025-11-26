import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home/Home.vue'
import About from '../components/about/About.vue'
import Technologies from '../components/Technologies/Technologies.vue'
import Solutions from '../components/Solution/Solution.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/technologies', component: Technologies },
    { path: '/solutions', component: Solutions },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
