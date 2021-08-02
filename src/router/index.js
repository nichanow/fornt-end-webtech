import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../views/Header'
import Itembar from '@/views/Bar'
import Profile from '@/views/Profile'
import Point from '@/views/Point'
import Mailbox from '@/views/Mailbox'
import Signup from '@/views/SignUp'

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
    path: '/point',
    name: 'Point',
    component: Point
  },
  {
    path: '/mailbox',
    name: 'mailbox',
    component: Mailbox
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
