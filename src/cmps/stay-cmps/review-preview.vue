<template>
  <section>
    <!-- <h4>review preview</h4> -->
    <div class="review-preview-header flex">
      <!-- <img src="~@/assets/images/{{review.by.imgUrl}}" alt="" class="host-img"> -->
      <img src="~@/assets/images/review-avatar.png" alt="" class="host-img" />
      <div>
        <h4>{{ review.by.fullname }}</h4>
        <h5>{{ review.date }}</h5>
      </div>
    </div>
    <span>{{ review.txt }}</span>
  </section>
</template>

<script>
export default {
  name: "reviewPreview",
  props: {
    review: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style>
</style>