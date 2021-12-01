<template>
  <section class="stay-preview">
    <div class="stay-preview-info">
      <stay-preview-slideshow :imgs="stay.imgUrls" />
      <div @click="goToStay">
        <div class="rate-preview">
          ⭐{{ this.reviewsAvg }} ( {{ this.stay.reviews.length }} )
        </div>
        <div>{{ this.stay.propertyType }} • {{ this.stay.loc.country }}</div>
        <div>{{ this.stay.name }}</div>
        <div>${{ this.stay.price }} / night</div>
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
    return {};
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
  },
};
</script>
