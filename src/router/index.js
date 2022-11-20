import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from "@/views/home/HomeView.vue"
import Login from "@/views/login/Login.vue"
import Register from "@/views/register/Register.vue"
import GoodsList from "@/views/list/GoodsList.vue"
import GoodDetail from "@/views/list/GoodDetail.vue"
import GoodCar from "@/views/list/GoodCar.vue"
import UserCenter from "@/views/user/UserCenter.vue"
import OrderTable from "@/views/user/OrderTable.vue"
import OrderData from "@/views/user/OrderData.vue"
import ClearPage from "@/views/user/ClearPage.vue"
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
  },
  {
    path: '/clearPage',
    name: "ClearPage",
    component: ClearPage
  },
  {
    path: '/userCenter',
    name: 'UserCenter',
    component: UserCenter,
    children: [
      {
        path: '/orderTable',
        name: 'OrderTable',
        component: OrderTable
      },
      {
        path: '/orderData',
        name: 'OrderData',
        component: OrderData
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
