<template>
  <div class="confirm-and-pay main-layout2">
    <div class="header">
      <router-link to="">
        <div class="back-btn">
          <span class="material-icons-outlined"> chevron_left </span>
        </div>
      </router-link>
      <h2>Confirm and pay</h2>
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
          <div class="title1">Pay with</div>
          <el-select class="payment-select" v-model="value" placeholder="Select payment methods">
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
            <img src="https://www.anatshai.co.il/wp-content/uploads/%D7%A2%D7%A0%D7%A8-%D7%90%D7%92%D7%99%D7%91-1.jpg" alt="" />
            <div class="host">
              <div class="title2">Yami Kobin</div>
              <p class="title3">
                Hi<br>
                My Name is Hezi and i'm Happy that you decided to book My
                apartment.<br>Please let me know at what time you'll check in so i
                will wait for you with keys at the apartment.<br>Thank you (:
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
            By selecting the button below, I agree to the <span>Host's House Rules</span>,
            <span>Airbnb's COVID-19 Safety Requirements</span> and the <span>Guest Refund Policy</span>.
          </p>
          <router-link class="confirm-btn" to="/congrats">
            <div class="confirm-btn">Confirm and pay</div>
          </router-link>
        </div>
      </div>
      <div class="details-modal">
        <div class="modal-container">
          I'M MODAL, HELLO
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
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      value: "Google Pay",
    };
  },

  computed: {
    stays() {
      return this.$store.getters.staysToShow;
    },
  },
};
</script>

<style>
</style>