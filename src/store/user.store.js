import { userService } from '../../services/user.service.js'
// import { socketService, SOCKET_EMIT_USER_WATCH, SOCKET_EVENT_USER_UPDATED } from '../services/socket.service'


export const userStore = {
    state: {
        loggedinUser: null,
        notifications: 1,
        users: [],
        watchedUser: null
    },
    getters: {
        users({ users }) { return users },
        loggedinUser({ loggedinUser }) { return loggedinUser },
        watchedUser({ watchedUser }) { return watchedUser },
        notifications({ notifications }) { return notifications }
    },
    mutations: {
        newNotification(state) {
            state.notifications + 1
        },
        setUser(state, { user }) {
            state.loggedinUser = user
            // console.log(state.loggedinUser)
        },
        setLoggedinUser(state, { user }) {
            // Yaron: needed this workaround as for score not reactive from birth
            state.loggedinUser = (user) ? { ...user } : null;
        },
        setWatchedUser(state, { user }) {
            state.watchedUser = user;
        },
        setUsers(state, { users }) {
            state.users = users;
        },
    },
    actions: {
        setUser({ commit }) {
            const user = userService.getLoggedinUser()
            // console.log(user)
            commit({ type: 'setUser', user })
        },
        async toggleWishList({ commit }, { stayId }) {
            try {
                // console.log(stayId)
                const user = await userService.getLoggedinUser()
                if (!user) {
                    // console.log('Please login first.')
                    return
                }
                const idx = user.wishList.findIndex(wish => wish === stayId)
                if (idx === -1) user.wishList.push(stayId)
                else user.wishList.splice(idx, 1)
                // console.log(user)
                userService.update(user)
                commit({ type: 'setUser', user })

            } catch (err) {
                console.log('Error in load user (user.store):', err);
                throw err;
            }

        },
        async login({ commit }, { userCred }) {
            try {
                const user = await userService.login(userCred);
                commit({ type: 'setLoggedinUser', user })
                return user;
            } catch (err) {
                console.log('userStore: Error in login', err)
                throw err
            }
        },
        async signup({ commit }, { userCred }) {
            try {
                const user = await userService.signup(userCred)
                commit({ type: 'setLoggedinUser', user })
                return user;
            } catch (err) {
                console.log('userStore: Error in signup', err)
                throw err
            }

        },
        async logout({ commit }) {
            try {
                await userService.logout()
                commit({ type: 'setLoggedinUser', user: null })
            } catch (err) {
                console.log('userStore: Error in logout', err)
                throw err
            }
        },
        async loadUsers({ commit }) {
            // TODO: loading
            try {
                const users = await userService.getUsers();
                commit({ type: 'setUsers', users })
            } catch (err) {
                console.log('userStore: Error in loadUsers', err)
                throw err
            }
        },
        async loadAndWatchUser({ commit }, { userId }) {
            try {
                const user = await userService.getById(userId);
                commit({ type: 'setWatchedUser', user })
                socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
                socketService.off(SOCKET_EVENT_USER_UPDATED)
                socketService.on(SOCKET_EVENT_USER_UPDATED, user => {
                    commit({ type: 'setWatchedUser', user })
                })
            } catch (err) {
                console.log('userStore: Error in loadAndWatchUser', err)
                throw err
            }
        },
        async updateUser({ commit }, { user }) {
            try {
                user = await userService.update(user);
                commit({ type: 'setUser', user })
            } catch (err) {
                console.log('userStore: Error in updateUser', err)
                throw err
            }

        },
    }

}