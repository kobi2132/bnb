<template>
<!-- todos -->
<!-- star rating section -->
   <section class="short-info flex space-between align-center">
      <section class="flex">
        <h4 class="spacer"> <span class="material-icons-outlined"> star </span> {{ this.reviewsRateAvg }}</h4>
        <h4>({{this.stay.reviews.length}} reviews)</h4>
        <span class="spacer">•</span>
        <h4>{{ stay.loc.city }} , {{ stay.loc.country }}</h4>
      </section>

      <section class="flex">
        <button class="short-info-btn clean-btn flex align-center">
          <span class="material-icons-outlined"> ios_share </span> share
        </button>
        <button class="short-info-btn clean-btn flex align-center">
          <span class="material-icons-outlined kobi-heart"> favorite </span>
          save
        </button>
      </section>
    </section>
</template>

<script>
export default {
name: "stayShortInfo",
  props: {
    stay: {
      type: Object,
      default: {},
    },
  },
  computed: {
    reviewsRateAvg(){
      var avgsSum = 0
      this.stay.reviews.forEach(review => {
        const sumRates = (obj) => Object.values(obj).reduce((a, b) => a + b);
        const currSum = sumRates(review.rate);
        const currSumAvg = currSum/6
        avgsSum += currSumAvg
      });
      avgsSum= avgsSum/this.stay.reviews.length
      return avgsSum.toFixed(1)
    },
    reviewsCount(){
      
      return this.stay.reviews.length
    }
  }
}
</script>

<style>

</style>