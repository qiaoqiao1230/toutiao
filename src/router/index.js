import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Home from '../views/Home.vue'
// eslint-disable-next-line no-unused-vars
import About from '../views/About'
// import Administrator from '../views/Administrator.vue'
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
    }, {
      path: '/ban',
      name: 'Ban',
      component: () => import('../views/Ban')
    }, {
      path: '/administrator ',
      name: 'Administrator ',
      component: () => import('../views/Administrator ')
    }, {
      path: '/role-based',
      name: 'Role-based',
      component: () => import('../views/Role-based')
    }, {
      path: '/present',
      name: 'Present',
      component: () => import('../views/Present')
    }, {
      path: '/gift show',
      name: 'Gift show',
      component: () => import('../views/Gift show')
    }, {
      path: '/probability',
      name: 'Probability',
      component: () => import('../views/Probability')
    }, {
      path: '/virtual Items',
      name: 'Virtual Items',
      component: () => import('../views/Virtual Items')
    }, {
      path: '/personal',
      name: 'Personal',
      component: () => import('../views/Personal')
    }, {
      path: '/dynamic',
      name: 'Dynamic',
      component: () => import('../views/Dynamic')
    }, {
      path: '/hall',
      name: 'Hall',
      component: () => import('../views/Hall')
    }, {
      path: '/withdraw',
      name: 'Withdraw',
      component: () => import('../views/Withdraw')
    }, {
      path: '/room',
      name: 'Room',
      component: () => import('../views/Room')
    }, {
      path: '/dataa',
      name: 'Dataa',
      component: () => import('../views/Dataa')
    }]
  }

]

const router = new VueRouter({
  routes
})

export default router
