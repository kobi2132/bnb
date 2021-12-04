<template>
  <div class="order-modal-container">
    <div class="order-modal flex column align-center justify-center">
      <div class="order-form-header flex space-between align-center">
        <div>
          <span class="bold">${{ this.stay.price }}</span> / night
        </div>
        <div class="reviews-preview flex">
          <div class="star-preview">
            <span class="material-icons">star</span>
          </div>
          <!-- <span class="review-avg">{{ this.reviewsAvg }}&nbsp;</span> -->
          <span class="reviews-total">( {{ this.stay.reviews.length }} )</span>
        </div>
      </div>
      <form @submit.prevent="placeOrder" class="order-form">
        <trip-calendar-2 :dates="trip.dates" @updated="updateDates" />
        <div
          class="input-container guests-input"
          @click="shouldShow = !shouldShow"
        >
          <label>
            Guests
            <div class="expand-btn">
              <span
                class="material-icons-outlined"
                :class="{ flip: shouldShow }"
              >
                expand_more
              </span>
            </div>
            <input class="guests" :placeholder="numOfGuests" disabled />
          </label>
          <div class="guests-modal flex column" v-if="shouldShow">
            <div class="guest-type-label flex space-between align-center">
              <div class="guest-label flex column">
                <span>Adults</span>
                <span>Ages 13+</span>
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
        </div>
        <button class="reserve-btn">Reserve</button>
      </form>
      <p>You won't be charged yet</p>
      <div class="pricing">
        <p>Price</p>
        <p>Service fee</p>
        <p>Total</p>
      </div>
    </div>
  </div>
</template>

<script>
import tripCalendar2 from "../trip-calendar2.vue";
export default {
  name: "order-modal",
  props: ["stay"],
  data() {
    return {
      shouldShow: false,
      trip: {
        guests: {
          adults: 0,
          children: 0,
        },
        destination: null,
        dates: {},
      },
    };
  },
  created() {
    console.log("order form created", this.trip);
    this.trip = this.$store.getters.getCurrTrip;
  },
  methods: {
    placeOrder() {
      console.log("placing order!");
    },
    updateGuests(type, number) {
      if (this.trip.guests[type] === 0 && number === -1) return;
      this.trip.guests[type] += number;
      this.updateTrip();
    },
    updateTrip() {
      console.log("updating trip", this.trip);
      const trip = this.trip;
      this.$store.commit({ type: "setTrip", trip });
    },
    updateDates(dates) {
      this.trip.dates = dates;
      this.updateTrip();
    },
  },
  computed: {
    numOfGuests() {
      const guestsCount = this.trip.guests.children + this.trip.guests.adults;
      if (guestsCount > 1) return guestsCount + " guests";
      else if (guestsCount === 1) return guestsCount + " guest";
      else return "Add guests";
    },
  },
  components: {
    tripCalendar2,
  },
};
</script>

<style>
</style>