<template>
  <pre>{{ stays }} </pre>
</template>

<script>
export default {
  name: "stay-app",
  computed: {
    stays() {
      return this.$store.getters.staysToShow;
    },
  },
};
</script>

<style>
</style>