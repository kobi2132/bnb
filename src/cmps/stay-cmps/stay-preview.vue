<template>
  <section class="stay-preview" @click="goToStay">
    <div class="stay-preview-info">
      <img :src="stay.imgUrls[0]" />
      <div class="rate-preview">
        ⭐{{ this.reviewsAvg }} ( {{ this.stay.reviews.length }} )
      </div>
      <div>{{ this.stay.propertyType }} • {{ this.stay.loc.country }}</div>
      <div>{{ this.stay.name }}</div>
      <div>${{ this.stay.price }} / night</div>

      <!-- 
      <h2>{{ toy.name }}</h2>
      <h4>{{ toy._id }}</h4>
      <h4>{{ toy.price }}$</h4>
      <h4>In stock? {{ toy.inStock }}</h4> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "stayPreview",
  props: {
    stay: {
      type: Object,
      default: {},
    },
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
