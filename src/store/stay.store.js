import { stayService } from '../../services/stay.service.js'

export const stayStore = {
    state: {
        stays: [],
        currStay: null,
        filterBy: {
            labels: [],
        },
    },
    getters: {
        staysToShow(state, getters) {
            console.log(getters.getCurrTrip)
            const { destination, guests, dates } = getters.getCurrTrip
            console.log(destination)
            const regex = new RegExp(destination, 'i')
            var filteredStays = state.stays.filter(stay => regex.test(stay.loc.city))

            const { labels } = state.filterBy
            if (labels.length) {
                console.log(labels);
                // var newFilter = filteredStays.filter((stay) => {
                //     if (stay.amenities.every((label) => labels.includes(label.name)) && stay)
                //         return stay
                // })
                // console.log(newFilter);
                labels.forEach(label => {
                    filteredStays.forEach(stay => {
                        var popo = stay.amenities.map(amenity => {
                            console.log('amenity:', amenity);
                            console.log('label', label);
                            if (amenity.name === label) return 
                        })
                        console.log(popo);
                    })
                })
                // filteredStays = filteredStays.filter((stay) => state.filterBy.labels.every((filterLabel) => stay.amenities.name.includes(filterLabel)))

            }


            return filteredStays
        },
        getCurrStay(state) {
            return JSON.parse(JSON.stringify(state.currStay))
        },
    },
    mutations: {
        setStays(state, { stays }) {
            state.stays = stays
        },
        setCurrStay(state, { stay }) {
            state.currStay = stay
            console.log('currStay', state.currStay)
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy
        }
    },
    actions: {
        loadStays({ commit }) {
            stayService.query().then(stays => {
                commit({ type: 'setStays', stays })
            })
        },
        setCurrStay({ commit, getters }, { stayId }) {
            return stayService.getById(stayId).then((stay) => {
                console.log(stay)
                commit({ type: 'setCurrStay', stay })
            })
        },
    }
}