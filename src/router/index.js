import VueRouter from 'vue-router'
import Vue from 'vue'
import IndexPage from '../pages/index'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
})

export default router
