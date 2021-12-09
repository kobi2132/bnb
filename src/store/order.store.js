import { orderService } from '../../services/order.service.js'

export const orderStore = {
    state: {
        currTrip: {
            guests: { children: null, adults: 0 },
            destination: '',
            dates: {}
        },
        currOrder: {},
        orders: [],
        demoOrders: []
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
        },
        getDemoOrders(state) {
            return state.demoOrders
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
        setDemoOrders(state, { demoOrders }) {
            state.demoOrders = demoOrders
        },
        addOrder(state, { order }) {
            state.orders.push(order)
        },
    setOrderById(state, { order }) {
            state.currOrder = order
            console.log(state.currOrder);
        }
    },
    actions: {
        async loadOrders({ commit, state }) {
            const orders = await orderService.query()
            commit({ type: 'setOrders', orders })

        },
        loadDemoOrders({ commit, state }) {
            const demoOrders = orderService.demoQuery()
            commit({ type: 'setDemoOrders', demoOrders })

        },

        async addOrder({ commit }, { order }) {
            try {
                order = await orderService.add(order)
                commit({ type: 'addOrder', order })
                return order
            } catch (err) {
                console.log('orderStore: error in addOrder', err)
            }

        },

        async getOrderById({ commit }, { orderId }) {
            await orderService.getById(orderId).then((order) => {
                commit({ type: 'setOrderById', order })
            })
        }
    }

}
    // async addOrder({ commit }, { order }) {
    //     console.log('store saving order')
    //     const savedOrder = await orderService.save(order)
    //     commit({ type: 'addOrder', order: savedOrder })
    //     return savedOrder
    // },