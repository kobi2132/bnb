import { orderService } from '../../services/order.service.js'
import { socketService, SOCKET_EVENT_ORDER_ADDED, SOCKET_EVENT_ORDER_ABOUT_YOU } from '../../services/socket.service'

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
            console.log(state.orders);
        },
        setOrderById(state, { order }) {
            state.currOrder = order
            console.log(state.currOrder);
        }
    },
    actions: {
        async loadOrders({ commit, state }) {
            try {
                console.log('mashu')
                const orders = await orderService.query()
                commit({ type: 'setOrders', orders })
                socketService.off(SOCKET_EVENT_ORDER_ADDED)
                socketService.on(SOCKET_EVENT_ORDER_ADDED, order => {
                    console.log('Got order from socket', order);
                    commit({ type: 'addOrder', order })
                })
                socketService.off(SOCKET_EVENT_ORDER_ABOUT_YOU)
                socketService.on(SOCKET_EVENT_ORDER_ABOUT_YOU, order => {
                    console.log('New order!', order);
                    commit({ type: 'addOrder', order })
                })
            } catch (err) {
                console.log('orderStore: Error in loadOrders', err)
                throw err
            }


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
            const order = await orderService.getById(orderId)
            // console.log(order)
            return order
        }
    }

}
    // async addOrder({ commit }, { order }) {
    //     console.log('store saving order')
    //     const savedOrder = await orderService.save(order)
    //     commit({ type: 'addOrder', order: savedOrder })
    //     return savedOrder
    // },