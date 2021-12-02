<template>
  <div>
    <label for="trip-cal">Check in Checkout</label>
    <date-picker
      v-model="time3"
      range-separator=" "
      :placeholder="placeholder"
      range
      format="MMM D"
      :input-attr="attributes"
    ></date-picker>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  components: { DatePicker },
  data() {
    return {
      time3: null,
      placeholder: "Check in Checkout",
      attributes: { name: "date", id: "trip-cal" },
    };
  },
};
</script>

<style scoped>
</style>
