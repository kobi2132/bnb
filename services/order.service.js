import { storageService } from "./async-storage.service";
import { httpService } from './http.service'
// import { socketService, SOCKET_EVENT_REVIEW_ADDED } from './socket.service'
import { utilService } from "./utils.service";

const KEY = 'ordersDB'

const gOrders = []

export const orderService = {
    add,
    query,
    getById
}


async function query(filterBy) {
    var queryStr = (!filterBy) ? '' : `?id=${filterBy._id}`
    return httpService.get(`order${queryStr}`)
    // return httpService.get('order')
}

async function add(order) {
    const addedOrder = await httpService.post(`order`, order)
    return addedOrder
}

function getById(orderId) {
    return httpService.get(`order/${orderId}`)
}