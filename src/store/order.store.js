import { orderService } from '../../services/order.service.js'

export const orderStore = {
    state: {
        currTrip: {
            guests: { children: null, adults: 0 },
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
        getOrders(state) {
            return state.orders
        }

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

        async addOrder(commit, { order }) {
            try {
                order = await orderService.add(order)
                commit({ type: 'addOrder', order })
                return order
            } catch (err) {
                console.log('orderStore: error in addOrder', err)
            }

        },

        async getOrderById({ commit }, { orderId }) {
            return await orderService.getById(orderId)

        }
    }

}
// async addOrder({ commit }, { order }) {
//     console.log('store saving order')
//     const savedOrder = await orderService.save(order)
//     commit({ type: 'addOrder', order: savedOrder })
//     return savedOrder
// },