<template>
  <section class="home-page main-layout2">
    <section class="main-hero">
      <h1>Not sure where to go? Perfect.</h1>
      <button class="clickable" @click="goExplore">
        <h3>I'm flexible</h3>
      </button>
    </section>
    <section class="dest-container">
      <h1>Popular Destinations</h1>
      <section class="dest-gallery">
        <router-link to="/explore?destination=New-York">
          <img src="~@/assets/images/NY2.jpg" />
          <h3>New York</h3>
        </router-link>
        <router-link to="/explore?destination=Santorini">
          <img src="~@/assets/images/SAN1.png" />
          <h3>Santorini</h3>
        </router-link>
        <router-link to="/explore?destination=Tel-Aviv">
          <img src="~@/assets/images/TA1.jpg" />
          <h3>Tel Aviv</h3>
        </router-link>
        <router-link to="/explore?destination=Paris">
          <img src="~@/assets/images/paris.jpg" />
          <h3>Paris</h3>
        </router-link>
      </section>
    </section>
    <section class="toprated-container">
      <h1>Top Rated</h1>
      <section class="top-rated-gallery">
        <router-link to="/explore">
          <img src="~@/assets/images/TBA.jpg" />
          <h3>To be Added</h3>
        </router-link>
        <router-link to="/explore">
          <img src="~@/assets/images/TBA.jpg" />
          <h3>To be Added</h3>
        </router-link>
        <router-link to="/explore">
          <img src="~@/assets/images/TBA.jpg" />
          <h3>To be Added</h3>
        </router-link>
        <router-link to="/explore">
          <img src="~@/assets/images/TBA.jpg" />
          <h3>To be Added</h3>
        </router-link>
      </section>
    </section>
    <section class="host-container full">
      <section class="host">
        <h1>Become a host!</h1>
        <button class="clickable">
          <h3>Learn more</h3>
        </button>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  methods: {},
  created() {
    const page = "homePage";
    this.$store.commit({ type: "setCurrPage", page });
  },
  methods: {
    goExplore() {
      this.$router.push("/explore").catch(() => {});
    },
  },
};
</script>

<style>
</style>