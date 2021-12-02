<template>
  <section class="stay-description">
    <h4>description</h4>
    <h3>{{ stay.description }}</h3>
    
    <section class="stay-amenities">
      <h4>amenities</h4>
      <ul class="amenities-list">
        <li
          v-for="(amenity, idx) in stay.amenities"
          :key="idx"
          class="amenity-container clean-list"
        >
          <h5>
            <span class="material-icons-outlined"> {{ amenity.logo }} </span>
            {{ amenity.name }}
          </h5>
        </li>
      </ul>
    </section>

  </section>
</template>

<script>
export default {
name: "stayDescription",
  props: {
    stay: {
      type: Object,
      default: {},
    },
  },
}
</script>

<style>
</style>