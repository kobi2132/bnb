<template>
  <section class="explore-btns">
    <button class="explore-btn">
      <div class="btn-expend" @click="setPriceShown">
        <span class="btn-txt" v-if="!isPriceRange">Price</span
        ><span class="btn-txt" v-else>{{ displayPriceRange }}</span>
        <span class="material-icons" v-if="!this.isPriceShown"
          >expand_more</span
        >
        <span class="material-icons" v-if="this.isPriceShown">expand_less</span>
      </div>
      <div class="price-filter-container" v-if="this.isPriceShown">
        <h3 class="avg">The average nightly price is $196</h3>
        <div class="price-filter">
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
            :clip="false"
            @finish="sliderChanged"
          />
          <div class="price-select-container">
            <div class="price-select" @click="shouldShow = false">
              <div class="label">min price</div>
              <div class="price-change">
                <div class="dollar">$</div>
                <input v-model="filterBy.price.min" placeholder="curr" />
              </div>
            </div>
            <h3>–</h3>
            <div class="price-select" @click="shouldShow = false">
              <div class="label">max price</div>
              <div class="price-change">
                <div class="dollar">$</div>
                <input v-model="filterBy.price.max" placeholder="curr" />
              </div>
            </div>
          </div>
        </div>

        <div class="price-save">
          <button class="clear" @click="clearPriceRange">Clear</button>
          <button class="save" @click="setPriceRange">Save</button>
        </div>
      </div>
    </button>
    <button class="explore-btn">
      <div class="btn-expend" @click="setTypeShown">
        Type of place <span class="material-icons">expand_more</span>
      </div>
      <div class="type-filter-container" v-if="this.isTypeShown">
        <div class="type-filter">
          <div class="type-of-place">
            <label class="container">
              <div class="type">
                <div class="type-header">Entire place</div>
                <div class="type-title">Have a place to yourself</div>
              </div>
              <input type="checkbox" :checked="setTypeCheck" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="type-of-place">
            <label class="container">
              <div class="type">
                <div class="type-header">Private room</div>
                <div class="type-title">
                  Have your own room and share some common spaces
                </div>
              </div>
              <input type="checkbox" checked="checked" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="type-of-place">
            <label class="container">
              <div class="type">
                <div class="type-header">Hotel room</div>
                <div class="type-title">
                  Have a private or shared room in a boutique hotel, hostel, and
                  more
                </div>
              </div>
              <input type="checkbox" checked="checked" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="type-of-place">
            <label class="container">
              <div class="type">
              <div class="type-header">Shared room</div>
              <div class="type-title">
                Stay in a shared space, like a common room
              </div>
            </div>
              <input type="checkbox" checked="checked" />
              <span class="checkmark"></span>
            </label>
           
          </div>
        </div>

        <div class="type-save">
          <button class="clear" @click="clearPriceRange">Clear</button>
          <button class="save" @click="setPriceRange">Save</button>
        </div>
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
          min: 0,
          max: 1000,
        },
        typeOfPlace: [],
        labels: [],
      },
      prices: [],
      stays: null,
      activeBtn: "",
      isPriceShown: false,
      isTypeShown: false,
      isPriceRange: false,
      priceRange: "",
    };
  },
  created() {
    this.getStaysPrices();
  },
  components: {},
  computed: {
    displayPriceRange() {
      if (this.filterBy.price.min > 10 && this.filterBy.price.max < 1000) {
        return "$" + this.filterBy.price.min + " - $" + this.filterBy.price.max;
      } else if (
        this.filterBy.price.min > 10 &&
        this.filterBy.price.max >= 1000
      ) {
        return "$" + this.filterBy.price.min + "+";
      } else if (
        this.filterBy.price.min <= 10 &&
        this.filterBy.price.max < 1000
      ) {
        return "Up to $" + this.filterBy.price.max;
      } else if (
        this.filterBy.price.min <= 10 &&
        this.filterBy.price.max === 1000
      ) {
        return "";
      }
    },
  },
  methods: {
    setPriceShown() {
      this.isPriceShown = !this.isPriceShown;
    },
    setTypeShown() {
      this.isTypeShown = !this.isTypeShown;
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
    getStaysPrices() {
      const stays = this.$store.getters.staysToShow;
      const staysPrices = stays.map((stay) => stay.price);
      this.filterBy.prices = staysPrices;
      // console.log(staysPrices);
    },

    sliderChanged(values) {
      const valueMin = values.from;
      const valueMax = values.to;
      this.filterBy.price.min = valueMin;
      this.filterBy.price.max = valueMax;
    },
    clearPriceRange() {
      this.filterBy.price.min = 0;
      this.filterBy.price.max = 1000;
    },
    setPriceRange() {
      this.isPriceShown = false;
      // console.log(this.filterBy.price.min, this.filterBy.price.max);
      // console.log(this.priceRange);
      if (this.filterBy.price.min <= 0 && this.filterBy.price.max === 1000) {
        this.isPriceRange = false;
      } else this.isPriceRange = true;
      this.setFilter();
    },

    setTypeCheck(){
      
    }

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