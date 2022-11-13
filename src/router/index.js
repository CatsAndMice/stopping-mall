import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from "@/views/home/HomeView.vue"
import Login from "@/views/login/Login.vue"
import Register from "@/views/register/Register.vue"
import GoodsList from "@/views/list/GoodsList.vue"
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
  },
  {
    path: '/register',
    name:'Register',
    component:Register
  },
  {
    path: '/goodsList',
    name:'GoodsList',
    component:GoodsList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
