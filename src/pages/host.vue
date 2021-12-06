<template>
  <section class="main-layout2 become-host">
    <img src="~@/assets/images/hero/wp25.jpeg" alt="" class="become-host-img">
    <div class="become-host-info">
    <h1>become a member of the Mi Casa host family</h1>
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
}
}
</script>

<style>

</style>