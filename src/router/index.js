import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/TeamView.vue')
  },
  {
    path: '/time',
    name: 'time',
    component: () => import('../views/TimetableView.vue')
  },
  {
    path: '/price',
    name: 'price',
    component: () => import('../views/PriceView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/ContactsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
