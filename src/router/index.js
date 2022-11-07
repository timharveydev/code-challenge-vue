import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CustomerIndex',
      component: () => import('../views/Customers/CustomerIndex.vue')
    },
    {
      path: '/create',
      name: 'CustomerCreate',
      component: () => import('../views/Customers/CustomerCreate.vue')
    },
    {
      path: '/:id/update',
      name: 'CustomerUpdate',
      component: () => import('../views/Customers/CustomerUpdate.vue')
    }
  ]
})

export default router
