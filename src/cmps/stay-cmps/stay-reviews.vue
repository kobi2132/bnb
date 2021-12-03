<template>
  <section class="stay-reviews-container">

      <div class="stay-reviews-header">
        <h2>
          <span class="material-icons-outlined"> star </span>
          {{ reviewsRateAvg }}
          ({{this.reviews.length}} reviews) 
        </h2>
        <div class="stay-reviews-stats">
          
        </div>
          <!-- <template v-for="(review, idx) in reviews">
          
          </template> -->
      </div>
      <add-stay-review />

      
    </section>
</template>

<script>
// import StarRating from 'vue-star-rating'
import addStayReview from './add-stay-review.vue'

export default {
name: "stayReviews",
  props: {
    reviews: {
      type: Array,
      default: [],
    },
  },
  components: {
  addStayReview
},
  computed: {
    reviewsRateAvg(){
      // console.log('reviews' , this.reviews);
      // console.log('reviews', this.reviews);
      var avgsSum = 0
      this.reviews.forEach(review => {
        // console.log('review rate', review.rate)
        const sumRates = (obj) => Object.values(obj).reduce((a, b) => a + b);
        const currSum = sumRates(review.rate);
        const currSumAvg = currSum/6
        avgsSum += currSumAvg
        // console.log('currsum', currSum, 'avgsum', avgsSum)
      });
      avgsSum= avgsSum/this.reviews.length
      // console.log( 'final', avgsSum)
      return avgsSum.toFixed(1)
    },

    reviewRateAvg(review) {
      console.log(review);
      // const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);
      // const sum = sumValues(review.rate);
      //  const sum = this.stay.reviews.rate.reduce(
      //   (sum, rate) => sum + rate.score,{});
      console.log("sum", sum);
      return sum / 6;
    },
  }
}
</script>

<style>

</style>