<template>
  <section class="stay-preview clickable" @click="goToStay">
    <div class="stay-preview-slideshow">
      <stay-preview-slideshow :imgs="stay.imgUrls" />
      <div class="like-stay" >
        <span class="material-icons" :class="isLiked" @click.stop="toggleWishList">
          favorite
        </span>
      </div>
    </div>
    <div class="stay-preview-info">
      <div class="reviews-preview">
        <div class="star-preview">
          <span class="material-icons">star</span>
        </div>
        <span class="review-avg">{{ this.reviewsAvg }}&nbsp;</span
        ><span class="reviews-total">( {{ this.stay.reviews.length }} )</span>
      </div>
      <div>{{ this.stay.propertyType }} • {{ this.stay.loc.country }}</div>
      <div>{{ this.stay.name }}</div>
      <div>
        <span class="bold">${{ this.stay.price }}</span> / night
      </div>
    </div>
  </section>
</template>

<script>
import stayPreviewSlideshow from "@/cmps/stay-cmps/stay-preview-slideshow.vue";

export default {
  name: "stayPreview",
  props: {
    stay: {
      type: Object,
      default: {},
    },
  },
  components: {
    stayPreviewSlideshow,
  },
  data() {
    return {
      isWishList: {
        wishList: false,
        unWishList: true
      },
    };
  },
  computed: {
    reviewsAvg() {
      const sum = this.stay.reviews.reduce(
        (sum, review) => sum + review.rate,
        0
      );
      var avg = sum / this.stay.reviews.length || 0;
      avg = (Math.round(avg * 100) / 100).toFixed(1);
      return avg;
    },
  },
  methods: {
    goToStay() {
      this.$router.push("/stay/" + this.stay._id);
    },
    toggleWishList() {
      var stayId = this.stay._id;
      console.log(stayId);
      this.$store.dispatch({ type: "toggleWishList", stayId });
      this.isWishList.wishList=!this.isWishList.wishList
      this.isWishList.unWishList=!this.isWishList.unWishList
    },
  },
};
</script>
