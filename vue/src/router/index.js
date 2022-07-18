import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import CreatePromo from '@/views/CreatePromo.vue'

const routerHistory = createWebHistory()
const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/createPromo',
    component: CreatePromo
  }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
