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
        setUser(state, { user }) {
            console.log(user.wishList)
            state.loggedinUser = user
            console.log(state.loggedinUser)
        },
    },
    actions: {
        setUser({ commit }) {
            const user = userService.getLoggedinUser()
            commit({ type: 'setUser', user })
        },
        async toggleWishList({ commit }, { stayId }) {
            try {
                console.log(stayId)
                const user = await userService.getLoggedinUser()
                const idx = user.wishList.findIndex(wish => wish === stayId)
                if (idx === -1) user.wishList.push(stayId)
                else user.wishList.splice(idx, 1)
                userService.update(user)
                commit({ type: 'setUser', user })

            } catch (err) {
                console.log('Error in load user (user.store):', err);
                throw err;
            }

        }
    }

}