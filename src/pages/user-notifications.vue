<template>
  <section class="notifications-page main-layout2">
    <h1 class="notifications-header">My notifications</h1>
    <section class="notifications-list flex column">
      <div
        class="
          notifications-card
          flex
          space-between
          gray-box-shadow
          align-center
        "
      >
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="avatar"
        />
        <span class="flex column">
          <h3>Mor Levi</h3>
          <h4>03 / 12 / 2021</h4></span
        >
        <h4 class="notifications-card-txt">
          Your order has been sent to Mor Levi
        </h4>
        <pre>{{ notifications }}</pre>
        <a class="trips-link" href="#/orders">Read More</a>
      </div>
    </section>
    <button class="clear-all-btn clickable">Clear all</button>
  </section>
</template>

<script>
export default {
  name: "user-notifications",
  data() {
    return {
      notifications,
    };
  },
  computed: {
    notifications() {
      return this.$store.getters.notifications;
    },
  },
  created() {
    const page = "notifications";
    this.$store.commit({ type: "setCurrPage", page });
  },
};
</script>

<style>
</style>