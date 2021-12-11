
<template>
  <!--  -->
  <section class="main-layout2 dashboard-page">
    <!-- <p>{{myOrders}}</p> -->
    <section class="dashboard-container flex space-between">
      <section class="dash-nav-sticky-container">
        <!-- <h1>host-dashboard</h1> -->
        <div class="dash-nav-container flex column">
          <!-- <button
            class="add-stay-btn flex align-center clean-btn clickable"
            value="add stay"
          >
            <i class="fa fa-plus" aria-hidden="true"> </i>Add Stay
          </button> -->
          <div>
            <span class="material-icons"> home</span>
            <button
              value="my Stays"
              @click="showMyStays()"
              class="clean-btn clickable"
            >
              My Stays
            </button>
          </div>
          <div>
            <span class="material-icons">list_alt</span>
            <button
              value="orders"
              @click="showMyOrders()"
              class="clean-btn clickable"
            >
              My Orders
            </button>
          </div>
          <!-- <button
            value="rate stat"
            @click="showMyRates()"
            class="clean-btn clickable"
          >
            <i class="fa fa-star" aria-hidden="true"></i>Rates
          </button> -->
        </div>

        <div class="host-info-container">
          <!-- <img src="/static/media/user-cash.e1f91298.PNG" alt="cash" /> -->
          <h2>
            Make all payments through
            <span class="logo-txt logo-small">Kumb</span>
          </h2>
          <p>
            Always pay and communicate through Kumba to ensure you're protected
            under our Terms of Service, Payments Terms of Service, cancellation,
            and other safeguards.
          </p>
        </div>
      </section>

      <section class="dash-main-container flex column">
        <section class="dash-header flex space-evenly">
          <div class="total-rate">
            <h3>Total Rate</h3>
            <div class="flex space-between align-center">
              <span class="flex align center">
                <i class="fa fa-star" aria-hidden="true"></i
                >{{ totalRateAvg }}</span
              >
              <!-- <p>
                4%<i class="fa fa-long-arrow-alt-up" aria-hidden="true"></i>
              </p> -->
            </div>
          </div>

          <div>
            <h3>Earnings</h3>
            <div>
              <span>$ {{ monthlyEarningToShow }}</span>
            </div>
          </div>
          <div class="orders-div">
            <h3>Orders</h3>
            <div class="flex column">
              <span>{{ totalOrders }}</span>
              <div class="circle-container flex column">
                <div class="flex align-center space-around">
                  <span title="approved" class="circle green-circle"></span>
                  <p>{{ approvedOrders }}</p>
                </div>
                <div class="flex align-center space-around">
                  <span title="pending" class="circle yellow-circle"></span>
                  <p>{{ pendingOrders }}</p>
                </div>
                <div class="flex align-center space-around">
                  <span title="decline" class="circle red-circle"></span>
                  <p>{{ declinedOrders }}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3>Active Guests</h3>
              <span>{{ activeGuests }}</span>
            </div>

            <div>
              <img
                v-for="(guest, id) in activeGuests"
                :key="id"
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="guest"
                class="host-img"
              />
            </div>
          </div>
        </section>

        <section class="dash-info-container">
          <section class="host-stay-container">
            <section class="host-stay-list" v-if="shouldShow === 'my stays'">
              <div class="host-stay-list-table">
                <div class="thead">
                  <div class="thead-container">
                    <!-- flex space-evenly align-center -->
                    <span class="host-img"></span>
                    <span>Name</span>
                    <span>Price</span>
                    <span>Address</span>
                    <span class="stay-actions">Actions</span>
                  </div>
                </div>

                <!-- for in
                      v-for="stay in myStays" :key="stay._id" > -->
                <div class="tbody">
                  <div
                    class="host-stay-preview"
                    v-for="stay in myStays"
                    :key="stay.id"
                  >
                    <span class="flex align-center">
                      <img :src="stay.imgUrls[0]" alt="" class="stay-icon" />
                    </span>
                    <span>
                      <!-- fix hrefs -->
                      <a href="#/stay/60b624e305f90634a567b2ac">{{
                        stay.name
                      }}</a>
                    </span>
                    <span>
                      <a href="#/stay/60b624e305f90634a567b2ac"
                        >$ {{ stay.price }}</a
                      >
                    </span>
                    <span>
                      <a href="#/stay/60b624e305f90634a567b2ac"
                        >{{ stay.loc.country }} , {{ stay.loc.city }}</a
                      >
                    </span>
                    <span class="stay-actions">
                      <button class="clean-btn clickable">
                        <i class="fa fa-edit" aria-hidden="true"></i>Edit
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section class="host-order-list" v-if="shouldShow === 'my orders'">
              <section class="host-order-container">
                <section class="host-order-list">
                  <div class="host-order-list-table">
                    <div class="thead">
                      <div class="thead-container">
                        <span class="host-img"></span>
                        <span>Guest Name</span>
                        <span>Check in</span>
                        <span>Check out</span>
                        <span>Status</span>
                        <span>Price</span>
                        <span>Actions</span>
                      </div>
                    </div>
                    <div class="tbody">
                      <!-- for in
                      v-for="order in myOrders" :key="order._id" > -->

                      <!-- <div
                        v-for="order in myOrders"
                        :key="order._id"
                        class="host-stay-preview"
                      > -->
                      <order-data :order="order" class="host-stay-preview" v-for="order in myOrders"
                        :key="order._id"/>
                        <!-- <span >
                          <img class="host-img" :src="order.buyer.imgUrl" />
                        </span>
                        <span>{{ order.buyer.fullname }}</span>
                        <span>{{ order.dates.start }}</span>
                        <span>{{ order.dates.end }}</span>
                        <span>{{ order.status }}</span>
                        <span>$ {{ order.stay.price }}</span>
                        <span class="stay-actions flex align-center">
                          <button class="clean-btn clickable">
                            <i class="fa fa-check" aria-hidden="true"></i
                            >Re-Approve
                          </button>
                        </span> -->
                      <!-- </div> -->
                      <!-- <div class="host-stay-preview">
                        <span>
                        <img src="https://randomuser.me/api/portraits/women/61.jpg" alt="user">
                        </span>
                        <span>Krystal Jason</span>
                        <span>Sun Aug 01 2021</span>
                        <span>Sat Aug 07 2021</span>
                        <span>declined</span>
                        <span>$ 1,920</span>
                        <span class="stay-actions">
                          <button>
                          <i class="fas fa-check" aria-hidden="true">
                          </i>Re-Approve</button>
                        </span>
                      </div> -->
                    </div>
                  </div>
                </section>
              </section>
            </section>
            <!-- <section class="host-rates" v-if="shouldShow === 'my rates'"> -->
            <!-- <h1>rates</h1>
            </section> -->
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import orderData from "@/cmps/stay-cmps/order-data.vue";

