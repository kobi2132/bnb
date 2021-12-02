<template>
  <section class="stay-reviews-container">

      <div class="stay-reviews-header">
        <h2>
          <span class="material-icons-outlined"> star </span>
         {{ reviewsRateAvg }}
         ({{this.reviews.length}} reviews) 
        </h2>
          <!-- <template v-for="(review, idx) in reviews">
                
          </template> -->
      </div>


      <div class="stay-reviews-stats"></div>
    </section>
</template>

<script>
export default {
name: "stayReviews",
  props: {
    reviews: {
      type: Object,
      default: [],
    },
  },
  computed: {
    reviewsRateAvg(){
      var sum = 0
      this.reviews.forEach(review => {
        sum +=this.reviewRateAvg(review)
        console.log(sum)
      });
    },

    reviewRateAvg(review) {
      console.log(review.rate);
      const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);
      const sum = sumValues(this.review.rate);
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