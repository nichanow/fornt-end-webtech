import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/authenticate/Login'
import Logout from '@/views/authenticate/Logout'
import Register from '@/views/authenticate/Register'
import Admin from '@/views/users/Admin'
import Customer from '@/views/users/Customer'

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
    path: '/customer',
    name: 'Customer',
    component: Customer
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