export default {
  name: "host-dashboard",
  components:{
    orderData
  },
  data() {
    return {
      currUser: null,
      shouldShow: "my orders",
      allOrders: [],
      myOrders: [],
      allStays: [],
      myStays: [],
    };
  },
  created() {
    const page = "hostDashboard";
    this.$store.commit({ type: "setCurrPage", page });
    // this.$store.dispatch({ type: "loadOrders" });
    // this.myOrders = this.getDemoOrders
    this.currUser = this.$store.getters.loggedinUser;
    this.allOrders = this.getOrders;
    this.myOrders = this.userOrders;
    this.allStays = this.getAllStays;
    this.userStays;
    // this.dateToShow
  },
  computed: {
    getDemoOrders() {
      return this.$store.getters.getDemoOrders;
    },
    getOrders() {
      return this.$store.getters.getOrders;
    },
    getUser() {
      return this.$store.getters.loggedinUser;
    },
    getAllStays() {
      return this.$store.getters.staysToShow;
    },
    userStays() {
      this.allStays.forEach((stay) => {
        const stayHost = stay.host.fullname;
        // console.log('host', stayHost)
        // console.log('user', this.currUser.fullname)
        if (this.currUser.fullname === stayHost) {
          // console.log('adding')
          this.myStays.push(stay);
        }
      });
    },
    userOrders() {
      // console.log(this.allOrders)
      var currUserOrders = [];
      const allOrders = this.$store.getters.getOrders;
      allOrders.forEach((order) => {
        const orderHostId = order.host._id;
        console.log("userid", this.currUser._id, "hostid", orderHostId);
        // console.log('host', stayHost)
        // console.log('user', this.currUser.fullname)
        if (this.currUser._id === orderHostId) {
          // console.log('adding')
          console.log(order.dates);
          currUserOrders.push(order);
        }
      });
      console.log(currUserOrders);

      return currUserOrders;
    },
    totalRateAvg() {
      var count = 0;
      var sum = 0;
      this.myStays.forEach((stay) => {
        // console.log(count , stay.reviews)
        stay.reviews.forEach((review) => {
          const reviewRatings = Object.values(review.rate);
          count += reviewRatings.length;
          // console.log('array ratings', reviewRatings)
          var currSum = reviewRatings.reduce(
            (sumRate, rating) => sumRate + rating,
            0
          );
          sum += currSum;
        });
      });
      // console.log('sum', sum , 'count', count)
      return (sum / count).toFixed(1);
      return sum;
    },
    totalOrders() {
      return this.myOrders.length;
    },
    pendingOrders() {
      var ordersToShowCount = 0;
      this.myOrders.forEach((order) => {
        if (order.status === "pending") {
          ordersToShowCount++;
        }
      });
      return ordersToShowCount;
    },
    approvedOrders() {
      var ordersToShowCount = 0;
      this.myOrders.forEach((order) => {
        if (order.status === "approved") {
          ordersToShowCount++;
        }
      });
      return ordersToShowCount;
    },
    declinedOrders() {
      var ordersToShowCount = 0;
      this.myOrders.forEach((order) => {
        if (order.status === "declined") {
          ordersToShowCount++;
        }
      });
      return ordersToShowCount;
    },
    monthlyEarningToShow() {
      var ordersPrice = [];
      // var ordersDates=[]
      this.myOrders.forEach((order) => {
        // console.log('toshow', order)
        const { start, end } = order.dates;
        const days = (Date.parse(end) - Date.parse(start)) / (1000 * 3600 * 24);
        const CURRORDERPRICE = parseInt(days * order.stay.price);
        // console.log(CURRORDERPRICE)
        ordersPrice.push(CURRORDERPRICE);
      });
      // console.log('prices', ordersPrice)
      var sum = ordersPrice.reduce((sum, price) => sum + price, 0);
      // var sum = 100000
      // Number(sum).toLocaleString()
      return Number(sum).toLocaleString();
    },
    activeGuests() {
      var activeGuestsCount = 0;
      this.myOrders.forEach((order) => {
        const { start, end } = order.dates;
        // console.log(start , end)
        var now = Date.now();
        var orderStart = Date.parse(start);
        var orderEnd = Date.parse(end);
        // console.log(now, orderStart, orderEnd  )
        if (now <= orderEnd && now >= orderStart) {
          activeGuestsCount++;
        } else {
          // console.log("order not active");
        }
      });
      // console.log("active", activeGuestsCount);
      return activeGuestsCount;
      // return 3;
    },
    // dateToShow(){
    //   console.log('dateToshow', this.myOrders[0].dates.start)
    //   new Date().toGMTString()
    // }
  },
  methods: {
    showMyStays() {
      this.shouldShow = "my stays";
      // console.log(this.shouldShow);
    },
    showMyOrders() {
      this.shouldShow = "my orders";
      // console.log(this.shouldShow);
    },
    showMyRates() {
      this.shouldShow = "my rates";
      // console.log(this.shouldShow);
    },
  },
};
</script>

<style>
</style>