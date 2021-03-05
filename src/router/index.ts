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
    path: '/signup/',
    component: ClearLayout,
    children: [
      {
        path: '',
        redirect: '/signup/register'
      },
      {
        path: 'register',
        component: () => import('@/views/SignUp/Register.vue')
      },
      {
        path: 'personal-confirmation',
        component: () => import('@/views/SignUp/PersonalConfirmation.vue')
      },
      {
        path: 'birth',
        component: () => import('@/views/SignUp/Birth.vue')
      },
      {
        path: 'address',
        component: () => import('@/views/SignUp/Address.vue')
      },
      {
        path: 'phone',
        component: () => import('@/views/SignUp/Phone.vue')
      },
      {
        path: 'code',
        component: () => import('@/views/SignUp/Code.vue')
      },
      {
        path: 'ssn',
        component: () => import('@/views/SignUp/SSN.vue')
      },
      {
        path: 'details',
        component: () => import('@/views/SignUp/Details.vue')
      },
      {
        path: 'confirm',
        component: () => import('@/views/SignUp/Confirm.vue')
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
