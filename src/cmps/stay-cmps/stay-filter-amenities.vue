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
    <button class="explore-btn" @click="toggleLabel('Wifi')">Wifi</button>
    <button class="explore-btn" @click="toggleLabel('TV')">TV</button>
    <button class="explore-btn" @click="toggleLabel('Kitchen')">Kitchen</button>
    <button class="explore-btn" @click="toggleLabel('Air conditioning')">
      AC
    </button>
    <button class="explore-btn" @click="toggleLabel('Smoking Allowed')">
      Smoking Allowed
    </button>
    <button class="explore-btn" @click="toggleLabel('Pets Allowed')">
      Pets Allowed
    </button>
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
    toggleLabel(amenitie) {
      const idx = this.filterBy.labels.findIndex((label) => label === amenitie);
      if (idx === -1) this.filterBy.labels.push(amenitie);
      else this.filterBy.labels.splice(idx, 1);
      console.log(this.filterBy.labels);

      this.setFilter();
    },
    
    setFilter(){
      const filterBy = this.filterBy
      this.$store.commit({type: 'setFilter', filterBy})
    }
  },
};
</script>

<style>
</style>