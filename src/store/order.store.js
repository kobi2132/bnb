import { orderService } from '../../services/order.service.js'

export const orderStore = {
    state: {
        currTrip: {
            guests: { children: null, adults: 1 },
            destination: '',
            dates: {}
        },
        currOrder: {},
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
        getCurrOrder(state) {
            console.log(state.currOrder);
            return state.currOrder
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
        },
        getOrderById(state, { order }) {
            state.currOrder = order
            console.log(state.currOrder);
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
            await orderService.getById(orderId).then((order) => {
                commit({ type: 'getOrderById', order })
            })
        }
    }

}