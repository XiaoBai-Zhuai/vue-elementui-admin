import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Login from '../components/auth/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index,
    },
    {
      path: '/login',
      component: Login
    },
  ]
})
