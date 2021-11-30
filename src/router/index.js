import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home.vue'
import about from '../pages/about.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/about',
    name: 'About',
   component: about
  }
]

const router = new VueRouter({
  routes
})

export default router
