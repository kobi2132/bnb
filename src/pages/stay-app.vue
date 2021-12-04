<template class="main-layout2">
  <div class="main-layout2">
    <stay-list :stays="stays" />
  </div>
</template>

<script>
import stayList from "@/cmps/stay-cmps/stay-list.vue";

export default {
  name: "stay-app",
  data() {
    return {
      currTrip: null,
    };
  },

  computed: {
    stays() {
      return this.$store.getters.staysToShow;
    },
  },
  created() {
    this.currTrip = this.$store.getters.getCurrTrip;
    console.log(this.currTrip);
  },
  watch: {
    $route: {
      handler() {
        this.currTrip = this.$store.getters.getCurrTrip;
        const { destination } = this.$route.query;
        this.currTrip.destination = destination;
        console.log(this.currTrip);
      },
      immediate: true,
    },
  },
  components: {
    stayList,
  },
  created() {
    const page = "explore";
    this.$store.commit({ type: "setCurrPage", page });
  },
};
</script>



<style>
</style>