<template>
  <section class="home-page main-layout2">
    <section class="main-hero">
      <h1>Mi casa es su casa.</h1>
    </section>
    <section class="dest-container">
      <h1>Popular Destinations</h1>
      <section class="dest-gallery">
        <router-link to="/explore" @click="setDest('New York')">
          <img src="~@/assets/images/NY2.jpg" />
          <h3>New York</h3>
        </router-link>
        <a href="#">
          <img src="~@/assets/images/SAN1.png" />
          <h3>Santorini</h3>
        </a>
        <a href="#">
          <img src="~@/assets/images/TA1.jpg" />
          <h3>Tel Aviv</h3>
        </a>
        <a href="#">
          <img src="~@/assets/images/paris.jpg" />
          <h3>Paris</h3>
        </a>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  methods: {
    setDest(dest) {
      console.log(dest);
      this.$store.commit({ type: "updateDest", dest });
    },
  },
};
</script>

<style>
</style>