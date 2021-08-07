import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../views/Header'
import Itembar from '@/views/Bar'
import Profile from '@/views/Profile'
import Point from '@/views/Point'
import UserHistory from '@/views/UserHistory'
import Signup from '@/views/SignUp'
import Admin from '@/views/Admin'
import Prize from '@/views/Prize'
import Leaderboard from '@/views/Leaderboard'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Header',
    component: Header
  },
  {
    path: '/prize',
    name: 'Prize',
    component: Prize
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: Leaderboard
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
    path: '/userHistory',
    name: 'UserHistory',
    component: UserHistory
  },
  {
    path: '/Point',
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
