
<template>
  <section v-if="stay" class="stay-details main-layout">
    <h2>{{ stay.name }}</h2>
    <section class="short-info flex space-between align-center">
      <section class="flex">
        <h4 class="spacer"> <span class="material-icons-outlined"> star </span> {{ this.reviewsAvg }}</h4>
        <h4>{{ this.reviewsCount }}</h4>
        <span class="spacer">•</span>
        <h4>{{ stay.loc.address }}</h4>
      </section>
      <section class="flex">
        <button>📤 share</button>
        <button>❤ save</button>
      </section>
    </section>

    <section class="stay-gallery">
      <img
        v-for="(img, idx) in stay.imgUrls"
        :key="idx"
        class="img-container clean-list"
        :src="img"
        alt=""
      />
    </section>

    <section>
      <h4>{{ stay.summery }}</h4>
      <h5>{{ stay.capacity }} guests | 4 bedrooms | 4 beds | 2 baths</h5>
      <img class="host-img" :src="stay.host.imgUrl" />
    </section>
    <section class="stay-feature-container">
      <div class="feature-block flex">
        <div class="feature-logo">
          <span class="material-icons-outlined"> home </span>
        </div>
        <section class="feature-text-area">
          <div class="feature-header"><h4>Entire home</h4></div>
          <div class="feature-text">
            <h5>You’ll have the apartment to yourself.</h5>
          </div>
        </section>
      </div>
      <div class="feature-block flex">
        <div class="feature-logo">
          <span class="material-icons-outlined"> location_on </span>
        </div>
        <section class="feature-text-area">
          <div class="feature-header"><h4>Great location</h4></div>
          <div class="feature-text">
            <h5>Recent guests gave the location a 5-star rating.</h5>
          </div>
        </section>
      </div>
      <div class="feature-block flex">
        <div class="feature-logo">
          <span class="material-icons-outlined"> auto_awesome </span>
        </div>
        <section class="feature-text-area">
          <div class="feature-header"><h4>Enhanced Clean</h4></div>
          <div class="feature-text">
            <h5>
              This host has committed to our 5-step enhanced cleaning process.
            </h5>
          </div>
        </section>
      </div>
      <div class="feature-block flex">
        <div class="feature-logo">
          <span class="material-icons-outlined"> event </span>
        </div>
        <section class="feature-text-area">
          <div class="feature-header">
            <h4>Free cancellation up to 24 hours before check-in</h4>
          </div>
          <div class="feature-text">
            <h5>feel free to be flexible</h5>
          </div>
        </section>
      </div>
    </section>

    <section class="stay-description">
      <h4>description</h4>
      <h3>{{ stay.description }}</h3>
    </section>
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
    <section class="stay-reviews-container">
      <div class="stay-reviews-header">
        <h2>
          <span class="material-icons-outlined"> star </span>
          {{ this.reviewsAvg }} {{ this.reviewsCount }}
        </h2>
      </div>
      <div class="stay-reviews-stats"></div>
    </section>

    <h4>
      Reviews:
      <span v-for="(review, idx) in stay.reviews" :key="idx" class="clean-list">
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
    reviewsAvg() {
      const sum = this.stay.reviews.reduce(
        (sum, review) => sum + review.rate,
        0
      );
      var avg = sum / this.stay.reviews.length || 0;
      avg = (Math.round(avg * 100) / 100).toFixed(1);
      return avg;
    },
    reviewsCount() {
      // problem with count
      let count = this.stay.reviews.length;
      console.log(count , 'reviews')
      if ((count = 1)) {
        var str = `(${count} review)`;
      } else {
        var str = `(${count} reviews)`;
      }
      return str;
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
.host-img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}

.stay-gallery {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  grid-template-rows: 180px 180px;
  grid-gap: 8px;
  gap: 8px;

  /* padding: none; */
  /* background-color: lightblue; */
  /* border-radius: 100px; */
}

.stay-gallery img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.stay-gallery :first-child {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;
}

.stay-gallery :nth-child(3) {
  border-top-right-radius: 13px;
}

.stay-gallery :nth-child(5) {
  border-bottom-right-radius: 13px;
}

.short-info h4 {
  margin-block: 0;
  /* vertical-align: center; */
}

.spacer {
  margin-inline: 2px;
}
</style>