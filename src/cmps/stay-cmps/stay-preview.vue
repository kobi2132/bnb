<template>
  <section class="stay-preview" @click="goToStay">
    <div class="stay-preview-info">
      <img :src="stay.imgUrls[0]" />
      <div class="rate-preview"></div>
      <!-- 
      <h2>{{ toy.name }}</h2>
      <h4>{{ toy._id }}</h4>
      <h4>{{ toy.price }}$</h4>
      <h4>In stock? {{ toy.inStock }}</h4> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "stayPreview",
  props: {
    stay: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    goToStay() {
        this.$router.push("/stay/"+this.stay._id)
    },
  },
};
</script>
