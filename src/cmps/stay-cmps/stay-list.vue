<template>
  <ul class="stay-list clean-list">
    <li v-for="stay in stays" :key="stay._id" class="stay-preview-container">
      <stay-preview :stay="stay" />
    </li>
  </ul>
</template>

<script>
import stayPreview from "@/cmps/stay-cmps/stay-preview.vue";

export default {
  name: "stayList",
  props: {
    stays: {
      type: Array,
      default: [],
    },
  },
  methods: {

  },
  components: {
    stayPreview,
  },
  computed: {},
};
</script>

<style>
</style>