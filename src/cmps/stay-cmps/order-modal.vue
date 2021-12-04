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
          <span class="review-avg">{{ reviewsRateAvg }}&nbsp;</span>
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
        <button class="reserve-btn">{{ buttonText }}</button>
      </form>
      <p>You won't be charged yet</p>
      <div class="pricing">
        <p>Price {{ calculateTotalPrice }}</p>
        <p>Service fee {{ fees }}</p>
        <p>Total {{ totalPay }}</p>
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
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    },
  },
  computed: {
    numOfGuests() {
      const guestsCount = this.trip.guests.children + this.trip.guests.adults;
      if (guestsCount > 1) return guestsCount + " guests";
      else if (guestsCount === 1) return guestsCount + " guest";
      else return "Add guests";
    },
    buttonText() {
      var size = Object.keys(this.trip.dates).length;
      if ((this.trip.guests.adults || this.trip.guests.children) && size > 1) {
        return "Reserve";
      } else return "Check availability";
    },
    reviewsRateAvg() {
      var avgsSum = 0;
      this.stay.reviews.forEach((review) => {
        const sumRates = (obj) => Object.values(obj).reduce((a, b) => a + b);
        const currSum = sumRates(review.rate);
        const currSumAvg = currSum / 6;
        avgsSum += currSumAvg;
      });
      avgsSum = avgsSum / this.stay.reviews.length;
      return avgsSum.toFixed(1);
    },
    calculateTotalPrice() {
      var size = Object.keys(this.trip.dates).length;
      if (size > 1) {
        const { start, end } = this.trip.dates;
        const timeDiff = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
        console.log(timeDiff);
        return this.stay.price * timeDiff;
      }
    },
    fees() {
      return this.getRandomInt(15, 80);
    },
    totalPay() {
      this.fees * this.calculateTotalPrice;
    },
  },
  components: {
    tripCalendar2,
  },
};
</script>

<style>
</style>