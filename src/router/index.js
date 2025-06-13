import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/Courses.vue')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: () => import('../views/Jobs.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    }
  ],
})

export default router
