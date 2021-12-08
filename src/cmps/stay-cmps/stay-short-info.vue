<template>
  <!-- todos -->
  <!-- star rating section -->
  <section class="short-info flex space-between align-center">
    <section class="flex">
      <span class="material-icons-outlined red-star"> star </span>
      <h4 class="spacer short-info-txt">{{ this.reviewsRateAvg }}</h4>
      <h4 class="short-info-txt short-info-gray under-line">
        ({{ this.stay.reviews.length }} reviews)
      </h4>
      <span class="spacer short-info-gray wide">•</span>
      <h4 class="short-info-txt short-info-gray under-line">
        {{ stay.loc.city }} , {{ stay.loc.country }}
      </h4>
    </section>

    <section class="flex">
      <button class="short-info-btn clean-btn flex align-center">
        <span class="material-icons-outlined short-info-logo"> ios_share </span
        ><span class="under-line">Share</span>
      </button>
      <button class="short-info-btn short-save clean-btn flex align-center">
        <span
          class="material-icons-outlined short-heart"
          :class="{ active: isLiked }"
          @click.stop="toggleWishList"
        >
          favorite
        </span>
        <span class="under-line">Save</span>
      </button>
    </section>
  </section>
</template>

<script>
import { userService } from "../../../services/user.service.js";

export default {
  name: "stayShortInfo",
  props: {
    stay: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      isLiked: false,
    };
  },
  created() {
    const user = userService.getLoggedinUser();
    if (user && user.wishList && user.wishList.length > 0) {
      var isWish = user.wishList.filter((wish) => wish === this.stay._id);
      if (isWish.length > 0) this.isLiked = true;
    }
  },
  computed: {
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
    reviewsCount() {
      return this.stay.reviews.length;
    },
  },
  methods: {
    toggleWishList() {
      var stayId = this.stay._id;
      this.$store.dispatch({ type: "toggleWishList", stayId });
      this.isLiked = !this.isLiked;

      console.log(this.isLiked);
    },
  },
};
</script>

<style>
</style>