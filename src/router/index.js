import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../pages/home-page.vue'
import about from '../pages/about.vue'
import stayApp from '../pages/stay-app.vue'
import stayDetails from '../pages/stay-details.vue'
import logIn from '../pages/log-in.vue'
import host from '../pages/host.vue'
import help from '../pages/help.vue'
import userMessages from '../pages/user-messages.vue'
import userNotifications from '../pages/user-notifications.vue'
import userTrips from '../pages/user-trips.vue'
import userWishList from '../pages/user-wishlist.vue'
import hostDashboard from '../pages/host-dashboard.vue'
import userAccount from '../pages/user-account.vue'


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
    },
    {
        path: '/host',
        name: 'Host',
        component: host
    },
    {
        path: '/help',
        name: 'help',
        component: help
    },
    {
        path: '/messages',
        name: 'User-messages',
        component: userMessages
    },
    {
        path: '/notifications',
        name: 'User-notifications',
        component: userNotifications
    },
    {
        path: '/trips',
        name: 'User-trips',
        component: userTrips
    },
    {
        path: '/wishlist',
        name: 'User-wishlist',
        component: userWishList
    },
    {
        path: '/dashboard',
        name: 'Host-dashboard',
        component: hostDashboard
    },
    {
        path: '/account',
        name: 'User-account',
        component: userAccount
    },



]

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

export default router