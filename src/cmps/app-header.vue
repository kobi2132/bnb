<template>
  <section class="main-header flex">
    <section class="main-header-container flex space-between">
      <div class="logo clickable" @click="goHome">
        <img class="logo-img" src="~@/assets/images/logo.png" />
      </div>
      <stay-filter />
      <div class="nav flex align-center">
        <router-link to="/explore">Explore</router-link>
        <router-link to="/">Become a Host</router-link>
        <button
          class="user-menu-btn clickable flex align-center clickable"
          @click="shouldShow = !shouldShow"
        >
          <span class="material-icons-round"> account_circle </span>
          <!-- <img class="avatar" src="~@/assets/images/avatar1.png" /> -->
        </button>
      </div>
    </section>
    <div class="user-nav" v-if="shouldShow">
      <a href="#">Log in</a>
      <a href="#">Host your home</a>
      <a href="#">About</a>
      <a href="#">Help</a>
    </div>
  </section>
</template>

<script>
import stayFilter from "../cmps/stay-cmps/stay-filter.vue";
export default {
  data() {
    return {
      shouldShow: false,
    };
  },
  methods: {
    goHome() {
      this.$router.push("/").catch(() => {});
    },
  },
  components: {
    stayFilter,
  },
};
</script>

<style>
</style>