import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsLayout from '../layouts/TabsLayout.vue'
import Login from '../views/Login.vue'
import Register from '../views/SingUp/Register.vue'

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
    path: '/login',
    component: Login,
  },
  {
    path: '/singup',
    component: Register,
  },
  {
    path: '/menu/',
    component: TabsLayout,
    children: [
      {
        path: '',
        redirect: '/menu/index'
      },
      {
        path: 'index',
        component: () => import('@/views/Menu.vue')
      },
      {
        path: 'getcash',
        component: () => import('@/views/GetCash/PaymentAdvance.vue')
      },
      {
        path: 'getcash/confirm',
        component: () => import('@/views/GetCash/Confirm.vue')
      },
      {
        path: 'getcash/thanks',
        component: () => import('@/views/GetCash/Thanks.vue')
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
