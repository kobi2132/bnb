import { stayService } from '../../services/stay.service.js'

export const stayStore = {
    state: {
        stays: [],

    },
    getters: {
        staysToShow(state) {
            return state.stays
        }
    },
    mutations: {
        setStays(state, { stays }) {
            state.stays = stays
        }
    },
    actions: {
        loadStays({ commit }) {
            const stays = stayService.query()
            commit({ type: 'setStays', stays })
            // stayService.query().then(stays => {
            //     commit({ type: 'setStays', stays })
            // })
        }
    }

}