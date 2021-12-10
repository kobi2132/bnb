<template>
  <div class="confirm-and-pay main-layout2">
    <div class="header">
      <router-link to="">
        <div class="back-btn">
          <span class="material-icons-outlined"> chevron_left </span>
        </div>
      </router-link>

      <h2 class="left">Confirm and pay</h2>
    </div>
    <div class="details-and-pay">
      <div class="trip-info">
        <div class="your-trip">
          <div class="title1">Your trip</div>
          <div class="dates-section">
            <div class="title2">Dates</div>
            <div class="dates">Dec 11-13</div>
          </div>
          <div class="guests-section">
            <div class="title2">Guests</div>
            <div class="guests">{{ this.getTotalGuests }} guests</div>
          </div>
        </div>
        <div class="separator"></div>
        <div class="pay-with">
          <div class="title-container">
            <div class="title1">Pay with</div>
            <div class="imgs">
              <img
                src="https://res.cloudinary.com/djdkizcaq/image/upload/v1639056057/bnb-proj/Money%20Money%20Money/logo_visa.0adea522bb26bd90821a8fade4911913_vuvn32.svg"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/djdkizcaq/image/upload/v1639056057/bnb-proj/Money%20Money%20Money/logo_amex.84088b520ca1b3384cb71398095627da_ed7luy.svg"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/djdkizcaq/image/upload/v1639056057/bnb-proj/Money%20Money%20Money/logo_mastercard.f18379cf1f27d22abd9e9cf44085d149_nkxu5w.svg"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/djdkizcaq/image/upload/v1639056057/bnb-proj/Money%20Money%20Money/logo_discover.7f05c82f07d62a0f8a69d54dbcd7c8be_p2axcq.svg"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/djdkizcaq/image/upload/v1639056057/bnb-proj/Money%20Money%20Money/logo_paypal.faa3042fa2daf6b4a9822cc4b43e8609_l0ie4i.svg"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/djdkizcaq/image/upload/v1639056057/bnb-proj/Money%20Money%20Money/logo_googlepay.3f786bc031b59575d24f504dfb859da0_nfccnv.svg"
                alt=""
              />
            </div>
          </div>
          <el-select
            class="payment-select"
            v-model="value"
            placeholder="Select payment methods"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <a href="http://" class="title2">Enter a coupon</a>
        </div>
        <div class="separator"></div>
        <div class="required">
          <div class="title1">Required for your trip</div>
          <div class="title2">Message the Host</div>
          <div class="title3">
            Let the Host know why you're traveling and when you'll check in.
          </div>
          <div class="host-message">
            <img :src="this.order.stay.host.imgUrl" alt="" />
            <div class="host">
              <div class="title2">{{ this.order.stay.host.fullname }}</div>
              <p class="title3">
                Hi<br />
                My Name is {{ this.order.stay.host.fullname }} and i'm Happy
                that you decided to book My apartment.<br />Please let me know
                at what time you'll check in so i will wait for you with keys at
                the apartment.<br />Thank you (:
              </p>
            </div>
          </div>
          <textarea name="user-message"></textarea>
        </div>
        <div class="separator"></div>
        <div class="cancell-policy">
          <div class="title1">Cancellation policy</div>
          <p class="title2">
            Non-refundable: Cancel before check-in and get back only the
            cleaning fee, if you paid one. <span>Learn more</span>
          </p>
          <p>
            Our Extenuating Circumstances policy does not cover travel
            disruptions caused by COVID-19. <span>Learn more</span>
          </p>
        </div>
        <div class="separator"></div>
        <div class="congrats">
          <p class="title4">
            By selecting the button below, I agree to the
            <span>Host's House Rules</span>,
            <span>Airbnb's COVID-19 Safety Requirements</span> and the
            <span>Guest Refund Policy</span>.
          </p>
          <button class="confirm-btn" @click="setCongratsModal">
            Confirm and pay
          </button>
        </div>
      </div>

      <div class="details-modal sticky">
        <div class="modal-container">
          <div class="stay-details-container">
            <img :src="this.order.stay.imgUrls[0]" alt="" />
            <div class="details-flex">
              <div class="stay-details">
                <div class="title4">{{ this.order.stay.propertyType }}</div>
                <div class="title3">{{ this.order.stay.name }}</div>
              </div>
              <div class="reviews-preview">
                <div class="star-preview">
                  <span class="material-icons-outlined">star</span>
                </div>
                <span class="review-avg">4.6&nbsp;</span>
                <span class="reviews-total">(4)</span>
              </div>
            </div>
          </div>

          <div class="separator"></div>
          <div class="price-details-container">
            <div class="title1">Price details</div>
            <div class="price-detail">
              <div class="title2">
                ${{ this.order.stay.price }}.00 x
                {{ this.calculateTotalDays }} nights
              </div>
              <div class="title2">${{ this.calculatePrice }}.00</div>
            </div>
            <div class="price-detail">
              <div class="title2 underline">Cleaning fee</div>
              <div class="title2">$25.00</div>
            </div>
            <div class="price-detail">
              <div class="title2 underline">Service fee</div>
              <div class="title2 green">$0.00</div>
            </div>
            <div class="price-detail">
              <div class="title2 bold">
                Total <span class="underline">(USD)</span>
              </div>
              <div class="title2 bold">${{ this.calculatePrice + 25 }}.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="congrats-modal-container" v-if="congratsModal">
      <div class="congrats-modal">
        <div class="title">Your order is complete!</div>
        <div class="title-1">
          Your order is pending confirmation from the host
        </div>
        <div class="title-2">
          You won't be charged until the host approves your order
        </div>
        <div class="separator"></div>
        <div class="links-container">
          <router-link class="btn" to="/">Home page </router-link>
          <router-link class="btn" to="/trips"
            >Share your stay with your friends and family
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "confirm-and-pay",
  data() {
    return {
      congratsModal: false,
      options: [
        {
          value: "googlePay",
          label: "Google Pay",
        },
        {
          value: "payPal",
          label: "PayPal",
        },
        {
          value: "creditCard",
          label: "Credit or debit card",
        },
      ],
      value: "Google Pay",
      order: null,
      totalGuests: null,
    };
  },
  created() {
    const page = "confirm";
    this.$store.commit({ type: "setCurrPage", page });
  },
  computed: {
    calculateTotalDays() {
      const { start, end } = this.order.dates;
      const days = (Date.parse(end) - Date.parse(start)) / (1000 * 3600 * 24);
      return days;
    },
    calculatePrice() {
      const days = this.calculateTotalDays;
      return parseInt(days * this.order.stay.price);
    },
    fees() {
      return 25;
    },
    getTotalGuests() {
      return this.totalGuests;
    },
  },
  methods: {
    setCongratsModal(){
console.log(this.congratsModal);
      this.congratsModal = true
      console.log(this.congratsModal);

    },
  },
  watch: {
    "$route.params.orderId": {
      async handler() {
        let orderId = this.$route.params.orderId;
        let order = await this.$store.dispatch({
          type: "getOrderById",
          orderId,
        });
        this.order = order;
        // console.log(this.order);
        this.totalGuests =
          this.order.guests.adults + this.order.guests.children;
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>