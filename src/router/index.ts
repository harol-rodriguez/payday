import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsLayout from '../layouts/TabsLayout.vue'
import ClearLayout from '../layouts/ClearLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home/'
  },
  {
    path: '/home/',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/user/',
    component: ClearLayout,
    children: [
      {
        path: 'login',
        component: () => import('@/views/Login.vue')
      },
      {
        path: 'register',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'register2',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  },
  {
    path: '/tabs/',
    component: TabsLayout,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
