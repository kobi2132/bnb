<template>
  <section class="stay-review-list">
    <h2>reviews list</h2>
      <ul class="reviews-list-container clean-list">
      <li v-for="(review, idx) in reviews" :key="idx" class="review-preview-container">
        <review-preview :review="review" />
      </li>
    </ul>
  </section>
</template>

<script>
import reviewPreview from './review-preview.vue'


export default {
  name: "stayReviewsList",
  props: {
    reviews: {
      type: Array,
      default: [],
    },
  },
  components:{
    reviewPreview
  }
    
  
};
</script>

<style>
</style>