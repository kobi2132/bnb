<template>
  <section class="explore-btns">
    <button class="explore-btn">
      <div class="btn-expend" @click="isPriceShown">
        Price <span class="material-icons">expand_more</span>
      </div>
      <div class="price-filter-container" v-if="this.isShown">
        <div class="price-filter">
          <h3 class="avg">The average nightly price is $196</h3>
          <HistogramSlider
            :width="360"
            :bar-height="100"
            :data="filterBy.prices"
            :min="10"
            :max="1000"
            :hideFromTo="true"
            :grid="false"
            :barGap="5"
            :barRadius="2"
            :lineHeight="2"
            @finish="sliderChanged"
            @change="sliderChanged"
          />
          <div class="price-select-container">
            <div class="price-select" @click="shouldShow = false">
              <label>
                min price
                <input v-model="filterBy.price.min" placeholder="curr" />
              </label>
            </div>
            <h3>-</h3>
            <div class="price-select" @click="shouldShow = false">
              <label>
                max price
                <input
                  v-model="filterBy.price.max"
                  type="search"
                  placeholder="curr"
                />
              </label>
            </div>
          </div>
        </div>

        <div class="price-save">
          <button class="clear">Clear</button>
          <button class="save">Save</button>
        </div>
      </div>
    </button>
    <button class="explore-btn">
      <div class="btn-expend">
        Type of place <span class="material-icons">expand_more</span>
      </div>
    </button>
    <span class="buffer">|</span>
    <button
      class="explore-btn"
      @click="
        (e) => {
          e.target.classList.toggle('active'), toggleLabel('Wifi');
        }
      "
    >
      Wifi
    </button>
    <button
      class="explore-btn"
      @click="
        (e) => {
          e.target.classList.toggle('active'), toggleLabel('TV');
        }
      "
    >
      TV
    </button>
    <button
      class="explore-btn"
      @click="
        (e) => {
          e.target.classList.toggle('active'), toggleLabel('Kitchen');
        }
      "
    >
      Kitchen
    </button>
    <button
      class="explore-btn"
      @click="
        (e) => {
          e.target.classList.toggle('active'), toggleLabel('Air conditioning');
        }
      "
    >
      AC
    </button>
    <button
      class="explore-btn"
      @click="
        (e) => {
          e.target.classList.toggle('active'), toggleLabel('Smoking Allowed');
        }
      "
    >
      Smoking Allowed
    </button>
    <button
      class="explore-btn"
      @click="
        (e) => {
          e.target.classList.toggle('active'), toggleLabel('Pets Allowed');
        }
      "
    >
      Pets Allowed
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        price: {
          min: 158,
          max: 200,
        },
        typeOfPlace: null,
        labels: [],
        prices: [],
      },
      stays: null,
      activeBtn: "",
      isShown: false
    };
  },
  created() {
          this.getStaysPrices();
  },
  components: {},
  computed: {
  },
  methods: {
    isPriceShown(){
      this.isShown=!this.isShown
    },
    toggleLabel(amenitie) {
      const idx = this.filterBy.labels.findIndex((label) => label === amenitie);
      if (idx === -1) this.filterBy.labels.push(amenitie);
      else this.filterBy.labels.splice(idx, 1);
      console.log(this.filterBy.labels);
      this.setFilter();
    },
    setFilter() {
      const filterBy = this.filterBy;
      this.$store.commit({ type: "setFilter", filterBy });
      this.getStaysPrices();

    },
    sliderChanged(values) {
      const valueMin = values.from;
      const valueMax = values.to;
      this.filterBy.price.min = valueMin;
      this.filterBy.price.max = valueMax;
      this.setFilter();
    },
    getStaysPrices() {
      const stays = this.$store.getters.staysToShow;
      const staysPrices = stays.map((stay) => stay.price);
      this.filterBy.prices = staysPrices;
      console.log(staysPrices);
    },

    // setVal(values) {
    //   values.from = this.filterBy.price.min;
    //   values.to = this.filterBy.price.max;
    //   values["from_pretty"] = this.filterBy.price.min.toString();
    // },

    // setSlideValsFromIntputs() {
    //   // var a = this.$refs.slide.ionRangeSlider.input;
    //   var a = this.$refs.slide.ionRangeSlider.result;
    //   console.log("a", a);
    //   console.log(this.$refs.slide);
    //   // this.setVal(Object.values(a)[0]);

    //   this.setVal(a);
    // },
  },
  // mounted() {
  //   this.setSlideValsFromIntputs();
  // },
  // updated() {
  //   console.log("kobi");
  //   if (this.$refs.slide) {
  //     this.setSlideValsFromIntputs();
  //   }
  // },
  // watch: {
  //   "$refs"(slide) {
  //     console.log("slode", slide);
  //   },
  // },
};
</script>

<style>
</style>