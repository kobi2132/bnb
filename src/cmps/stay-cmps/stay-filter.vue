<template>
  <section class="filter-container flex align-center">
    <button
      class="mini-filter flex space-between align-center clickable"
      v-if="miniFilter"
    >
      Start your search <span></span>
    </button>
    <form @submit.prevent="updateTrip" class="max-filter">
      <div class="input-container">
        <label
          >Location
          <select name="location">
            <option value="">Where are you going?</option>
            <option value="tel-aviv">Tel Aviv</option>
            <option value="paris">Paris</option>
            <option value="santorini">Santorini</option>
            <option value="nyc">New York</option>
          </select>
        </label>
      </div>
      <!-- <trip-calendar-2 /> -->
      <div class="input-container">
        <trip-calendar-3 />
      </div>
      <div class="input-container">
        <label>
          Guests
          <input class="guests" placeholder="Add guests" />
        </label>
        <button class="search-btn">
          <span class="material-icons-outlined"> search </span> Search
        </button>
      </div>
    </form>
    <div class="guests-modal">
      <div class="guest-type-label">
        <div class="guest-label">
          <span>Adults</span>
          <span>Ages 13 or above</span>
        </div>
        <div class="guest-btns">
          <button type="button" @click="updateGuests('adults', -1)">-</button>
          <span>{{ guests.adults }}</span>
          <button type="button" @click="updateGuests('adults', 1)">+</button>
        </div>
      </div>
      <div class="guest-type-label">
        <div class="guest-label">
          <span>Children</span>
          <span>Ages 2-12</span>
        </div>
        <div class="guest-btns">
          <button type="button" @click="updateGuests('children', -1)">-</button>
          <span>{{ guests.children }}</span>
          <button type="button" @click="updateGuests('children', 1)">+</button>
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
      guests: {
        adults: 0,
        children: 0,
      },
    };
  },
  components: {
    tripCalendar,
    tripCalendar2,
    tripCalendar3,
    Calendar,
    DatePicker,
  },
  methods: {
    updateGuests(type, number) {
      this.guests[type] += number;
    },
    updateTrip() {
      console.log("updating trip");
    },
  },
};
</script>

<style>
</style>