<template>
  <section class="preview-slideshow">
    <carousel
    :per-page="1"
    :navigationEnabled="true"
    navigationNextLabel="▶"
    navigationPrevLabel="◀"
    >
      <slide v-for="image in imgs" :key="image">
        <img :src="image" />
      </slide>
    </carousel>
  </section>
</template>

<script>
export default {
  name: "stayPreviewSlideshow",
  props: {
    imgs: {
      type: Array,
      default: {},
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>