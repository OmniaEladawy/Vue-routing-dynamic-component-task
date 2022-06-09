import { createRouter, createWebHistory } from 'vue-router'
import Wrapper from '../Wrapper.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Gallary from '../components/Gallary.vue'
import catchComponent from '../components/catchComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Wrapper
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/gallary',
      name: 'gallay',
      component: Gallary
    },
    {
      path: '/:catchAll(.*)',
      name: 'other',
      component: catchComponent
    },
  ]
})

export default router
