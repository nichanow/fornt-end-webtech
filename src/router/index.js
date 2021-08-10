import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/authenticate/Login'
import Logout from '@/views/authenticate/Logout'
import Register from '@/views/authenticate/Register'
import Admin from '@/views/users/admin/Admin'
import LeaderBoard from '@/views/users/admin/Leaderboard'
import AdminStockPrize from '@/views/users/admin/Prize'
import Customer from '@/views/users/customer/Customer'
import CustomerHistoryRecivedPoints from '@/views/users/customer/GetPointsHistory'
import CustomerProfile from '@/views/users/customer/Profile'
import CustomerReward from '@/views/users/customer/Reward'
import CustomerHistoryUsedPoints from '@/views/users/customer/UsedPointsHistory'
import EditItem from '@/views/stock/EditItem'
import AddItem from '@/views/stock/AddItem'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/leader-board',
    name: 'LeaderBoard',
    component: LeaderBoard
  },
  {
    path: '/admin/stock-prize',
    name: 'AdminStockPrize',
    component: AdminStockPrize
  },
  {
    path: '/customer',
    name: 'Customer',
    component: Customer
  },
  {
    path: '/customer/history-recived-points',
    name: 'CustomerHistoryReceivedPoints',
    component: CustomerHistoryRecivedPoints
  },
  {
    path: '/customer/history-used-points',
    name: 'CustomerHistoryUsedPoints',
    component: CustomerHistoryUsedPoints
  },
  {
    path: '/customer/profile',
    name: 'CustomerProfile',
    component: CustomerProfile
  },
  {
    path: '/customer/reward',
    name: 'CustomerReward',
    component: CustomerReward
  },
  {
    path: '/admin/stock/add-item',
    name: 'AddItemInStock',
    component: AddItem
  },
  {
    path: '/admin/stock/:id/edit-item',
    name: 'EditItemInStock',
    component: EditItem
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
