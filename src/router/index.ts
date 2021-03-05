import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsLayout from '../layouts/TabsLayout.vue'
import ClearLayout from '../layouts/ClearLayout.vue'
import Login from '../views/Login.vue'

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
    path: '/singup/',
    component: ClearLayout,
    children: [
      {
        path: '',
        redirect: '/singup/register'
      },
      {
        path: 'register',
        component: () => import('@/views/SingUp/Register.vue')
      },
      {
        path: 'personal-confirmation',
        component: () => import('@/views/SingUp/PersonalConfirmation.vue')
      },
      {
        path: 'birth',
        component: () => import('@/views/SingUp/Birth.vue')
      },
      {
        path: 'address',
        component: () => import('@/views/SingUp/Address.vue')
      },
      {
        path: 'phone',
        component: () => import('@/views/SingUp/Phone.vue')
      },
      {
        path: 'code',
        component: () => import('@/views/SingUp/Code.vue')
      },
      {
        path: 'ssn',
        component: () => import('@/views/SingUp/SSN.vue')
      },
      {
        path: 'details',
        component: () => import('@/views/SingUp/Details.vue')
      },
      {
        path: 'confirm',
        component: () => import('@/views/SingUp/Confirm.vue')
      },
    ]
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
