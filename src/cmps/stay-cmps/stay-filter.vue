<template>
  <section class="filter-container flex align-center justify-center">
    <button
      class="mini-filter flex space-between align-center clickable"
      v-if="!miniFilter"
    >
      {{ currDest }} <span></span>
    </button>
    <form
      @submit.prevent="updateTrip"
      class="max-filter flex space-between align-center"
    >
      <div class="input-container" @click="shouldShow = false">
        <label>
          Location
          <input
            v-model="trip.destination"
            type="search"
            list="destination"
            class="dropdown"
            placeholder="Where are you going?"
          />
          <datalist id="destination">
            <option value="Tel Aviv"></option>
            <option value="Paris"></option>
            <option value="Santorini"></option>
            <option value="New York"></option>
          </datalist>
        </label>
      </div>
      <div class="input-container" @click="shouldShow = false">
        <!-- <trip-calendar-3 @updated="updateDates" /> --><trip-calendar-2 />
      </div>
      <div class="input-container" @click="shouldShow = !shouldShow">
        <label>
          Guests
          <input class="guests" placeholder="Add guests" disabled />
        </label>
      </div>
      <button class="search-btn">
        <span class="material-icons-outlined"> search </span>
      </button>
    </form>
    <div class="guests-modal flex column" v-if="shouldShow">
      <div class="guest-type-label flex space-between align-center">
        <div class="guest-label flex column">
          <span>Adults</span>
          <span>Ages 13 or above</span>
        </div>
        <div class="guest-btns flex align-center space-between">
          <button type="button" @click="updateGuests('adults', -1)">
            <span class="material-icons-sharp"> remove </span>
          </button>
          <span class="guests-num">{{ trip.guests.adults }}</span>
          <button type="button" @click="updateGuests('adults', 1)">
            <span class="material-icons-sharp"> add </span>
          </button>
        </div>
      </div>
      <div class="guest-type-label flex space-between align-center">
        <div class="guest-label flex column">
          <span>Children</span>
          <span>Ages 2-12</span>
        </div>
        <div class="guest-btns flex align-center space-between">
          <button type="button" @click="updateGuests('children', -1)">
            <span class="material-icons-sharp"> remove </span>
          </button>
          <span class="guests-num">{{ trip.guests.children }}</span>
          <button type="button" @click="updateGuests('children', 1)">
            <span class="material-icons-sharp"> add </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import tripCalendar from "../trip-calendar.vue";
import tripCalendar2 from "../trip-calendar2.vue";
import tripCalendar3 from "../trip-calendar3.vue";
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
export default {
  data() {
    return {
      miniFilter: false,
      range: null,
      trip: {
        guests: {
          adults: 0,
          children: 0,
        },
        destination: null,
        dates: [],
      },

      shouldShow: false,
    };
  },
  components: {
    tripCalendar,
    tripCalendar2,
    tripCalendar3,
    Calendar,
    DatePicker,
  },
  computed: {
    currDest() {
      var dest = this.$store.getters.getDest;
      console.log(dest);
      if (!dest) return "Start your search";
      else return dest;
    },
  },
  methods: {
    updateGuests(type, number) {
      if (this.trip.guests[type] === 0 && number === -1) return;
      this.trip.guests[type] += number;
    },
    updateTrip() {
      console.log("updating trip", this.trip);
      const trip = this.trip;
      this.$store.commit({ type: "setTrip", trip });
    },
    updateDates(dates) {
      this.trip.dates = dates;
    },
  },
};
</script>

<style scoped>
</style>