import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../pages/home-page.vue'
import about from '../pages/about.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage
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
