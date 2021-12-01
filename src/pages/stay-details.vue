  <!-- <pre>{{ stays }} </pre> -->
  <!-- change rate to rates avg -->


<template>
<section v-if="stay" class="stay-details app-main">
    <h1>stay details</h1>
    <h2>{{ stay.name }}</h2>
    <section>
        <h4>⭐{{ this.reviewsAvg }}</h4>
        <h4>{{stay.loc.address}}</h4>
        <button>❤</button>
        <button>📤</button>
    </section>
    <div>stay gallery</div>
    <section>
        <h4>{{stay.summery}}</h4>
        <h5>{{stay.capacity}} guests | bedrooms | beds | bath </h5>
        <img class="host-img" :src="stay.host.imgUrl" />
    </section>
    <section class="stay-feature-container">
        <h4>features with icon and details</h4>
        <h4>features with icon and details</h4>
        <h4>features with icon and details</h4>
        <h4>features with icon and details</h4>
    </section>
    <section class="stay-description">
        <h4>description</h4>
        <h3>add description to stay obj</h3>
    </section>
    <section class="stay-amenities">
        <h4>amenities</h4>
        <ul class="amenities-list">
            <li v-for="(amenity, idx) in stay.amenities" :key="idx" class="amenity-container clean-list" >
                <h5>{{amenity}}</h5>
            </li>
        </ul>
    </section>
    <h4>
      Reviews:
      <span v-for="(review, idx) in stay.reviews" :key="idx" class="clean-list">
        {{ review }}
      </span>
    </h4>
  </section>
</template>

<script>
export default {
  name: "stayDetails",
  computed: {
    stay() {
      return this.$store.getters.getCurrStay;
    },
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
  methods: {},
  watch: {
    "$route.params.stayId": {
      handler() {
        let stayId = this.$route.params.stayId;
        console.log("Changed to", stayId);
        this.$store.dispatch({ type: "setCurrStay", stayId });
      },
      immediate: true,
    },
  },
};
</script>

<style>
.host-img{
    height: 100px;
    width: 100px;
    border-radius: 50%;
    }
</style>