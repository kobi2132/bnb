import { storageService } from "./async-storage.service";
import { httpService } from './http.service'
// import { socketService, SOCKET_EVENT_REVIEW_ADDED } from './socket.service'
import { utilService } from "./utils.service";

const KEY = 'ordersDB'

const gOrders = []

const gDemoOrders = [{
            // deleted :
            // "_id": ObjectId("61b08a52dcbbeca56bd8c366")
            // "createdAt": NumberLong(1638812943485),
            "_id": "61b08a52dcbbeca56bd8c366",
            "dates": {
                "start": "2022-01-06",
                "end": "2022-01-07"
            },
            "guests": {
                "children": null,
                "adults": 1
            },
            "createdAt": 1638812943485,
            "buyer": {
                "_id": "61b064aedcbbeca56bcf1738",
                "fullname": "Baner Aiton"
            },
            "stay": {
                "_id": "61af1eed3d91ca3df5b407e7",
                "name": "Dream House",
                "price": 150
            },
            "hostId": "61b064d3dcbbeca56bcf1df1",
            "status": "pending"
        },
        {
            "_id": "61b08a52dcbbeca56bd8c367",
            "dates": {
                "start": "2022-01-06",
                "end": "2022-01-07"
            },
            "guests": {
                "children": null,
                "adults": 1
            },
            "createdAt": 1638812943485,
            "buyer": {
                "_id": "61b064aedcbbeca56bcf1738",
                "fullname": "Baner Aiton"
            },
            "stay": {
                "_id": "61af1eed3d91ca3df5b407e5",
                "name": "Fly's House",
                "price": 150
            },
            "hostId": "61b064d3dcbbeca56bcf1df1",
            "status": "pending"
        },
        {
            "_id": "61b08a52dcbbeca56bd8c368",
            "dates": {
                "start": "2022-01-06",
                "end": "2022-01-07"
            },
            "guests": {
                "children": null,
                "adults": 1
            },
            "createdAt": 1638812943485,
            "buyer": {
                "_id": "61b064aedcbbeca56bcf1738",
                "fullname": "Baner Aiton"
            },
            "stay": {
                "_id": "61af1eed3d91ca3df5b407e6",
                "name": "Modern House",
                "price": 150
            },
            "hostId": "61b064d3dcbbeca56bcf1df1",
            "status": "pending"
        },
    ]
    // modern fly dream
export const orderService = {
    add,
    query,
    getById,
    demoQuery
}


async function query(filterBy) {
    var queryStr = (!filterBy) ? '' : `?id=${filterBy._id}`
    return httpService.get(`order${queryStr}`)
        // return httpService.get('order')
}

function demoQuery() {

    return gDemoOrders
        // return httpService.get('order')
}

async function add(order) {
    const addedOrder = await httpService.post(`order`, order)
    return addedOrder
}

function getById(orderId) {
    return httpService.get(`order/${orderId}`)
}