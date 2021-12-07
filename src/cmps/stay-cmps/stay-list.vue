<template>
  <div>
    <h4>{{ stays.length }} stays</h4>
    <stayFilterAmenities/>
    <ul class="stay-list-container clean-list">
      <li v-for="stay in stays" :key="stay._id" class="stay-preview-container">
        <stay-preview :stay="stay" />
      </li>
    </ul>
  </div>
</template>

<script>
import stayPreview from "@/cmps/stay-cmps/stay-preview.vue";
import stayFilterAmenities from "@/cmps/stay-cmps/stay-filter-amenities.vue";

export default {
  name: "stayList",
  props: {
    stays: {
      type: Array,
      default: [],
    },
  },
  methods: {},
  computed: {
    
    },
    components: {
      stayPreview,
      stayFilterAmenities,
    },
};
</script>

<style>
</style>