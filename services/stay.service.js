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
        "amenities": [{
                name: "TV",
                logo: "live_tv"
            },
            {
                name: "Wifi",
                logo: "wifi"
            },
            {
                name: "Kitchen",
                logo: "restaurant"
            },
            {
                name: "Air conditioning",
                logo: "ac_unit"
            },
            {
                name: "Smoking Allowed",
                logo: "smoking_rooms"
            },
            {
                name: "Pets Allowed",
                logo: "pets"
            },
        ],
        "host": {
            "_id": "u101",
            "fullname": "Erik Biton",
            "imgUrl": "https://res.cloudinary.com/practicaldev/image/fetch/s--Te1hHaXC--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/31984/be96b195-0fb5-47ea-a298-b1fc4b20c02f.jpg"
        },
        "loc": {
            "country": "Portugal",
            "countryCode": "PT",
            "city": "Porto",
            "lat": -8.61308,
            "lng": 41.1413
        },
        "reviews": [{
                "id": "madeId",
                "date": "04.3.2020",
                "txt": "Lovely house, but not as good as the pictures were. The house has not aged well or been maintained to bring it back to how it was originally built. Also, as per other reviews, agree that cleanliness was an issue. Although, once we complained to the agency, they quickly sent someone to clean areas we thought required more cleaning.",
                "rate": {

                    cleanliness: 3,
                    communication: 3,
                    checkIn: 5,
                    accuracy: 5,
                    location: 4,
                    accessibility: 4
                },
                "by": {
                    "_id": "u102",
                    "fullname": "Bentz Margalit",
                    "imgUrl": "/img/img2.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "07.1.2015",
                "txt": "This villa is absolutely stunning with an incredible view. Check in and check out was very smooth and the host/agency are very well organized. Would absolutely recommend the place to anyone looking to have a relaxing time in costa brava amongst a very spectacular view directly from the house. The beach and town near the village are also very accessible to go during the day.",
                "rate": {
                    cleanliness: 1,
                    communication: 3,
                    checkIn: 4,
                    accuracy: 1,
                    location: 1,
                    accessibility: 2
                },
                "by": {
                    "_id": "u103",
                    "fullname": "Yami Kobin",
                    "imgUrl": "/img/img3.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "24.8.2013",
                "txt": "A stunning property in a beautiful location. The local village is a short walk away and has some wonderful food shops and restaurants. The house has a lot of glass and in the middle of summer would benefit from air conditioning (something mentioned in previous reviews), but has large windows which can be opened. The coast line is incredible, and this property is perfectly located to maximise the views. Would recommend a visit to the local monastery if nothing else for the amazing drive from the property.",
                "rate": {
                    cleanliness: 3,
                    communication: 3,
                    checkIn: 5,
                    accuracy: 5,
                    location: 4,
                    accessibility: 4
                },
                "by": {
                    "_id": "u104",
                    "fullname": "Bentz Margalit",
                    "imgUrl": "/img/img4.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "04.3.2020",
                "txt": "Wonderfull house, great views, lovly neighbors, i love my life, thank you so much",
                "rate": {
                    cleanliness: 1,
                    communication: 3,
                    checkIn: 4,
                    accuracy: 1,
                    location: 1,
                    accessibility: 2
                },
                "by": {
                    "_id": "u105",
                    "fullname": "Mongo Shapira",
                    "imgUrl": "/img/img5.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "07.1.2015",
                "txt": "Lovely house, but not as good as the pictures were. The house has not aged well or been maintained to bring it back to how it was originally built. Also, as per other reviews, agree that cleanliness was an issue. Although, once we complained to the agency, they quickly sent someone to clean areas we thought required more cleaning.",
                "rate": {
                    cleanliness: 3,
                    communication: 3,
                    checkIn: 5,
                    accuracy: 5,
                    location: 4,
                    accessibility: 4
                },
                "by": {
                    "_id": "u107",
                    "fullname": "Baten ainor",
                    "imgUrl": "/img/img7.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "04.3.2020",
                "txt": "Our house is a very, very, very fine house With two cats in the yard Life used to be so hard Now everything is easy 'cause of you",
                "rate": {
                    cleanliness: 3,
                    communication: 3,
                    checkIn: 5,
                    accuracy: 5,
                    location: 4,
                    accessibility: 4
                },
                "by": {
                    "_id": "u109",
                    "fullname": "Symon maymon",
                    "imgUrl": "/img/img9.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "24.8.2013",
                "txt": "Lovely house, but not as good as the pictures were. The house has not aged well or been maintained to bring it back to how it was originally built.",
                "rate": {
                    cleanliness: 5,
                    communication: 5,
                    checkIn: 5,
                    accuracy: 5,
                    location: 5,
                    accessibility: 5
                },
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
        "amenities": [{
                name: "TV",
                logo: "live_tv"
            },
            {
                name: "Wifi",
                logo: "wifi"
            },
            {
                name: "Kitchen",
                logo: "restaurant"
            },
            {
                name: "Air conditioning",
                logo: "ac_unit"
            },
            {
                name: "Smoking Allowed",
                logo: "smoking_rooms"
            },
            {
                name: "Pets Allowed",
                logo: "pets"
            },
        ],
        "host": {
            "_id": "u101",
            "fullname": "Erik Biton",
            "imgUrl": "https://res.cloudinary.com/practicaldev/image/fetch/s--Te1hHaXC--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/31984/be96b195-0fb5-47ea-a298-b1fc4b20c02f.jpg"
        },
        "loc": {
            "country": "Greece",
            "countryCode": "GR",
            "city": "Porto",
            "lat": -8.61308,
            "lng": 41.1413
        },
        "reviews": [{
                "id": "madeId",
                "date": "12.5.2012",
                "txt": "A stunning property in a beautiful location. The local village is a short walk away and has some wonderful food shops and restaurants. The house has a lot of glass and in the middle of summer would benefit from air conditioning (something mentioned in previous reviews), but has large windows which can be opened. The coast line is incredible, and this property is perfectly located to maximise the views. Would recommend a visit to the local monastery if nothing else for the amazing drive from the property.",
                "rate": {
                    cleanliness: 3,
                    communication: 3,
                    checkIn: 5,
                    accuracy: 5,
                    location: 4,
                    accessibility: 4
                },
                "by": {
                    "_id": "u102",
                    "fullname": "Bentz Margalit",
                    "imgUrl": "/img/img2.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "07.1.2015",
                "txt": "This villa is absolutely stunning with an incredible view. Check in and check out was very smooth and the host/agency are very well organized. Would absolutely recommend the place to anyone looking to have a relaxing time in costa brava amongst a very spectacular view directly from the house. The beach and town near the village are also very accessible to go during the day.",
                "rate": {
                    cleanliness: 1,
                    communication: 3,
                    checkIn: 4,
                    accuracy: 1,
                    location: 1,
                    accessibility: 2
                },
                "by": {
                    "_id": "u103",
                    "fullname": "Yami Kobin",
                    "imgUrl": "/img/img3.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "04.3.2020",
                "txt": "had a blast! but missed my cats..",
                "rate": {
                    cleanliness: 5,
                    communication: 5,
                    checkIn: 5,
                    accuracy: 5,
                    location: 5,
                    accessibility: 5
                },
                "by": {
                    "_id": "u104",
                    "fullname": "Bentz Margalit",
                    "imgUrl": "/img/img4.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "24.8.2013",
                "txt": "Wonderfull house, great views, lovly neighbors, i love my life, thank you so much",
                "rate": {
                    cleanliness: 3,
                    communication: 3,
                    checkIn: 5,
                    accuracy: 5,
                    location: 4,
                    accessibility: 4
                },
                "by": {
                    "_id": "u105",
                    "fullname": "Mongo Shapira",
                    "imgUrl": "/img/img5.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "04.3.2020",
                "txt": "Lovely house, but not as good as the pictures were. The house has not aged well or been maintained to bring it back to how it was originally built. Also, as per other reviews, agree that cleanliness was an issue. Although, once we complained to the agency, they quickly sent someone to clean areas we thought required more cleaning.",
                "rate": {
                    cleanliness: 3,
                    communication: 3,
                    checkIn: 5,
                    accuracy: 5,
                    location: 4,
                    accessibility: 4
                },
                "by": {
                    "_id": "u106",
                    "fullname": "Bobby Biton",
                    "imgUrl": "/img/img6.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "12.5.2012",
                "txt": "great house, not clean enough, had a problem with hot water, but enjoyed over all, lovley host",
                "rate": {
                    cleanliness: 1,
                    communication: 3,
                    checkIn: 4,
                    accuracy: 1,
                    location: 1,
                    accessibility: 2
                },
                "by": {
                    "_id": "u107",
                    "fullname": "Baten ainor",
                    "imgUrl": "/img/img7.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "04.3.2020",
                "txt": "all good, great host, cosy bed, warm toilet, arrived with no underwear and the host lend me his.. oh i forgot to return it... sorry!",
                "rate": {
                    cleanliness: 5,
                    communication: 5,
                    checkIn: 5,
                    accuracy: 5,
                    location: 5,
                    accessibility: 5
                },
                "by": {
                    "_id": "u108",
                    "fullname": "Symon maymon",
                    "imgUrl": "/img/img8.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "07.1.2015",
                "txt": "A stunning property in a beautiful location. The local village is a short walk away and has some wonderful food shops and restaurants. The house has a lot of glass and in the middle of summer would benefit from air conditioning (something mentioned in previous reviews), but has large windows which can be opened. The coast line is incredible, and this property is perfectly located to maximise the views. Would recommend a visit to the local monastery if nothing else for the amazing drive from the property.",
                "rate": {
                    cleanliness: 2,
                    communication: 4,
                    checkIn: 5,
                    accuracy: 1,
                    location: 3,
                    accessibility: 3
                },
                "by": {
                    "_id": "u109",
                    "fullname": "Symon maymon",
                    "imgUrl": "/img/img9.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "04.3.2020",
                "txt": "Lovely house, but not as good as the pictures were. The house has not aged well or been maintained to bring it back to how it was originally built.",
                "rate": {
                    cleanliness: 3,
                    communication: 3,
                    checkIn: 5,
                    accuracy: 5,
                    location: 4,
                    accessibility: 4
                },
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
        "amenities": [{
                name: "TV",
                logo: "live_tv"
            },
            {
                name: "Wifi",
                logo: "wifi"
            },
            {
                name: "Kitchen",
                logo: "restaurant"
            },
            {
                name: "Air conditioning",
                logo: "ac_unit"
            },
            {
                name: "Smoking Allowed",
                logo: "smoking_rooms"
            },
            {
                name: "Pets Allowed",
                logo: "pets"
            },
        ],
        "host": {
            "_id": "u102",
            "fullname": "Bentz Margalit",
            "imgUrl": "https://res.cloudinary.com/practicaldev/image/fetch/s--Te1hHaXC--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/31984/be96b195-0fb5-47ea-a298-b1fc4b20c02f.jpg"
        },
        "loc": {
            "country": "USA",
            "countryCode": "USA",
            "city": "New York",
            "lat": -8.61308,
            "lng": 41.1413
        },
        "reviews": [{
                "id": "madeId",
                "date": "24.8.2013",
                "txt": "This villa is absolutely stunning with an incredible view. Check in and check out was very smooth and the host/agency are very well organized. Would absolutely recommend the place to anyone looking to have a relaxing time in costa brava amongst a very spectacular view directly from the house. The beach and town near the village are also very accessible to go during the day.",
                "rate": {
                    cleanliness: 3,
                    communication: 3,
                    checkIn: 5,
                    accuracy: 5,
                    location: 4,
                    accessibility: 4
                },
                "by": {
                    "_id": "u101",
                    "fullname": "Arik Biton",
                    "imgUrl": "/img/img1.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "04.3.2020",
                "txt": "What a house! So bright, airy and beautifully designed. Beds are good, as sheets and towels. Outside area for nice meals overlooking the sea. 5 min walking from a beautiful secluded beach and 10 min from the charming Port de la Selva, where you can find the freshest sea food. For a dream stay!",
                "rate": {
                    cleanliness: 5,
                    communication: 5,
                    checkIn: 5,
                    accuracy: 5,
                    location: 5,
                    accessibility: 5
                },
                "by": {
                    "_id": "u103",
                    "fullname": "Yami Kobin",
                    "imgUrl": "/img/img3.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "12.5.2012",
                "txt": "Lovely house, but not as good as the pictures were. The house has not aged well or been maintained to bring it back to how it was originally built. Also, as per other reviews, agree that cleanliness was an issue. Although, once we complained to the agency, they quickly sent someone to clean areas we thought required more cleaning.",
                "rate": {
                    cleanliness: 2,
                    communication: 4,
                    checkIn: 5,
                    accuracy: 1,
                    location: 3,
                    accessibility: 3
                },
                "by": {
                    "_id": "u105",
                    "fullname": "Mongo Shapira",
                    "imgUrl": "/img/img5.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "04.3.2020",
                "txt": "Absolutely incredible house. Truly amazing. The views are just mind-blowing, there is not one single moment where you don't think wow this house is incredible. From the inside and from the outside.",
                "rate": {
                    cleanliness: 3,
                    communication: 3,
                    checkIn: 5,
                    accuracy: 5,
                    location: 4,
                    accessibility: 4
                },
                "by": {
                    "_id": "u106",
                    "fullname": "Bobby Biton",
                    "imgUrl": "/img/img6.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "07.1.2015",
                "txt": "great house, not clean enough, had a problem with hot water, but enjoyed over all, lovley host",
                "rate": {
                    cleanliness: 1,
                    communication: 3,
                    checkIn: 4,
                    accuracy: 1,
                    location: 1,
                    accessibility: 2
                },
                "by": {
                    "_id": "u107",
                    "fullname": "Baten ainor",
                    "imgUrl": "/img/img7.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "04.3.2020",
                "txt": "all good, great host, cosy bed, warm toilet, arrived with no underwear and the host lend me his.. oh i forgot to return it... sorry!",
                "rate": {
                    cleanliness: 3,
                    communication: 3,
                    checkIn: 5,
                    accuracy: 5,
                    location: 4,
                    accessibility: 4
                },
                "by": {
                    "_id": "u108",
                    "fullname": "Symon maymon",
                    "imgUrl": "/img/img8.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "24.8.2013",
                "txt": "Our house is a very, very, very fine house With two cats in the yard Life used to be so hard Now everything is easy 'cause of you",
                "rate": {
                    cleanliness: 3,
                    communication: 3,
                    checkIn: 5,
                    accuracy: 5,
                    location: 4,
                    accessibility: 4
                },
                "by": {
                    "_id": "u109",
                    "fullname": "Symon maymon",
                    "imgUrl": "/img/img9.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "04.3.2020",
                "txt": "Lovely house, but not as good as the pictures were. The house has not aged well or been maintained to bring it back to how it was originally built.",
                "rate": {
                    cleanliness: 5,
                    communication: 5,
                    checkIn: 5,
                    accuracy: 5,
                    location: 5,
                    accessibility: 5
                },
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
        "amenities": [{
                name: "TV",
                logo: "live_tv"
            },
            {
                name: "Wifi",
                logo: "wifi"
            },
            {
                name: "Kitchen",
                logo: "restaurant"
            },
            {
                name: "Air conditioning",
                logo: "ac_unit"
            },
        ],
        "host": {
            "_id": "u102",
            "fullname": "Bentz Margalit",
            "imgUrl": "https://res.cloudinary.com/practicaldev/image/fetch/s--Te1hHaXC--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/31984/be96b195-0fb5-47ea-a298-b1fc4b20c02f.jpg"
        },
        "loc": {
            "country": "Israel",
            "countryCode": "IL",
            "city": "Tel-Aviv",
            "lat": -8.61308,
            "lng": 41.1413
        },
        "reviews": [{
                "id": "madeId",
                "date": "24.8.2013",
                "txt": "Lovely house, but not as good as the pictures were. The house has not aged well or been maintained to bring it back to how it was originally built. Also, as per other reviews, agree that cleanliness was an issue. Although, once we complained to the agency, they quickly sent someone to clean areas we thought required more cleaning.",
                "rate": {
                    cleanliness: 3,
                    communication: 3,
                    checkIn: 5,
                    accuracy: 5,
                    location: 4,
                    accessibility: 4
                },
                "by": {
                    "_id": "u101",
                    "fullname": "Arik Biton",
                    "imgUrl": "/img/img1.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "12.5.2012",
                "txt": "A stunning property in a beautiful location. The local village is a short walk away and has some wonderful food shops and restaurants. The house has a lot of glass and in the middle of summer would benefit from air conditioning (something mentioned in previous reviews), but has large windows which can be opened. The coast line is incredible, and this property is perfectly located to maximise the views. Would recommend a visit to the local monastery if nothing else for the amazing drive from the property.",
                "rate": {
                    cleanliness: 5,
                    communication: 5,
                    checkIn: 5,
                    accuracy: 5,
                    location: 5,
                    accessibility: 5
                },
                "by": {
                    "_id": "u101",
                    "fullname": "Arik Biton",
                    "imgUrl": "/img/img1.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "07.1.2015",
                "txt": "Absolutely incredible house. Truly amazing. The views are just mind-blowing, there is not one single moment where you don't think wow this house is incredible. From the inside and from the outside.",
                "rate": {
                    cleanliness: 2,
                    communication: 4,
                    checkIn: 5,
                    accuracy: 1,
                    location: 3,
                    accessibility: 3
                },
                "by": {
                    "_id": "u102",
                    "fullname": "Bentz Margalit",
                    "imgUrl": "/img/img2.jpg"
                }
            },
        ]
    },
    {
        "_id": "907978790",
        "name": "Fly's House",
        "imgUrls": ["https://a0.muscache.com/im/pictures/miso/Hosting-50946161/original/0b736011-42e8-498c-84b7-a9f5301392a5.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-50946161/original/8a8d5043-790c-488a-a960-1d4f542873e5.jpeg?im_w=1440",
            "https://a0.muscache.com/im/pictures/miso/Hosting-50946161/original/27e3a327-767a-44f1-9172-49110e0c1af0.jpeg?im_w=1440",
            "https://a0.muscache.com/im/pictures/miso/Hosting-50946161/original/af1af2a0-2380-4b99-b60b-2edc202e6d6b.jpeg?im_w=1440",
            "https://a0.muscache.com/im/pictures/miso/Hosting-50946161/original/61864421-feed-4b88-bdfb-81a67887ecf4.jpeg?im_w=1440"
        ],
        "price": 15,
        "propertyType": "loft",
        "summary": "Charming loft with great smell",
        "description": "Beautiful 1 bedroom architecturally designed loft, in beautiful working fishing village in Northern Tel Aviv",
        "capacity": 2,
        "amenities": [{
                name: "Wifi",
                logo: "wifi"
            },
            {
                name: "Smoking Allowed",
                logo: "smoking_rooms"
            },
            {
                name: "Pets Allowed",
                logo: "pets"
            },
        ],
        "host": {
            "_id": "u102",
            "fullname": "Bentz Margalit",
            "imgUrl": "https://res.cloudinary.com/practicaldev/image/fetch/s--Te1hHaXC--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/31984/be96b195-0fb5-47ea-a298-b1fc4b20c02f.jpg"
        },
        "loc": {
            "country": "Israel",
            "countryCode": "IL",
            "city": "Tel-Aviv",
            "lat": -8.61308,
            "lng": 41.1413
        },
        "reviews": [{
                "id": "madeId",
                "date": "04.3.2020",
                "txt": "Geoff’s house is beautiful. Being in the house, you feel you are directly on top of the ocean. The views are incredible. The photos are a bit misleading though, since the house is surrounded by other houses which is something not noticeable in the pictures. This was not an issue though, specially these days since there was not lot of people in the area. And the house is 5 minutes walking from a beautiful little beach and many others close by. Great place. Geoff is also very helpful and communicative, quickly responding and trying to help. Thanks for everything!",
                "rate": {
                    cleanliness: 3,
                    communication: 3,
                    checkIn: 5,
                    accuracy: 5,
                    location: 4,
                    accessibility: 4
                },
                "by": {
                    "_id": "u101",
                    "fullname": "Arik Biton",
                    "imgUrl": "/img/img1.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "24.8.2013",
                "txt": "The location and accommodation was superb. Spectacular scenery from both nice and rough weather. Cosy village nearby with all necessary services at hand. Perfect with a garage for our car, easy to park. With great experience from other top-AirBnB Villas, this house is definitely on our top-1 position.",
                "rate": {
                    cleanliness: 3,
                    communication: 3,
                    checkIn: 5,
                    accuracy: 5,
                    location: 4,
                    accessibility: 4
                },
                "by": {
                    "_id": "u101",
                    "fullname": "Arik Biton",
                    "imgUrl": "/img/img1.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "04.3.2020",
                "txt": "Lovely house, but not as good as the pictures were. The house has not aged well or been maintained to bring it back to how it was originally built. Also, as per other reviews, agree that cleanliness was an issue. Although, once we complained to the agency, they quickly sent someone to clean areas we thought required more cleaning.",
                "rate": {
                    cleanliness: 5,
                    communication: 5,
                    checkIn: 5,
                    accuracy: 5,
                    location: 5,
                    accessibility: 5
                },
                "by": {
                    "_id": "u102",
                    "fullname": "Bentz Margalit",
                    "imgUrl": "/img/img2.jpg"
                }
            },
        ]
    },
    {
        "_id": "907971790",
        "name": "Feingold House Loft Apt",
        "imgUrls": ["https://a0.muscache.com/im/pictures/61071319/f2fb3639_original.jpg?im_w=1200",
            "https://a0.muscache.com/im/pictures/61071368/ae3bfd40_original.jpg?im_w=1440",
            "https://a0.muscache.com/im/pictures/61071294/720603fe_original.jpg?im_w=1440",
            "https://a0.muscache.com/im/pictures/61071408/80442925_original.jpg?im_w=1440",
            "https://a0.muscache.com/im/pictures/61071524/31bd9eae_original.jpg?im_w=1440"
        ],
        "price": 106,
        "propertyType": "loft",
        "summary": "This authentic loft on the 1st floor in a 60's style is located right in the center of Jerusalem. The building itself was built in 1895 where the city's first movie theater has been established. The loft owns a balcony which has a beautiful view right on to Jaffa street, Restaurants and coffee places are all around.",
        "description": "Beautiful 1 bedroom architecturally designed loft, in beautiful working fishing village in Northern Tel Aviv",
        "capacity": 4,
        "amenities": [{
                name: "TV",
                logo: "live_tv"
            },
            {
                name: "Wifi",
                logo: "wifi"
            },
            {
                name: "Kitchen",
                logo: "restaurant"
            },
            {
                name: "Air conditioning",
                logo: "ac_unit"
            },
            {
                name: "Smoking Allowed",
                logo: "smoking_rooms"
            },
            {
                name: "Pets Allowed",
                logo: "pets"
            },
        ],
        "host": {
            "_id": "u102",
            "fullname": "Bentz Margalit",
            "imgUrl": "https://res.cloudinary.com/practicaldev/image/fetch/s--Te1hHaXC--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/31984/be96b195-0fb5-47ea-a298-b1fc4b20c02f.jpg"
        },
        "loc": {
            "country": "Israel",
            "countryCode": "IL",
            "city": "Jerusalem",
            "lat": -8.61308,
            "lng": 41.1413
        },
        "reviews": [{
                "id": "madeId",
                "date": "07.1.2015",
                "txt": "The Sunflower House if beautiful! Views of the Sea from everywhere in the house, large common area and open kitchen, wonderful pool to swim, walking distance to a beautiful cove to swim in the Sea, and walking distance to the town. We will be back!",
                "rate": {
                    cleanliness: 1,
                    communication: 3,
                    checkIn: 4,
                    accuracy: 1,
                    location: 1,
                    accessibility: 2
                },
                "by": {
                    "_id": "u101",
                    "fullname": "Arik Biton",
                    "imgUrl": "/img/img1.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "04.3.2020",
                "txt": "A stunning property in a beautiful location. The local village is a short walk away and has some wonderful food shops and restaurants. The house has a lot of glass and in the middle of summer would benefit from air conditioning (something mentioned in previous reviews), but has large windows which can be opened. The coast line is incredible, and this property is perfectly located to maximise the views. Would recommend a visit to the local monastery if nothing else for the amazing drive from the property.",
                "rate": {
                    cleanliness: 3,
                    communication: 3,
                    checkIn: 5,
                    accuracy: 5,
                    location: 4,
                    accessibility: 4
                },
                "by": {
                    "_id": "u101",
                    "fullname": "Arik Biton",
                    "imgUrl": "/img/img1.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "24.8.2013",
                "txt": "We had a very nice stay at the Villa. It was very quiet around it, but still possible to (carefully!) walk to the village. We had a couple of small problems (light went off) and Geoff's agency took care of them promptly and nicely -- they even turned on the heating before we arrived, which was highly appreciated.The villa is as cool as it looks, yet really functional  highly recommended!",
                "rate": {
                    cleanliness: 5,
                    communication: 5,
                    checkIn: 5,
                    accuracy: 5,
                    location: 5,
                    accessibility: 5
                },
                "by": {
                    "_id": "u102",
                    "fullname": "Bentz Margalit",
                    "imgUrl": "/img/img2.jpg"
                }
            },
        ]
    },
    {
        "_id": "917931790",
        "name": "Sunny and Spacious West Village Gem",
        "imgUrls": ["https://a0.muscache.com/im/pictures/4532251c-e647-4334-a425-55a583bcba56.jpg?im_w=1200",
            "https://a0.muscache.com/im/pictures/ffe8d8da-41e2-4e7d-bf2e-d35a8acd76dd.jpg?im_w=1440",
            "https://a0.muscache.com/im/pictures/c8217ed0-aea4-41dd-b83d-23c9073fc482.jpg?im_w=1440",
            "https://a0.muscache.com/im/pictures/262cdd83-7067-446a-ad91-d42e68a4fb3b.jpg?im_w=1440",
            "https://a0.muscache.com/im/pictures/a9fa76d9-ef11-482b-986d-c28559b13473.jpg?im_w=1440"
        ],
        "price": 325,
        "propertyType": "loft",
        "summary": "This authentic loft on the 1st floor in a 60's style is located right in the center of Jerusalem. The building itself was built in 1895 where the city's first movie theater has been established. The loft owns a balcony which has a beautiful view right on to Jaffa street, Restaurants and coffee places are all around.",
        "description": "Hello, welcome to our sunny and spacious West Village gem! Our apartment has been designed with elegance and comfort in mind. Previously featured on Apartment Therapy, we've redone the interior but kept the layout readers loved.",
        "capacity": 2,
        "amenities": [{
                name: "TV",
                logo: "live_tv"
            },
            {
                name: "Wifi",
                logo: "wifi"
            },
            {
                name: "Kitchen",
                logo: "restaurant"
            },
            {
                name: "Air conditioning",
                logo: "ac_unit"
            },
            {
                name: "Smoking Allowed",
                logo: "smoking_rooms"
            },
            {
                name: "Pets Allowed",
                logo: "pets"
            },
        ],
        "host": {
            "_id": "u102",
            "fullname": "Bentz Margalit",
            "imgUrl": "https://res.cloudinary.com/practicaldev/image/fetch/s--Te1hHaXC--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/31984/be96b195-0fb5-47ea-a298-b1fc4b20c02f.jpg"
        },
        "loc": {
            "country": "USA",
            "countryCode": "USA",
            "city": "New York",
            "lat": -8.61308,
            "lng": 41.1413
        },
        "reviews": [{
                "id": "madeId",
                "date": "12.5.2012",
                "txt": "Lovely house, but not as good as the pictures were. The house has not aged well or been maintained to bring it back to how it was originally built. Also, as per other reviews, agree that cleanliness was an issue. Although, once we complained to the agency, they quickly sent someone to clean areas we thought required more cleaning.",
                "rate": {
                    cleanliness: 2,
                    communication: 4,
                    checkIn: 5,
                    accuracy: 1,
                    location: 3,
                    accessibility: 3
                },
                "by": {
                    "_id": "u101",
                    "fullname": "Arik Biton",
                    "imgUrl": "/img/img1.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "04.3.2020",
                "txt": "We had a very nice stay at the Villa. It was very quiet around it, but still possible to (carefully!) walk to the village. We had a couple of small problems (light went off) and Geoff's agency took care of them promptly and nicely -- they even turned on the heating before we arrived, which was highly appreciated.The villa is as cool as it looks, yet really functional  highly recommended!",
                "rate": {
                    cleanliness: 3,
                    communication: 3,
                    checkIn: 5,
                    accuracy: 5,
                    location: 4,
                    accessibility: 4
                },
                "by": {
                    "_id": "u101",
                    "fullname": "Arik Biton",
                    "imgUrl": "/img/img1.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "07.1.2015",
                "txt": "A great house in fantastic surroundings with a stunning sea view! The house is not located as private as it looks in the pictures, but the road nearby wasn’t busy at all. The pool is quite small, but a nice stone beach with crystal clear water is located only a couple minutes walking from the house. We also enjoyed trail-walking in the beautiful nature nearby and nice meals in the calm village. If you would like a highly relaxing holiday, the sunflower house is the place for you!",
                "rate": {
                    cleanliness: 5,
                    communication: 5,
                    checkIn: 5,
                    accuracy: 5,
                    location: 5,
                    accessibility: 5
                },
                "by": {
                    "_id": "u102",
                    "fullname": "Bentz Margalit",
                    "imgUrl": "/img/img2.jpg"
                }
            },
        ]
    },
    {
        "_id": "907931790",
        "name": "Santorini Sky The Lodge",
        "imgUrls": ["https://a0.muscache.com/im/pictures/miso/Hosting-51719483/original/deaca075-eb5e-4252-bb29-5badc7ccb9d1.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51719483/original/08712ef1-b066-4aad-a896-e62aa54a462a.jpeg?im_w=1440",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51719483/original/43b8f692-7a18-40d0-b380-181927656033.jpeg?im_w=1440",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51719483/original/46da18e1-b672-4368-9610-17e8e889986e.jpeg?im_w=1440",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51719483/original/23b9b64d-b62f-444c-83d9-7882fd8fd659.jpeg?im_w=1440"
        ],
        "price": 142,
        "propertyType": "loft",
        "summary": "This authentic loft on the 1st floor in a 60's style is located right in the center of Jerusalem. The building itself was built in 1895 where the city's first movie theater has been established. The loft owns a balcony which has a beautiful view right on to Jaffa street, Restaurants and coffee places are all around.",
        "description": "Heaven has a new address! In this sensational villa, rustic design is blended with modern comfort and luxury. From the private infinity jacuzzi, to marble counters, pillow-top king-size bed, and satellite TV – Every detail has been considered to make The Lodge is as stunning inside as the views are outside.",
        "capacity": 2,
        "amenities": [{
                name: "TV",
                logo: "live_tv"
            },
            {
                name: "Wifi",
                logo: "wifi"
            },
            {
                name: "Kitchen",
                logo: "restaurant"
            },
            {
                name: "Air conditioning",
                logo: "ac_unit"
            },
            {
                name: "Smoking Allowed",
                logo: "smoking_rooms"
            },
            {
                name: "Pets Allowed",
                logo: "pets"
            },
        ],
        "host": {
            "_id": "u102",
            "fullname": "Bentz Margalit",
            "imgUrl": "https://res.cloudinary.com/practicaldev/image/fetch/s--Te1hHaXC--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/31984/be96b195-0fb5-47ea-a298-b1fc4b20c02f.jpg"
        },
        "loc": {
            "country": "Greece",
            "countryCode": "GRC",
            "city": "Santorini",
            "lat": -8.61308,
            "lng": 41.1413
        },
        "reviews": [{
                "id": "madeId",
                "date": "04.3.2020",
                "txt": "This was a wonderful place to stay. It is a very large and comfortable space. The best part of the house are the spectacular ocean views. It is a stunning all-day treat. The view from most of the rooms really raised the bar of our stay. There were many interesting ocean trails nearby and the short walk into town was scenic. Our stay here was one of the highlights of the vacation. It was well worth the two-hour drive from Barcelona!",
                "rate": {
                    cleanliness: 2,
                    communication: 4,
                    checkIn: 5,
                    accuracy: 1,
                    location: 3,
                    accessibility: 3
                },
                // "rate": 7
                "by": {
                    "_id": "u101",
                    "fullname": "Arik Biton",
                    "imgUrl": "/img/img1.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "07.1.2015",
                "txt": "A stunning property in a beautiful location. The local village is a short walk away and has some wonderful food shops and restaurants. The house has a lot of glass and in the middle of summer would benefit from air conditioning (something mentioned in previous reviews), but has large windows which can be opened. The coast line is incredible, and this property is perfectly located to maximise the views. Would recommend a visit to the local monastery if nothing else for the amazing drive from the property.",
                "rate": {
                    cleanliness: 3,
                    communication: 3,
                    checkIn: 5,
                    accuracy: 5,
                    location: 4,
                    accessibility: 4
                },
                "by": {
                    "_id": "u101",
                    "fullname": "Arik Biton",
                    "imgUrl": "/img/img1.jpg"
                }
            },
            {
                "id": "madeId",
                "date": "12.5.2012",
                "txt": "We had a very nice stay at the Villa. It was very quiet around it, but still possible to (carefully!) walk to the village. We had a couple of small problems (light went off) and Geoff's agency took care of them promptly and nicely -- they even turned on the heating before we arrived, which was highly appreciated.The villa is as cool as it looks, yet really functional  highly recommended!",
                "rate": {
                    cleanliness: 5,
                    communication: 5,
                    checkIn: 5,
                    accuracy: 5,
                    location: 5,
                    accessibility: 5
                },
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