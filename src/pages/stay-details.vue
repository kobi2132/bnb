
<template>
  <section v-if="stay" class="stay-details main-layout">
    <h2>{{ stay.name }}</h2>

    <stay-short-info :stay="stay" />

    <stay-gallery :stay="stay" />
    <section class="stay-display-divider flex">
<div class="stay-display-info">
<section class="stay-summery-container flex space-between align-center " >
  <div>
      <h2 class="stay-summery">{{ stay.summary }} hosted by {{stay.host.fullname}}</h2>
      <h5 class="stay-capacity">{{ stay.capacity }} guests | 4 bedrooms | 4 beds | 2 baths</h5>
  </div>
      <img class="host-img" :src="stay.host.imgUrl" />
    </section>

    <stay-features />

    <stay-description :stay="stay" />
</div>
<div class="stay-display-order">
  <order-modal :stay="stay" class="sticky"/>
</div>
    </section>
    
    <stay-reviews :reviews="stay.reviews" />

  </section>
</template>

<script>
import stayGallery from "@/cmps/stay-cmps/stay-gallery.vue";
import stayShortInfo from "@/cmps/stay-cmps/stay-short-info.vue";
import stayFeatures from "@/cmps/stay-cmps/stay-features.vue";
import stayDescription from "@/cmps/stay-cmps/stay-description.vue";
import stayReviews from "@/cmps/stay-cmps/stay-reviews.vue";
import orderModal from "@/cmps/stay-cmps/order-modal.vue";

export default {
  name: "stayDetails",

  components: {
    stayGallery,
    stayShortInfo,
    stayFeatures,
    stayDescription,
    stayReviews,
    orderModal,
  },

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
    reviewsCount() {
      // problem with count
      let count = this.stay.reviews.length;
      console.log(count, "reviews");
      if ((count = 1)) {
        var str = `(${count} review)`;
      } else {
        var str = `(${count} reviews)`;
      }
      return str;
    },
    // reviewRateTotal(){
    //    const sum = this.stay.reviews.rate.reduce(
    //     (sum, rate) => sum + rate.score,{});
    //   console.log('sum', sum)
    //   return sum
    // }
    reviewRateAvg() {
      console.log(this.stay.reviews[0].rate);
      const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);
      const sum = sumValues(this.stay.reviews[0].rate);
      //  const sum = this.stay.reviews.rate.reduce(
      //   (sum, rate) => sum + rate.score,{});
      console.log("sum", sum);
      return sum / 6;
    },
    // reviewsRateAvg
  },
  methods: {},
  watch: {
    "$route.params.stayId": {
      handler() {
        let stayId = this.$route.params.stayId;
        console.log("Changed to", stayId);
        this.$store.dispatch({ type: "setCurrStay", stayId });
        const page = "stayDetails";
        this.$store.commit({ type: "setCurrPage", page });
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>