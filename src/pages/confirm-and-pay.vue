<template>
  <div class="confirm-and-pay main-layout">
    <div class="header">
      <router-link to="">
        <div class="back-btn">
          <span class="material-icons-outlined"> chevron_left </span>
        </div>
      </router-link>
      <h2>Confirm and pay</h2>
      <pre>{{ this.order }}</pre>
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
            <div class="guests">1 guest</div>
          </div>
        </div>
        <div class="separator"></div>
        <div class="pay-with">
          <div class="title-container">
            <div class="title1">Pay with</div>
            <div class="imgs">
              <img
                src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg"
                alt=""
              />
              <img
                src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_amex.84088b520ca1b3384cb71398095627da.svg"
                alt=""
              />
              <img
                src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_mastercard.f18379cf1f27d22abd9e9cf44085d149.svg"
                alt=""
              />
              <img
                src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_discover.7f05c82f07d62a0f8a69d54dbcd7c8be.svg"
                alt=""
              />
              <img
                src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_paypal.faa3042fa2daf6b4a9822cc4b43e8609.svg"
                alt=""
              />
              <img
                src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_googlepay.3f786bc031b59575d24f504dfb859da0.svg"
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
            <img
              src="https://www.anatshai.co.il/wp-content/uploads/%D7%A2%D7%A0%D7%A8-%D7%90%D7%92%D7%99%D7%91-1.jpg"
              alt=""
            />
            <div class="host">
              <div class="title2">Yami Kobin</div>
              <p class="title3">
                Hi<br />
                My Name is Hezi and i'm Happy that you decided to book My
                apartment.<br />Please let me know at what time you'll check in
                so i will wait for you with keys at the apartment.<br />Thank
                you (:
              </p>
            </div>
          </div>
          <textarea name="user-message" rows="4" cols="50"></textarea>
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
          <router-link class="confirm-btn" to="/congrats">
            <div class="confirm-btn">Confirm and pay</div>
          </router-link>
        </div>
      </div>

      <div class="details-modal sticky">
        <div class="modal-container">
          <div class="stay-details-container">
            <!-- <img :src="this.currStay.imgUrls[0]" alt="" /> -->
            <div class="details-flex">
              <div class="stay-details">
                <!-- <div class="title4">{{ this.currStay.propertyType }}</div>
                <div class="title3">{{ this.currStay.name }}</div> -->
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
  </div>
</template>

<script>
export default {
  name: "confirm-and-pay",
  data() {
    return {
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
      currStay: null,
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
      // return this.getRandomInt(15, 80);
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
        console.log(order);
        this.order = order;
        console.log(this.order);
        // const order = this.$store.getters.getCurrOrder;
        this.currStay = this.$store.getters.getCurrStay;
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>