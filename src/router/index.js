import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home,
      'footer-bar': () => import('@/components/FooterBar.vue'),
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/record',
    name: 'record',
    components: {
      default: () => import('@/views/Record.vue'),
      'footer-bar': () => import('@/components/FooterBar.vue'),
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: () => import('@/views/Cart.vue'),
      'footer-bar': () => import('@/components/FooterBar.vue'),
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    components: {
      default: () => import('@/views/Profile.vue'),
      'footer-bar': () => import('@/components/FooterBar.vue'),
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/views/Detail.vue')
  },
  {
    path: '*',
    component: () => import('@/views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
