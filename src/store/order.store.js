export const orderStore = {
    state: {
        currTrip: {
            guests: { children: null, adults: null },
            destination: null,
            dates: []
        }
    },
    getters: {
        getDest(state) {
            return state.currTrip.destination
        },
        getGuests(state) {
            return state.currTrip.guests
        },
        getCurrTrip(state) {
            return state.currTrip
        }
    },
    mutations: {
        setTrip(state, { trip }) {
            console.log(trip)
            state.currTrip = trip
        }
    },
    actions: {}

}