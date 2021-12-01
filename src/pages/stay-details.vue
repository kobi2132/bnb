  <!-- <pre>{{ stays }} </pre> -->
  <!-- change rate to rates avg -->


<template>
<section v-if="stay" class="stay-details app-main">
    <h1>stay details</h1>
    <h2>{{ stay.name }}</h2>
    <h4>⭐{{ stay.reviews[0].rate }}</h4>
    <h4>{{stay.loc.address}}</h4>
    <button>❤</button>
    <button>📤</button>
    <div>stay gallery</div>
    
    <h4>
      Reviews:
      <span v-for="(review, idx) in stay.reviews" :key="idx">
        {{ review }}
      </span>
    </h4>
  </section>
</template>

<script>
export default {
  name: "stayDetails",
  computed: {
    stay() {
      return this.$store.getters.getCurrStay;
    },
  },
  methods: {},
  watch: {
    "$route.params.stayId": {
      handler() {
        let stayId = this.$route.params.stayId;
        console.log("Changed to", stayId);
        this.$store.dispatch({ type: "setCurrStay", stayId });
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>