import { stayService } from '../../services/stay.service.js'

export const stayStore = {
    state: {
        stays: [],
        currStay: null,


    },
    getters: {
        staysToShow(state) {
            return state.stays
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