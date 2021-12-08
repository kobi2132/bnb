import { storageService } from "./async-storage.service";
import { utilService } from "./utils.service";

const KEY = 'ordersDB'

const gOrders = []
    // const gDemoOrders = [{
    //         "_id": ObjectId("61b08a52dcbbeca56bd8c366"),
    //         "dates": {
    //             "start": "2022-01-06",
    //             "end": "2022-01-07"
    //         },
    //         "guests": {
    //             "children": null,
    //             "adults": 1
    //         },
    //         "createdAt": NumberLong(1638812943485),
    //         "buyer": {
    //             "_id": "61b064aedcbbeca56bcf1738",
    //             "fullname": "Baner Aiton"
    //         },
    //         "stay": {
    //             "_id": "61af1eed3d91ca3df5b407e5",
    //             "name": "Dream House",
    //             "price": 150
    //         },
    //         "hostId": "61b064d3dcbbeca56bcf1df1",
    //         "status": "pending"
    //     },
    //     {
    //         "_id": ObjectId("61b08a52dcbbeca56bd8c366"),
    //         "dates": {
    //             "start": "2022-01-06",
    //             "end": "2022-01-07"
    //         },
    //         "guests": {
    //             "children": null,
    //             "adults": 1
    //         },
    //         "createdAt": NumberLong(1638812943485),
    //         "buyer": {
    //             "_id": "61b064aedcbbeca56bcf1738",
    //             "fullname": "Baner Aiton"
    //         },
    //         "stay": {
    //             "_id": "61af1eed3d91ca3df5b407e5",
    //             "name": "Fly's House",
    //             "price": 150
    //         },
    //         "hostId": "61b064d3dcbbeca56bcf1df1",
    //         "status": "pending"
    //     },
    //     {
    //         "_id": ObjectId("61b08a52dcbbeca56bd8c366"),
    //         "dates": {
    //             "start": "2022-01-06",
    //             "end": "2022-01-07"
    //         },
    //         "guests": {
    //             "children": null,
    //             "adults": 1
    //         },
    //         "createdAt": NumberLong(1638812943485),
    //         "buyer": {
    //             "_id": "61b064aedcbbeca56bcf1738",
    //             "fullname": "Baner Aiton"
    //         },
    //         "stay": {
    //             "_id": "61af1eed3d91ca3df5b407e5",
    //             "name": "Modern House",
    //             "price": 150
    //         },
    //         "hostId": "61b064d3dcbbeca56bcf1df1",
    //         "status": "pending"
    //     },

// ]
// modern fly dream
export const orderService = {
    save,
    query,
    getById
}


async function query() {
    return storageService.query(KEY)
}

function save(order) {
    const savedOrder = order._id ?
        storageService.put(KEY, order) :
        storageService.post(KEY, order)
    console.log('saving order', order)
    return savedOrder
}

function getById(id) {
    return storageService.get(KEY, id)
}