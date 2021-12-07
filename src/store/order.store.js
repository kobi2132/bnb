import { orderService } from '../../services/order.service.js'

export const orderStore = {
    state: {
        currTrip: {
            guests: { children: null, adults: 1 },
            destination: '',
            dates: {}
        },
        orders: []
    },
    getters: {
        getDest(state) {
            return state.currTrip.destination
        },
        getGuests(state) {
            return state.currTrip.guests
        },
        getDates(state) {
            return state.currTrip.dates
        },
        getCurrTrip(state) {
            return state.currTrip
        },

    },
    mutations: {
        setTrip(state, { trip }) {
            console.log(trip)
            state.currTrip = trip
        },
        setOrders(state, { orders }) {
            state.orders = orders
        },
        addOrder(state, { order }) {
            state.orders.push(order)
        }
    },
    actions: {
        async loadOrders({ commit, state }) {
            const orders = await orderService.query()
            commit({ type: 'setOrders', orders })

        },

        async addOrder({ commit }, { order }) {
            console.log('store saving order')
            const savedOrder = await orderService.save(order)
            commit({ type: 'addOrder', order: savedOrder })
            return savedOrder
        },

        async getOrderById({ commit }, { orderId }) {
            return await orderService.getById(orderId)

        }
    }

}