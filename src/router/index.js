import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../pages/home-page.vue'
import about from '../pages/about.vue'
import stayApp from '../pages/stay-app.vue'

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
  },
  {
    path: '/explore',
    name: 'Explore',
    component: stayApp
  }
]

const router = new VueRouter({
  routes
})

export default router
