<template>
  <div>
    <label for="trip-cal">Check in Checkout</label>
    <date-picker
      v-model="time"
      range-separator=" "
      :placeholder="placeholder"
      range
      format="MMM D"
      :input-attr="attributes"
      @input="updateDates"
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
      time: null,
      placeholder: "Check in Checkout",
      attributes: { name: "date", id: "trip-cal" },
    };
  },
  methods: {
    updateDates() {
      this.$emit("updated", this.time);
    },
  },
};
</script>

<style scoped>
</style>
