<template>
  <div v-if="alive" class="alert gray-box-shadow" :class="{ on: alive }">
    {{ msg.txt }}
    <div class="msg-btns">
      <button @click="goToLogin">Login</button>
      <button>Demo User</button>
    </div>
  </div>
</template>


<script>
import { eventBusService, SHOW_MSG } from "../../services/event-bus.service.js";

export default {
  created() {
    eventBusService.$on(SHOW_MSG, (msg) => {
      this.msg = msg;
      var delay = msg.delay || 5000;
      this.alive = true;
      setTimeout(() => {
        this.alive = false;
      }, delay);
    });
  },
  data() {
    return {
      alive: false,
      msg: null,
    };
  },
  computed: {
    alertClass() {
      if (!this.msg) return;
      return `alert-${this.msg.type}`;
    },
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
      this.alive = false;
    },
  },
};
</script>

<style scoped>
</style>