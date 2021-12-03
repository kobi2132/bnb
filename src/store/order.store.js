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
        }
    },
    mutations: {
        setTrip(state, { trip }) {
            console.log(trip)
            state.currTrip = trip
        },
        updateDest(state, { dest }) {
            console.log(dest)
            state.currTrip.destination = dest
            console.log(state.currTrip)
        }
    },
    actions: {}

}