import type { Component } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import type { MenuDataItem } from './typing'

export const routes: MenuDataItem[] = [
  {
    name: 'index',
    path: '/',
    component: (): Component => import('@/views/dashboard/workplace/index.vue')
  }
]

export const staticRoutes: MenuDataItem[] = []

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_PUBLIC_PATH),
  routes,
  scrollBehavior: () => {
    return { top: 0 }
  }
})

export default router
