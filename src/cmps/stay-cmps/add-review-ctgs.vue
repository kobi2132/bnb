<template>
  <div class="review-stats">
    <div class="add-review-ctg flex space-between">
      <label for="Cleanliness">Cleanliness</label>
      <!-- <div class="stars-container">
                    <span v-for="(num, idx) in 5" :key="idx" :class="{checked:num<=Cleanliness}" class="material-icons-outlined clickable"
                @click="changeColor(num, 'Cleanliness')">star</span>
                    </div> -->
      <!-- new -->
      <div class="gray-scale flex clickable">
        <div
          v-for="(num, idx) in 5"
          :key="idx"
          :class="{ blackbgc: num <= Cleanliness }"
          class="scale"
          @click="changeColor(num, 'Cleanliness')"
        ></div>
      </div>
      <!-- new -->
    </div>

    <div class="add-review-ctg flex space-between">
      <label for="Communication">Communication</label>
      <!-- <div class="stars-container">
                        <span v-for="(num, idx) in 5" :key="idx" :class="{checked:num<=Communication}" class="material-icons-outlined clickable"
                        @click="changeColor(num, 'Communication')">star</span>
                    </div> -->
      <!-- new -->
      <div class="gray-scale flex clickable">
        <div
          v-for="(num, idx) in 5"
          :key="idx"
          :class="{ blackbgc: num <= Communication }"
          class="scale"
          @click="changeColor(num, 'Communication')"
        ></div>
      </div>
      <!-- new -->
    </div>
    <div class="add-review-ctg flex space-between">
      <label for="CheckIn">Check-in</label>
      <!-- <div class="stars-container">
                        <span v-for="(num, idx) in 5" :key="idx" :class="{checked:num<=CheckIn}" class="material-icons-outlined clickable"
                        @click="changeColor(num, 'CheckIn')">star</span>
                    </div> -->
      <!-- new -->
      <div class="gray-scale flex clickable">
        <div
          v-for="(num, idx) in 5"
          :key="idx"
          :class="{ blackbgc: num <= CheckIn }"
          class="scale"
          @click="changeColor(num, 'CheckIn')"
        ></div>
      </div>
      <!-- new -->
    </div>
    <div class="add-review-ctg flex space-between">
      <label for="Accuracy">Accuracy</label>
      <!-- <div class="stars-container">
                    <span v-for="(num, idx) in 5" :key="idx" :class="{checked:num<=Accuracy}" class="material-icons-outlined clickable"
                    @click="changeColor(num, 'Accuracy')">star</span>
                </div> -->
      <!-- new -->
      <div class="gray-scale flex clickable">
        <div
          v-for="(num, idx) in 5"
          :key="idx"
          :class="{ blackbgc: num <= Accuracy }"
          class="scale"
          @click="changeColor(num, 'Accuracy')"
        ></div>
      </div>
      <!-- new -->
    </div>
    <div class="add-review-ctg flex space-between">
      <label for="Location">Location</label>
      <!-- <div class="stars-container">
                    <span v-for="(num, idx) in 5" :key="idx" :class="{checked:num<=Location}" class="material-icons-outlined clickable"
                    @click="changeColor(num, 'Location')">star</span>
                </div> -->
      <!-- new -->
      <div class="gray-scale flex clickable">
        <div
          v-for="(num, idx) in 5"
          :key="idx"
          :class="{ blackbgc: num <= Location }"
          class="scale"
          @click="changeColor(num, 'Location')"
        ></div>
      </div>
      <!-- new -->
    </div>
    <div class="add-review-ctg flex space-between">
      <label for="Accessibility">Accessibility</label>
      <!-- <div class="stars-container">
                    <span v-for="(num, idx) in 5" :key="idx" :class="{checked:num<=Accessibility}" class="material-icons-outlined clickable"
                    @click="changeColor(num, 'Accessibility')">star</span>
                </div> -->
      <!-- new -->
      <div class="gray-scale flex clickable">
        <div
          v-for="(num, idx) in 5"
          :key="idx"
          :class="{ blackbgc: num <= Accessibility }"
          class="scale"
          @click="changeColor(num, 'Accessibility')"
        ></div>
      </div>
      <!-- new -->
    </div>
  </div>
</template>

<script>
export default {
  name: "addReviewCtgs",
  data() {
    return {
      rate: 3,
      Cleanliness: 1,
      Communication: 3,
      CheckIn: 5,
      Accuracy: 1,
      Location: 2,
      Accessibility: 4,
    };
  },
  methods: {
    changeColor(num, type) {
      this[type] = num;
    },
  },
};
</script>

<style>
</style>