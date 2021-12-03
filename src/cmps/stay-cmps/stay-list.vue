<template>
  <div>
    <h4>{{ stays.length }} stays</h4>
    <section class="explore-btns">
    <button class="explore-btn"><div class="btn-expend">Price <span class="material-icons">expand_more</span></div></button>
    <button class="explore-btn"><div class="btn-expend">Type of place <span class="material-icons">expand_more</span></div></button>
    <span class="buffer">|</span>
    <button class="explore-btn">Wifi</button>
    <button class="explore-btn">Kitchen</button>
    <button class="explore-btn">AC</button>
    <button class="explore-btn">Smoking Allowed</button>
    <button class="explore-btn">Pets Allowed</button>
    </section>

    <ul class="stay-list-conainer clean-list">
      <li v-for="stay in stays" :key="stay._id" class="stay-preview-container">
        <stay-preview :stay="stay" />
      </li>
    </ul>
  </div>
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
  methods: {},
  components: {
    stayPreview,
  },
  computed: {},
};
</script>

<style>
</style>