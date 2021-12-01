<template>
  <section class="main-header flex space-between">
    <div class="logo clickable" @click="goHome">
      <img class="logo-img" src="~@/assets/images/logo.png" />
    </div>
    <div class="nav flex align-center">
      <router-link to="/explore">Explore</router-link>
      <router-link to="/">Become a Host</router-link>
      <button class="user-menu-btn clickable flex align-center">
        <img class="avatar" src="~@/assets/images/avatar1.png" />
      </button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/").catch(() => {});
    },
  },
};
</script>

<style>
</style>