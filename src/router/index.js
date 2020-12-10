import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Home from '../views/Home.vue'
// eslint-disable-next-line no-unused-vars
import About from '../views/About'
// import { Router } from 'express';
// import Usermod from '../Hi play'
Vue.use(VueRouter)
// export default new Router

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{
      path: '/about',
      name: 'About',
      component: () => import('../views/About')
    }]
  }

]

const router = new VueRouter({
  routes
})

export default router
