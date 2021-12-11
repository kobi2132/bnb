<template>
  <div>
    <span>
      <!-- <img src="https://randomuser.me/api/portraits/women/16.jpg" alt="user" class="host-img"/> -->
      <img class="host-img" :src="order.buyer.imgUrl" />
    </span>
    <span>{{ order.buyer.fullname }}</span>
    <span>{{ startDateToShow }}</span>
    <span>{{ endDateToShow }}</span>
    <span class="capitalize">{{ order.status }}</span>
    <span>$ {{ order.stay.price }}</span>
    <span class="stay-actions flex align-center space-evenly">
      <button class="clean-btn clickable" @click="approve">
        <i class="fa fa-check" aria-hidden="true"></i>
      </button>
      <button class="clean-btn clickable" @click="decline">
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
    </span>
  </div>
</template>

<script>
export default {
  name: "order-data",
  props: {
    order: {
      type: Object,
      default: {},
    },
  },
  created() {
    // console.log(this.order);
  },
  computed: {
    startDateToShow() {
      const currDate = new Date(this.order.dates.start);
      const dateToDisplay =
        currDate.getDate() +
        "/" +
        currDate.getMonth() +
        1 +
        "/" +
        currDate.getFullYear();
      return dateToDisplay;
    },
    endDateToShow() {
      const currDate = new Date(this.order.dates.end);
      const dateToDisplay =
        currDate.getDate() +
        "/" +
        currDate.getMonth() +
        1 +
        "/" +
        currDate.getFullYear();
      return dateToDisplay;
    },
  },
  methods: {
    approve() {
      console.log("approved");
      this.order.status = "approved";
      const order = JSON.parse(JSON.stringify(this.order));
      this.$store.dispatch({ type: "updateOrder", order });
    },
    decline() {
      console.log("declined");
    },
  },
};
</script>

<style>
</style>