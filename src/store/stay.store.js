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

            const {labels} = state.filterBy
            if (labels.length) {
                console.log(labels);
                filteredStays = filteredStays.filter((stay) => stay.amenities.some((label) => labels.includes(label.name)))
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
        setFilter(state, {filterBy}){
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