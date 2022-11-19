import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from "@/views/home/HomeView.vue"
import Login from "@/views/login/Login.vue"
import Register from "@/views/register/Register.vue"
import GoodsList from "@/views/list/GoodsList.vue"
import GoodDetail from "@/views/list/GoodDetail.vue"
import GoodCar from "@/views/list/GoodCar.vue"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/goodsList',
    name: 'GoodsList',
    component: GoodsList
  },
  {
    path: '/goodDetail',
    name: 'GoodDetail',
    component: GoodDetail
  },
  {
    path: '/goodCar',
    name: "GoodCar",
    component: GoodCar
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
