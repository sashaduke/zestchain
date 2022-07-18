import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import CreatePromo from '@/views/CreatePromo.vue'
import Relayers from '@/views/Relayers.vue'

const routerHistory = createWebHistory()
const routes = [
  {
    path: '/',
    component: Index,
  },
  { path: '/createPromo', component: CreatePromo },
  { path: '/relayers', component: Relayers },
]

const router = createRouter({
  history: routerHistory,
  routes,
})

export default router
