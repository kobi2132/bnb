<template>
   <section class="short-info flex space-between align-center">
      <section class="flex">
        <!-- <h4 class="spacer"> <span class="material-icons-outlined"> star </span> {{ this.reviewsAvg }}</h4>
        <h4>{{ this.reviewsCount }}</h4> -->
        <span class="spacer">•</span>
        <h4>{{ stay.loc.address }}</h4>
      </section>

      <section class="flex">
        <button>
          <span class="material-icons-outlined"> ios_share </span> share
        </button>
        <button>
          <span class="material-icons-outlined kobi-heart"> favorite </span>
          save
        </button>
      </section>
    </section>
</template>

<script>
export default {
name: "stayShortInfo",
  props: {
    stay: {
      type: Object,
      default: {},
    },
  },
}
</script>

<style>
/* 
.short-info h4 {
  margin-block: 0;
}

.spacer {
  margin-inline: 2px;
}

.kobi-heart {
  color: #ff385c;
  -webkit-text-stroke: white;
  -webkit-text-stroke-width: 1px;
  height: 24px;
  width: 24px;
} */

</style>