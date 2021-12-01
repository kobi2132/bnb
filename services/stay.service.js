import { storageService } from '../services/async-storage.service.js'
import { utilService } from "../services/utils.service.js"
const KEY = 'stayDB'


export const stayService = {
    query,
    getById,
    remove,
    save
}


const gStays = [{
    "_id": "907978797",
    "name": "Charming Cottage",
    "imgUrls": [],
    "price": 80,
    "summary": "Charming cottage with three bedrooms",
    "capacity": 8,
    "amenities": [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking Allowed",
        "Pets Allowed"
    ],
    "host": {
        "_id": "u101",
        "fullname": "Arik Biton",
        "imgUrl": ""
    },
    "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "address": "Porto, Portugal",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [{
        "id": "madeId",
        "txt": "Very helpful hosts. Cooked traditional...",
        "rate": 4,
        "by": {
            "_id": "u102",
            "fullname": "Bentz Margalit",
            "imgUrl": "/img/img2.jpg"
        }
    }]
}]

function query() {
    var stays = JSON.parse(localStorage.getItem(KEY))
    if (!stays || !stays.length) {
        stays = gStays
    }
    localStorage.setItem(KEY, JSON.stringify(stays))
    return stays
}

function getById(id) {
    return storageService.get(KEY, id)
}

function remove(id) {
    return storageService.remove(KEY, id)
}


function save(stay) {
    const savedStay = stay._id
        ? storageService.put(KEY, stay)
        : storageService.post(KEY, stay)
    return savedStay
}
