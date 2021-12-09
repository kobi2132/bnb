<template>
  <div class="order-modal-container" ref="modal">
    <div
      class="order-modal flex column align-center justify-center"
      :class="{ miniModal }"
    >
      <div class="mini-modal-container">
        <div class="details-mini-nav" v-if="miniModal">
          <a @click="goToSection('pictures')"><span>Photos</span></a>
          <a @click="goToSection('ameneties')"><span>Ameneties</span></a>
          <a @click="goToSection('reviews')">Reviews</a>
        </div>
        <div class="order-form-header flex space-between align-center">
          <div>
            <span class="bold">${{ this.stay.price }}</span> / night
          </div>
          <div class="reviews-preview flex">
            <div class="star-preview">
              <span class="material-icons-outlined star">star</span>
            </div>
            <span class="review-avg">{{ reviewsRateAvg }}&nbsp;</span>
            <span class="reviews-total"
              >({{ this.stay.reviews.length
              }}<span class="mini-total"></span>)</span
            >
          </div>
        </div>
        <button
          @click="placeOrder"
          v-if="miniModal"
          class="reserve-btn clickable"
          :style="{ '--mouse-x': this.mouse.x, '--mouse-y': this.mouse.y }"
        >
          {{ buttonText }}
        </button>
      </div>
      <form @submit.prevent="placeOrder" class="order-form">
        <trip-calendar-2
          :dates="trip.dates"
          @updated="updateDates"
          ref="calendar"
        />
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
                <button type="button" @click.stop="updateGuests('adults', -1)">
                  <span class="material-icons-sharp"> remove </span>
                </button>
                <span class="guests-num">{{ adults }}</span>
                <button type="button" @click.stop="updateGuests('adults', 1)">
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
                <button
                  type="button"
                  @click.stop="updateGuests('children', -1)"
                >
                  <span class="material-icons-sharp"> remove </span>
                </button>
                <span class="guests-num">{{ children }}</span>
                <button type="button" @click.stop="updateGuests('children', 1)">
                  <span class="material-icons-sharp"> add </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          class="reserve-btn clickable"
          :style="{ '--mouse-x': this.mouse.x, '--mouse-y': this.mouse.y }"
        >
          {{ buttonText }}
        </button>
      </form>
      <div class="pricing" v-if="readyToReserve">
        <p>You won't be charged yet</p>
        <p>
          <span>Price</span><span> ${{ calculateTotalPrice }}</span>
        </p>
        <p>
          <span>Service fee</span> <span>${{ fees }}</span>
        </p>
        <p>
          <span>Total</span><span> ${{ calculateTotalPrice + fees }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import logInVue from "../../pages/log-in.vue";
import tripCalendar2 from "../trip-calendar2.vue";
import { showMsg } from "../../../services/event-bus.service.js";
export default {
  name: "order-modal",
  props: { stay: Object, conHeight: Number },
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
      readyToReserve: false,
      mouse: {
        x: null,
        y: null,
      },
      order: {
        _id: null,
        dates: {},
        guests: {
          adults: 0,
          children: 0,
        },
        buyer: {
          _id: null,
          fullname: null,
        },
        stay: {
          _id: null,
          name: null,
          price: null,
          imgUrls: null,
          propertyType: null,
        },
        hostId: null,
        status: "pending",
      },
      loggedinUser: null,
      miniModal: false,
      modalHeight: null,
    };
  },
  created() {
    this.trip = this.$store.getters.getCurrTrip;
    this.loggedinUser = this.$store.getters.loggedinUser;
    console.log(this.loggedinUser);
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.getModalHeight();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    goToSection(sectionId) {
      console.log("goinng to section ", sectionId);
      this.$router.push(`/stay/${this.stay._id}/#${sectionId}`).catch(() => {});
    },
    focusOnInput() {
      this.$refs.calendar.focusInput();
    },
    getModalHeight() {
      this.modalHeight = this.$refs.modal.clientHeight;
    },
    async placeOrder() {
      const loggedinUser = this.$store.getters.loggedinUser;
      if (!loggedinUser) showMsg("Please log in first", "danger");
      else {
        var size = Object.keys(this.trip.dates).length;
        if (
          (!this.trip.guests.children && !this.trip.guests.adults) ||
          size < 1
        ) {
          console.log("Not enough data");
          this.focusOnInput();
          return;
        } else {
          var { dates, guests } = this.trip;
          var { _id, name, price, imgUrls, propertyType, host } = this.stay;
          this.order = {
            dates,
            guests,
            stay: { _id, name, price, imgUrls, propertyType, host },
          };
          this.order.buyer = {
            _id: this.loggedinUser._id,
            fullname: this.loggedinUser.fullname,
          };
          this.order.hostId = this.stay.host._id;
          this.order.status = "pending";
          let order = JSON.parse(JSON.stringify(this.order));
          console.log(order);
          const savedOrder = await this.$store.dispatch({
            type: "addOrder",
            order,
          });
          console.log(savedOrder);
          this.$router.push(`/order-confirm/${savedOrder._id}`);
        }
      }
    },
    updateGuests(type, number) {
      // const min = type === "adults" ? 1 : 0;
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
    handleScroll() {
      this.miniModal = window.scrollY >= this.conHeight + this.modalHeight;
    },
  },
  computed: {
    children() {
      if (this.trip.guests.children === null) return 0;
      else return this.trip.guests.children;
    },
    adults() {
      if (this.trip.guests.adults === null) return 0;
      else return this.trip.guests.adults;
    },
    numOfGuests() {
      const guestsCount = this.trip.guests.children + this.trip.guests.adults;
      if (guestsCount > 1) return guestsCount + " guests";
      else if (guestsCount === 1) return guestsCount + " guest";
      else return "Add guests";
    },
    buttonText() {
      var size = Object.keys(this.trip.dates).length;
      if ((this.trip.guests.adults || this.trip.guests.children) && size > 1) {
        this.readyToReserve = true;
        return "Reserve";
      } else {
        this.readyToReserve = false;
        return "Check availability";
      }
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
        return parseInt(this.stay.price * timeDiff);
      }
    },
    fees() {
      return 25;
      // return this.getRandomInt(15, 80);
    },
  },
  components: {
    tripCalendar2,
    showMsg,
  },
};
</script>

<style>
</style>