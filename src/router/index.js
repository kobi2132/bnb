import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../pages/home-page.vue'
import about from '../pages/about.vue'
import stayApp from '../pages/stay-app.vue'
import stayDetails from '../pages/stay-details.vue'
import logIn from '../pages/log-in.vue'


Vue.use(VueRouter)

const routes = [{
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
    },
    {
        path: '/login',
        name: 'Login',
        component: logIn
    }
]

const router = new VueRouter({
    routes
})

export default router