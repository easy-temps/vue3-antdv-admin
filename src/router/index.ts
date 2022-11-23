import type { Component } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import type { MenuDataItem } from './typing'
import UserLayout from '@/layouts/user-layout.vue'

export const routes: MenuDataItem[] = [
  {
    name: 'index',
    path: '/',
    component: (): Component => import('@/views/dashboard/workplace/index.vue'),
  },
]

export const staticRoutes: MenuDataItem[] = [
  {
    path: '/user',
    name: 'user',
    meta: { hideInMenu: true, title: 'pages.layouts.userLayout.title' },
    component: UserLayout,
    children: [
      {
        path: '/user/login',
        name: 'login',
        meta: { title: 'pages.login.accountLogin.tab' },
        component: () => import('@/views/user/login.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_PUBLIC_PATH),
  routes: staticRoutes,
  scrollBehavior: () => {
    return { top: 0 }
  },
})

export default router
