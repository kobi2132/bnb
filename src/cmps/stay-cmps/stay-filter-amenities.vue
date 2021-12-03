<template>
  <section class="explore-btns">
    <button class="explore-btn">
      <div class="btn-expend">
        Price <span class="material-icons">expand_more</span>
      </div>
    </button>
    <button class="explore-btn">
      <div class="btn-expend">
        Type of place <span class="material-icons">expand_more</span>
      </div>
    </button>
    <span class="buffer">|</span>
    <button class="explore-btn" @click="addLabel('wifi')" >Wifi</button>
    <button class="explore-btn" @click="addLabel('Kitchen')" >Kitchen</button>
    <button class="explore-btn" @click="addLabel('Air conditioning')" >AC</button>
    <button class="explore-btn" @click="addLabel('wifi')" >Smoking Allowed</button>
    <button class="explore-btn" @click="addLabel('wifi')" >Pets Allowed</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        price: null,
        typeOfPlace: null,
        labels: [],
      },
    };
  },
  components: {},
  computed: {},
  methods: {
    addLabel(amenitie) {
      const idx = this.filterBy.labels.findIndex((label) => label === amenitie);
      if (idx === -1) this.filterBy.labels.push(amenitie);
      else this.filterBy.labels.splice(idx, 1);
      console.log(this.filterBy.labels);
    },
  },
};
</script>

<style>
</style>