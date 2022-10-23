import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from "@/views/home/HomeView.vue"
import Login from "@/views/login/Login.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name:'Login',
    component:Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
