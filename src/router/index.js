import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/fasilitas',
      name: 'fasilitas',
      component: () => import('../views/FacilitiesView.vue')
    },
    {
      path: '/hiburan',
      name: 'hiburan',
      component: () => import('../views/EntertainmentsView.vue')
    },
    {
      path: '/pesan-tiket',
      name: 'pesan-tiket',
      component: () => import('../views/TicketBookingView.vue')
    },
    {
      path: '/tukar-kupon',
      name: 'tukar-kupon',
      component: () => import('../views/CouponExchangeView.vue')
    },
    {
      path: '/hubungi-kami',
      name: 'hubungi-kami',
      component: () => import('../views/ContactUsView.vue')
    },,
    {
      path: '/masuk',
      name: 'masuk',
      component: () => import('../views/LoginView.vue')
    },,
    {
      path: '/daftar',
      name: 'daftar',
      component: () => import('../views/RegisterView.vue')
    },
  ]
})

export default router
