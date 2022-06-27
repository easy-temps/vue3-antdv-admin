import type { Component } from 'vue'
import { createRouter, createWebHistory } from "vue-router"

export const routes = [
  {
    name: 'index',
    path: '/',
    component: (): Component => import('@/views/dashboard/workplace/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_PUBLIC_PATH),
  routes,
  scrollBehavior: () => {
    return { top: 0 }
  }
})

export default router