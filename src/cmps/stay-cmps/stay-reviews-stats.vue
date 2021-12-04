<template>
  <section>
    <h2>stats</h2>
    <!-- todos -->
    <!-- functionality -->
    <!-- color -->
    <div class="review-stats">
      <div class="review-ctg flex space-between">
        <label for="Cleanliness">Cleanliness</label>
        <div>
            <span
          v-for="(num, idx) in 5"
          :key="idx"
          :class="{ checked: num <= Cleanliness }"
          class="fa fa-star"
          @click="setColor(num, 'Cleanliness')"
        ></span>
            </div>
      </div>
      <div class="review-ctg flex space-between">
        <label for="Communication">Communication</label>
        <div>
        <span
          v-for="(num, idx) in 5"
          :key="idx"
          :class="{ checked: num <= Communication }"
          class="fa fa-star"
          @click="setColor(num, 'Communication')"
        ></span>
        </div>
      </div>
      <div class="review-ctg flex space-between">
        <label for="CheckIn">Check-in</label>
        <div>
            <span
          v-for="(num, idx) in 5"
          :key="idx"
          :class="{ checked: num <= CheckIn }"
          class="fa fa-star"
          @click="setColor(num, 'CheckIn')"
        ></span>
        </div>
      </div>
      <div class="review-ctg flex space-between">
        <label for="Accuracy">Accuracy</label>
        <div>
            <span
          v-for="(num, idx) in 5"
          :key="idx"
          :class="{ checked: num <= Accuracy }"
          class="fa fa-star"
          @click="setColor(num, 'Accuracy')"
        ></span>
        </div>
      </div>
      <div class="review-ctg flex space-between">
        <label for="Location">Location</label>
        <div>
        <span
          v-for="(num, idx) in 5"
          :key="idx"
          :class="{ checked: num <= Location }"
          class="fa fa-star"
          @click="setColor(num, 'Location')"
        ></span>
        </div>
      </div>
      <div class="review-ctg flex space-between">
        <label for="Value">Value</label>
        <div>
        <span
          v-for="(num, idx) in 5"
          :key="idx"
          :class="{ checked: num <= Value }"
          class="fa fa-star"
          @click="setColor(num, 'Value')"
        ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "stayReviewsStats",
  props: {
    reviews: {
      type: Array,
      default: [],
    },
  },
    data() {
      return {
        rate: 3,
        Cleanliness: 1,
        Communication: 3,
        CheckIn: 5,
        Accuracy: 1,
        Location: 2,
        Value: 4,
      };
    },
    methods: {
      setColor(num, type) {
        this[type] = num;
      },
    },
  
};
</script>

<style>
</style>