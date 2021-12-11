<template>
  <section
    class="main-header"
    :class="{
      details: stayDetails,
      fullheader: !miniFilter && (homePage || explore),
      top: topOfPage,
      'explore-page': explore,
      'home-page': homePage,
    }"
  >
    <section class="main-header-container flex space-between">
      <div class="logo clickable flex align-center" @click.stop="goHome">
        <h1 class="logo-txt">Kumb</h1>
      </div>
      <button
        @click="miniFilter = !miniFilter"
        class="mini-filter flex space-between align-center clickable"
        :class="{ hide: !miniFilter, hideFilter }"
      >
        {{ currDest }} <span></span>
      </button>
      <div class="nav flex align-center justify-center">
        <router-link to="/explore">Explore</router-link>
        <router-link to="/host">Become a Host</router-link>
        <button
          class="user-menu-btn clickable flex align-center clickable"
          @click="shouldShow = !shouldShow"
        >
          <span class="material-icons-round" v-if="!currUser">
            account_circle
          </span>
          <span v-else>
            <img
              v-if="currUser && !hasImg"
              class="avatar"
              :src="require('../assets/images/avatar.png')" />
            <img
              v-if="currUser && hasImg"
              class="avatar"
              :src="loggedinUser.imgUrl"
          /></span>
        </button>
      </div>
    </section>
    <div class="user-nav" v-if="shouldShow">
      <div class="user-nav2">
        <a href="#/login" v-if="!currUser">Log in</a>
        <a href="#/messages" class="a1" v-if="currUser">Messages</a>
        <a href="#/trips" class="a1" v-if="currUser">Trips</a>
        <a href="#/wishList" class="a1 gray-box-shadow" v-if="currUser"
          >Wish List</a
        >
        <a href="#/notifications" v-if="currUser">Notifications</a>
        <a href="#/host" v-if="!currUser || !loggedinUser.isHost"
          >Host your home</a
        >
        <a href="#/dashboard" v-if="currUser">Dashboard</a>
        <a href="#/account" class="gray-box-shadow" v-if="currUser">Account</a>
        <!-- <a href="#/help">Help</a> -->
        <a @click.stop="logout" class="clickable" v-if="currUser">Logout</a>
        <a href="#/about">About</a>
      </div>
    </div>
    <stay-filter :class="{ hide: miniFilter, hideFilter }" />
  </section>
</template>

<script>
import stayFilter from "../cmps/stay-cmps/stay-filter.vue";
import { socketService } from "../../services/socket.service.js";
export default {
  data() {
    return {
      miniFilter: false,
      shouldShow: false,
      currPage: null,
      loggedinUser: null,
      hideFilter: false,
      topOfPage: true,
    };
  },

  methods: {
    logout() {
      this.loggedinUser = null;
      this.$store.dispatch({ type: "logout" });
      this.goHome();
      this.shouldShow = false;
    },
    goHome() {
      this.$router.push("/").catch(() => {});
    },
    handleScroll(event) {
      // console.log(window.scrollY);
      // console.log("scrolling...");
      if (window.scrollY === 0) {
        this.miniFilter = false;
        this.topOfPage = true;
      } else {
        this.topOfPage = false;
      }
      if (window.scrollY > 50) this.miniFilter = true;
      if (this.currPage === "stayDetails") this.miniFilter = true;
    },
    closeModal() {
      this.shouldShow = !this.shouldShow;
      // console.log('closemodal')
    },
  },
  computed: {
    hasImg() {
      var user = this.$store.getters.loggedinUser;
      return user && user.imgUrl !== null ? true : false;
    },
    currUser() {
      var user = this.$store.getters.loggedinUser;
      return user ? true : false;
    },
    currDest() {
      var dest = this.$store.getters.getDest;
      if (!dest) return "Start your search";
      else return dest;
    },
    stayDetails() {
      // console.log(this.currPage);
      if (this.currPage === "stayDetails") return true;
      else return false;
    },
    explore() {
      // console.log(this.currPage);
      if (this.currPage === "explore") return true;
      else return false;
    },
    homePage() {
      // console.log(this.currPage);
      if (this.currPage === "homePage") return true;
      else return false;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.loggedinUser = this.$store.getters.loggedinUser;
    // console.log(this.loggedinUser);
  },
  mounted() {
    // this.currPage = this.$store.getters.currPage;
    // console.log("header created", this.currPage);
  },
  updated() {
    this.loggedinUser = this.$store.getters.loggedinUser;
    // console.log(this.loggedinUser);
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
        this.shouldShow = false;
        this.currPage = this.$store.getters.currPage;
        this.miniFilter =
          this.currPage !== "homePage" && this.currPage !== "explore";
        this.hideFilter =
          this.currPage !== "homePage" &&
          this.currPage !== "explore" &&
          this.currPage !== "stayDetails";
      },
      immediate: true,
      deep: true,
    },
    $route: {
      handler() {
        this.shouldShow = false;
      },
    },
  },
};
</script>

<style>
</style>