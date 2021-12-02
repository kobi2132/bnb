<template>
  <section class="filter-container flex align-center">
    <button
      class="mini-filter flex space-between align-center clickable"
      v-if="miniFilter"
    >
      Start your search <span></span>
    </button>
    <div class="max-filter">
      <button class="location-btn" placeholder="Where are you going?">
        Location
      </button>
      <button class="start-date" placeholder="Add dates">Check in</button>
      <button class="end-date" placeholder="Add dates">Check out</button>
      <button class="guests" placeholder="Add guests">Guests</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      miniFilter: false,
    };
  },
};
</script>

<style>
</style>