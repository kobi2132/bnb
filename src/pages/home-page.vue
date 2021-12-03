<template>
  <section class="home-page main-layout2">
    <section class="main-hero">
      <h1>Mi casa es su casa.</h1>
    </section>
    <section class="dest-container">
      <h1>Popular Destinations</h1>
      <section class="dest-gallery">
        <a href="#" @click="setDest('New York')">
          <img src="~@/assets/images/NY2.jpg" />
          <h3>New York</h3>
        </a>
        <a href="#" @click="setDest('Santorini')">
          <img src="~@/assets/images/SAN1.png" />
          <h3>Santorini</h3>
        </a>
        <a href="#" @click="setDest('Tel Aviv')">
          <img src="~@/assets/images/TA1.jpg" />
          <h3>Tel Aviv</h3>
        </a>
        <!-- <a href="#" @click="setDest('Paris')">
          <img src="~@/assets/images/paris.jpg" />
          <h3>Paris</h3>
        </a> -->
        <router-link to="/explore?destination=Paris" @click="setDest('Paris')">
          <img src="~@/assets/images/paris.jpg" />
          <h3>Paris</h3>
        </router-link>
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
      this.$router.push("/explore");
    },
  },
};
</script>

<style>
</style>