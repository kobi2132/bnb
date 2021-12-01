import { stayService } from '../../services/stay.service.js'

export const stayStore = {
    state: {
        stays: [],
        currstay: null,

    },
    getters: {
        staysToShow(state) {
            return state.stays
        }
    },
    mutations: {
        setStays(state, { stays }) {
            state.stays = stays
        },
    },
    actions: {
        loadStays({ commit }) {
            stayService.query().then(stays => {
                commit({ type: 'setStays', stays })
            })
        }
    }

}