<template>
  <div>
    <span>
      <!-- <img src="https://randomuser.me/api/portraits/women/16.jpg" alt="user" class="host-img"/> -->
      <img class="host-img" :src="order.buyer.imgUrl" />
    </span>
    <span>{{ order.buyer.fullname }}</span>
    <span>{{ startDateToShow }}</span>
    <span>{{ endDateToShow }}</span>
    <span>{{ order.status }}</span>
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
    console.log(this.order);
  },
  computed:{
      startDateToShow(){
        //   new Date().toGMTString()
          return new Date(this.order.dates.start).toGMTString()
      },
      endDateToShow(){
          return new Date(this.order.dates.end).toGMTString()
      },
  },
  methods:{
approve(){
          console.log('approved')
      }
      ,
      decline(){
          console.log('declined')
      }
  }
};
</script>

<style>
</style>