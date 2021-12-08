<template>
  <section class="main-layout2 become-host">
    <img src="~@/assets/images/hero/wp25.jpg" alt="" class="become-host-img" />
    <div class="become-host-info">
      <h1>Become a member of the Kumba host family</h1>
      <button class="clickable" @click="goHost">
        <h3>get started</h3>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "host",

  methods: {
    goHost() {
      this.$router.push("/dashboard").catch(() => {});
    },
  },
};
</script>

<style>
</style>