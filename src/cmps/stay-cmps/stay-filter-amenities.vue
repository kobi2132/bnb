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
    <button class="explore-btn" @click="toggleLabel('Wifi'), activeBtn = 'wifi'" :class="{active: activeBtn === 'wifi' }">Wifi</button>
    <button class="explore-btn" @click="toggleLabel('TV'), activeBtn = 'TV'" :class="{active: activeBtn === 'TV' }">TV</button>
    <button class="explore-btn" @click="toggleLabel('Kitchen'), activeBtn = 'Kitchen'" :class="{active: activeBtn === 'Kitchen' }">Kitchen</button>
    <button class="explore-btn" @click="toggleLabel('Air conditioning'), activeBtn = 'Air conditioning'" :class="{active: activeBtn === 'Air conditioning' }">
      AC
    </button>
    <button class="explore-btn" @click="toggleLabel('Smoking Allowed'), activeBtn = 'Smoking Allowed'" :class="{active: activeBtn === 'Smoking Allowed' }">
      Smoking Allowed
    </button>
    <button class="explore-btn" @click="toggleLabel('Pets Allowed'), activeBtn = 'Pets Allowed'" :class="{active: activeBtn === 'Pets Allowed' }">
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
      activeBtn: ''
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