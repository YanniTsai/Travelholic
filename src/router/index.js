import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  },
  {
    path: '/',
    component: () => import('../views/front/Layout.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('../views/front/Home.vue')
      },
      {
        path: 'products',
        component: () => import('../views/front/Products.vue')
      },
      {
        path: 'products/:productId',
        component: () => import('../views/front/ProductInfo.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/front/Cart.vue')
      },
      {
        path: 'order',
        component: () => import('../views/front/OrderInfo.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/front/Checkout.vue')
      },
      {
        path: 'finishorder',
        component: () => import('../views/front/FinishOrder.vue')
      },
      {
        path: 'orderhistory',
        component: () => import('../views/front/OrderHistory.vue')
      }
    ]
  },
  {
    path: '/adminLogin',
    component: () => import('../views/admin/Login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/admin/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/Admin_Products')
      },
      {
        path: 'orders',
        component: () => import('../views/admin/Admin_Orders')
      },
      {
        path: 'coupons',
        component: () => import('../views/admin/Admin_Coupons')
      },
      {
        path: 'articles',
        component: () => import('../views/admin/Admin_Articles')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
