import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home/Home.vue'
import About from '../components/about/About.vue'
import Technologies from '../components/Technologies/Technologies.vue'
import Solutions from '../components/Solution/Solution.vue'
import News from '../components/news/News.vue'
import Contact from '../components/contact/Contact.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/technologies', component: Technologies },
    { path: '/solutions', component: Solutions },
    { path: '/news', component: News },
    { path: '/contact', component: Contact },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const element = document.querySelector(to.hash)
                    if (element) {
                        const offset = 80 // Navbar height + spacing
                        const elementPosition = element.getBoundingClientRect().top
                        const offsetPosition = elementPosition + window.pageYOffset - offset
                        
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        })
                    }
                    resolve()
                }, 300)
            })
        } else if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0, behavior: 'smooth' }
        }
    }
})

export default router
