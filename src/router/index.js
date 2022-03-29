import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Users'
  },
  {
    path: '/Users',
    component: () => import('@/component/Users/UsersMain/main.vue'),
    children: [
      {
        path: '/',
        name: '首页',
        component: () => import('@/pages/Users/index.vue')
      },
      {
        path: '/Dj',
        name: 'Dj',
        component: () => import('@/pages/Users/Dj.vue')
      },
      {
        path: '/Login',
        name: '用户登录',
        component: () => import('@/pages/Users/Login.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
