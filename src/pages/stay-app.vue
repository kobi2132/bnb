<template>
  <stay-list :stays="stays" />
</template>

<script>

import stayList from "@/cmps/stay-cmps/stay-list.vue";


export default {
  name: "stay-app",
  components:{
stayList
  },
  computed: {
    stays() {
      return this.$store.getters.staysToShow;
    },
  },

};
</script>



<style>
</style>