<template>
  <section
    class="main-header"
    :class="{ details: stayDetails, fullheader: !miniFilter }"
  >
    <section class="main-header-container flex space-between">
      <div class="logo clickable" @click.stop="goHome">
        <img class="logo-img" src="~@/assets/images/logo.png" />
      </div>
      <button
        @click="miniFilter = !miniFilter"
        class="mini-filter flex space-between align-center clickable"
        :class="{ hide: !miniFilter }"
      >
        {{ currDest }} <span></span>
      </button>
      <div class="nav flex align-center justify-center">
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
      <a href="#/login">Log in</a>
      <a href="#">Host your home</a>
      <a href="#">About</a>
      <a href="#">Help</a>
    </div>
    <stay-filter :class="{ hide: miniFilter }" />
  </section>
</template>

<script>
import stayFilter from "../cmps/stay-cmps/stay-filter.vue";
export default {
  data() {
    return {
      miniFilter: false,
      shouldShow: false,
      currPage: null,
    };
  },

  methods: {
    goHome() {
      this.$router.push("/").catch(() => {});
    },
    handleScroll(event) {
      // console.log(window.scrollY);
      // console.log("scrolling...");
      if (window.scrollY > 50) this.miniFilter = true;
      if (window.scrollY < 50 && !this.miniFilter) this.miniFilter = false;
    },
  },
  computed: {
    currDest() {
      var dest = this.$store.getters.getDest;
      if (!dest) return "Start your search";
      else return dest;
    },
    stayDetails() {
      console.log(this.currPage);
      if (this.currPage === "stayDetails") return true;
      else return false;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.currPage = this.$store.getters.currPage;
    console.log("header created", this.currPage);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  components: {
    stayFilter,
  },
  watch: {
    "$store.state.currPage": {
      handler() {
        this.currPage = this.$store.getters.currPage;
        if (this.currPage === "stayDetails") this.miniFilter = true;
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style>
</style>