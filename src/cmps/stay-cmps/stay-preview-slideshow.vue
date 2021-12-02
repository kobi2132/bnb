<template>
  <section class="preview-slideshow">
    <div class="block">
      <el-carousel
        trigger="click"
        height="200px"
        width="300px"
        :autoplay="false"
      >
        <el-carousel-item v-for="image in imgs" :key="image">
          <img :src="image" />
        </el-carousel-item>
      </el-carousel>
    </div>
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
  components: {},

  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style>
</style>