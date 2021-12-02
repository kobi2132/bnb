import { userService } from '../../services/user.service.js'

export const userStore = {
    state: {
        loggedinUser: null,
    },
    getters: {
        getUser(state) {
            return state.loggedinUser
        },
    },
    mutations: {
        setUser(state, { users }) {
            state.loggedinUser = user
        },
        setToggleWishList(state, {stayId}){
            console.log(stayId);
            const idx = state.loggedinUser.wishList.findIndex((currStay) => currStay === stayId)
            if (!idx){
                state.loggedinUser.wishList.push(stayId) 
            }
            else state.loggedinUser.wishList.splice(idx, 1)
        }
    },
    actions: {

        toggleWishList({ commit }, { stayId }) {
            return userService.
            commit({type: 'setToggleWishList', stayId})
        }
    }

}