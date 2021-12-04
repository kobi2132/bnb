import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../pages/home-page.vue'
import about from '../pages/about.vue'
import stayApp from '../pages/stay-app.vue'
import stayDetails from '../pages/stay-details.vue'


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
  },
  {
    path: '/stay/:stayId',
    name: 'stay',
    component: stayDetails
  }
]

const router = new VueRouter({
  routes, scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
