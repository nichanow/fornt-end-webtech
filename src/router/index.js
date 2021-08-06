import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../views/Header'
import Itembar from '@/views/Bar'
import Profile from '@/views/Profile'
import Point from '@/views/Point'
import Cart from '@/views/Cart'
import Signup from '@/views/SignUp'
import Admin from '@/views/Admin'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Header',
    component: Header
  },
  {
    path: '/itembar',
    name: 'Bar',
    component: Itembar
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/point',
    name: 'Point',
    component: Point
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
