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
        "_id": "907978791",
        "name": "Charming House",
        "imgUrls": ["https://res.cloudinary.com/home-to-go/image/upload/v1622706975/ukus3nea6he6tezdwimp.jpg",
            "https://res.cloudinary.com/home-to-go/image/upload/v1622706966/bc57trhwlnpv8vjfqdej.jpg",
            "https://res.cloudinary.com/home-to-go/image/upload/v1622706972/pxyxznah0tcbi1ctbziz.jpg",
            "https://res.cloudinary.com/home-to-go/image/upload/v1622706964/byggsp1gia2wwuhfcxdt.jpg",
            "https://res.cloudinary.com/home-to-go/image/upload/v1622706969/ek6dw3ujrvknufheul40.jpg"
        ],
        "price": 120,
        "propertyType": "appartment",
        "summary": "Charming appartment with two bedrooms",
        "description": "Beautiful 2 bedroom architecturally designed villa, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Portogal",
        "capacity": 4,
        "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Air conditioning",
            "Smoking Allowed",
            "Pets Allowed"
        ],
        "host": {
            "_id": "u101",
            "fullname": "Erik Biton",
            "imgUrl": "https://res.cloudinary.com/practicaldev/image/fetch/s--Te1hHaXC--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/31984/be96b195-0fb5-47ea-a298-b1fc4b20c02f.jpg"
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
            },
            {
                "id": "madeId",
                "txt": "not good, wont come again..",
                "rate": 2,
                "by": {
                    "_id": "u103",
                    "fullname": "Yami Kobin",
                    "imgUrl": "/img/img3.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "had a blast! but missed mt cats..",
                "rate": 7,
                "by": {
                    "_id": "u104",
                    "fullname": "Bentz Margalit",
                    "imgUrl": "/img/img4.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "Wonderfull house, great views, lovly neighbors, i love my life, thank you so much",
                "rate": 10,
                "by": {
                    "_id": "u105",
                    "fullname": "Mongo Shapira",
                    "imgUrl": "/img/img5.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "great house, not clean enough, had a problem with hot water, but enjoyed over all, lovley host",
                "rate": 5,
                "by": {
                    "_id": "u107",
                    "fullname": "Baten ainor",
                    "imgUrl": "/img/img7.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "Our house is a very, very, very fine house With two cats in the yard Life used to be so hard Now everything is easy 'cause of you",
                "rate": 9,
                "by": {
                    "_id": "u109",
                    "fullname": "Symon maymon",
                    "imgUrl": "/img/img9.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "Lovely house, but not as good as the pictures were. The house has not aged well or been maintained to bring it back to how it was originally built.",
                "rate": 9,
                "by": {
                    "_id": "110",
                    "fullname": "Jhon McLOVIN",
                    "imgUrl": "/img/img10.jpg"
                }
            },
        ]
    },
    {
        "_id": "907978798",
        "name": "Nice House",
        "imgUrls": ["https://res.cloudinary.com/home-to-go/image/upload/v1622966649/poeo8sjxsiviipzrtpvu.jpg", "https://res.cloudinary.com/home-to-go/image/upload/v1622966634/ona0wsyqjedvtk0ozzvu.jpg", "https://res.cloudinary.com/home-to-go/image/upload/v1622966640/ewerdolnvxpnqdgvrmr5.jpg", "https://res.cloudinary.com/home-to-go/image/upload/v1622966632/b2rzokzx2vlssoqqitlt.jpg", "https://res.cloudinary.com/home-to-go/image/upload/v1622966637/ldpkwjusswysykk154n1.jpg"],
        "price": 100,
        "propertyType": "house",
        "summary": "Amazing house with four bedrooms",
        "description": "Beautiful 4 bedroom architecturally designed house, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Greece",
        "capacity": 6,
        "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Air conditioning",
            "Smoking Allowed"
        ],
        "host": {
            "_id": "u101",
            "fullname": "Erik Biton",
            "imgUrl": "https://res.cloudinary.com/practicaldev/image/fetch/s--Te1hHaXC--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/31984/be96b195-0fb5-47ea-a298-b1fc4b20c02f.jpg"
        },
        "loc": {
            "country": "Greece",
            "countryCode": "GR",
            "address": "Santorini, Greece",
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
            },
            {
                "id": "madeId",
                "txt": "not good, wont come again..",
                "rate": 2,
                "by": {
                    "_id": "u103",
                    "fullname": "Yami Kobin",
                    "imgUrl": "/img/img3.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "had a blast! but missed mt cats..",
                "rate": 7,
                "by": {
                    "_id": "u104",
                    "fullname": "Bentz Margalit",
                    "imgUrl": "/img/img4.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "Wonderfull house, great views, lovly neighbors, i love my life, thank you so much",
                "rate": 10,
                "by": {
                    "_id": "u105",
                    "fullname": "Mongo Shapira",
                    "imgUrl": "/img/img5.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "no cats to chase, shame.. make sure to bring cats with you",
                "rate": 3,
                "by": {
                    "_id": "u106",
                    "fullname": "Bobby Biton",
                    "imgUrl": "/img/img6.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "great house, not clean enough, had a problem with hot water, but enjoyed over all, lovley host",
                "rate": 5,
                "by": {
                    "_id": "u107",
                    "fullname": "Baten ainor",
                    "imgUrl": "/img/img7.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "all good, great host, cosy bed, warm toilet, arrived with no underwear and the host lend me his.. oh i forgot to return it... sorry!",
                "rate": 9,
                "by": {
                    "_id": "u108",
                    "fullname": "Symon maymon",
                    "imgUrl": "/img/img8.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "Our house is a very, very, very fine house With two cats in the yard Life used to be so hard Now everything is easy 'cause of you",
                "rate": 9,
                "by": {
                    "_id": "u109",
                    "fullname": "Symon maymon",
                    "imgUrl": "/img/img9.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "Lovely house, but not as good as the pictures were. The house has not aged well or been maintained to bring it back to how it was originally built.",
                "rate": 9,
                "by": {
                    "_id": "110",
                    "fullname": "Jhon McLOVIN",
                    "imgUrl": "/img/img10.jpg"
                }
            },
        ]
    },
    {
        "_id": "907978799",
        "name": "Dream House",
        "imgUrls": ["https://res.cloudinary.com/home-to-go/image/upload/v1622707080/spk8pdojdzlkcnoonbff.jpg",
            "https://res.cloudinary.com/home-to-go/image/upload/v1622707071/qih5gap0k4ote3lp7te9.jpg",
            "https://res.cloudinary.com/home-to-go/image/upload/v1622707069/bdo0v0eupyeageyxep4p.jpg",
            "https://res.cloudinary.com/home-to-go/image/upload/v1622707073/rs3yi9mepqu466vpauzo.jpg",
            "https://res.cloudinary.com/home-to-go/image/upload/v1622707076/fkbyicglofqxc20h31r5.jpg"
        ],
        "price": 150,
        "propertyType": "villa",
        "summary": "Charming villa with three bedrooms",
        "description": "Beautiful 3 bedroom architecturally designed villa, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern USA",
        "capacity": 6,
        "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Air conditioning",
            "Smoking Allowed",
            "Pets Allowed"
        ],
        "host": {
            "_id": "u102",
            "fullname": "Bentz Margalit",
            "imgUrl": "https://res.cloudinary.com/practicaldev/image/fetch/s--Te1hHaXC--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/31984/be96b195-0fb5-47ea-a298-b1fc4b20c02f.jpg"
        },
        "loc": {
            "country": "USA",
            "countryCode": "USA",
            "address": "New York, USA",
            "lat": -8.61308,
            "lng": 41.1413
        },
        "reviews": [{
                "id": "madeId",
                "txt": "Very helpful hosts. Cooked traditional...",
                "rate": 4,
                "by": {
                    "_id": "u101",
                    "fullname": "Arik Biton",
                    "imgUrl": "/img/img1.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "not good, wont come again..",
                "rate": 2,
                "by": {
                    "_id": "u103",
                    "fullname": "Yami Kobin",
                    "imgUrl": "/img/img3.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "Wonderfull house, great views, lovly neighbors, i love my life, thank you so much",
                "rate": 9,
                "by": {
                    "_id": "u105",
                    "fullname": "Mongo Shapira",
                    "imgUrl": "/img/img5.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "no cats to chase, shame.. make sure to bring cats with you",
                "rate": 8,
                "by": {
                    "_id": "u106",
                    "fullname": "Bobby Biton",
                    "imgUrl": "/img/img6.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "great house, not clean enough, had a problem with hot water, but enjoyed over all, lovley host",
                "rate": 8,
                "by": {
                    "_id": "u107",
                    "fullname": "Baten ainor",
                    "imgUrl": "/img/img7.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "all good, great host, cosy bed, warm toilet, arrived with no underwear and the host lend me his.. oh i forgot to return it... sorry!",
                "rate": 2,
                "by": {
                    "_id": "u108",
                    "fullname": "Symon maymon",
                    "imgUrl": "/img/img8.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "Our house is a very, very, very fine house With two cats in the yard Life used to be so hard Now everything is easy 'cause of you",
                "rate": 1,
                "by": {
                    "_id": "u109",
                    "fullname": "Symon maymon",
                    "imgUrl": "/img/img9.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "Lovely house, but not as good as the pictures were. The house has not aged well or been maintained to bring it back to how it was originally built.",
                "rate": 5,
                "by": {
                    "_id": "110",
                    "fullname": "Jhon McLOVIN",
                    "imgUrl": "/img/img10.jpg"
                }
            },
        ]
    },
    {
        "_id": "907978795",
        "name": "Modern House",
        "imgUrls": ["https://res.cloudinary.com/home-to-go/image/upload/v1622706832/ebtmysskiuu16b21a6bd.jpg",
            "https://res.cloudinary.com/home-to-go/image/upload/v1622706837/svky7mv5kyfndqsaa8rh.jpg",
            "https://res.cloudinary.com/home-to-go/image/upload/v1622706846/kriwctfo00zlu9wyscaj.jpg",
            "https://res.cloudinary.com/home-to-go/image/upload/v1622706964/byggsp1gia2wwuhfcxdt.jpg",
            "https://res.cloudinary.com/home-to-go/image/upload/v1622706842/pxu9pjyu1kbstaw142bu.jpg"
        ],
        "price": 85,
        "propertyType": "loft",
        "summary": "Charming loft with two bedrooms",
        "description": "Beautiful 2 bedroom architecturally designed villa, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Tel Aviv",
        "capacity": 4,
        "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Air conditioning",
            "Smoking Allowed",
            "Pets Allowed"
        ],
        "host": {
            "_id": "u102",
            "fullname": "Bentz Margalit",
            "imgUrl": "https://res.cloudinary.com/practicaldev/image/fetch/s--Te1hHaXC--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/31984/be96b195-0fb5-47ea-a298-b1fc4b20c02f.jpg"
        },
        "loc": {
            "country": "Israel",
            "countryCode": "IL",
            "address": "TLV, Israel",
            "lat": -8.61308,
            "lng": 41.1413
        },
        "reviews": [{
                "id": "madeId",
                "txt": "Very helpful hosts. Cooked traditional...",
                "rate": 3,
                "by": {
                    "_id": "u101",
                    "fullname": "Arik Biton",
                    "imgUrl": "/img/img1.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "not good wont come again...",
                "rate": 9,
                "by": {
                    "_id": "u101",
                    "fullname": "Arik Biton",
                    "imgUrl": "/img/img1.jpg"
                }
            },
            {
                "id": "madeId",
                "txt": "Very helpful hosts. Cooked traditional...",
                "rate": 6,
                "by": {
                    "_id": "u102",
                    "fullname": "Bentz Margalit",
                    "imgUrl": "/img/img2.jpg"
                }
            },
        ]
    },
]

_createStays()

function query() {
    return storageService.query(KEY)
}

function getById(id) {
    return storageService.get(KEY, id)
}

function remove(id) {
    return storageService.remove(KEY, id)
}


function save(stay) {
    const savedStay = stay._id ?
        storageService.put(KEY, stay) :
        storageService.post(KEY, stay)
    return savedStay
}

function _createStays() {
    var stays = JSON.parse(localStorage.getItem(KEY))
    if (!stays || !stays.length) {
        stays = gStays
    }
    localStorage.setItem(KEY, JSON.stringify(stays))
    return stays
}