import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path:'/',
    component: HomeView,
  },
  {
    path:'/login',
    component: LoginView,
  },
  {
    path:'/register',
    component: RegisterView,
  }],
})

export default router
