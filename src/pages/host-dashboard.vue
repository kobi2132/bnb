
<template>
  <!--  -->
  <section class="main-layout2">
    <h1>host-dashboard</h1>
    <!-- <p>{{myOrders}}</p> -->
    <section class="dashboard-container flex">
      <section class="dash-nav-sticky-container">
        <div class="dash-nav-container flex column">
          <!-- <button
            class="add-stay-btn flex align-center clean-btn clickable"
            value="add stay"
          >
            <i class="fa fa-plus" aria-hidden="true"> </i>Add Stay
          </button> -->
          <button
            value="my Stays"
            @click="showMyStays()"
            class="clean-btn clickable"
          >
            <i class="fa fa-house-user" aria-hidden="true"></i>My Stays
          </button>
          <button
            value="orders"
            @click="showMyOrders()"
            class="clean-btn clickable"
          >
            <i class="fa fa-clipboard-list" aria-hidden="true"></i>Orders
          </button>
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
                <i class="fa fa-star" aria-hidden="true"></i>{{totalRateAvg}}</span
              >
              <!-- <p>
                4%<i class="fa fa-long-arrow-alt-up" aria-hidden="true"></i>
              </p> -->
            </div>
          </div>

          <div>
            <h3>monthly earning</h3>
            <div><span>$ 10,410</span></div>
          </div>
          <div class="orders-div">
            <h3>Orders</h3>
            <div class="flex">
              <span>37</span>
              <div class="circle-container flex align-center">
                <div class="flex align-center">
                  <span title="pending" class="circle yellow-circle"></span>
                  <p>16</p>
                </div>
                <div class="flex align-center">
                  <span title="approved" class="circle green-circle"></span>
                  <p>19</p>
                </div>
                <div class="flex align-center">
                  <span title="decline" class="circle green-red"></span>
                  <p>2</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3>Active Guests</h3>
              <span>2</span>
            </div>

            <div>
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="guest"
                class="host-img"
              />
              <img
                src="https://randomuser.me/api/portraits/women/53.jpg"
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
                  <div class="flex space-evenly align-center">
                    <span class="host-img"></span><span>Name</span
                    ><span>Address</span><span>Price</span
                    ><span class="stay-actions">Actions</span>
                  </div>
                </div>

                <!-- for in
                      v-for="stay in myStays" :key="stay._id" > -->
                <div class="tbody" >
                  <div class="host-stay-preview flex align-center" v-for="stay in myStays" :key="stay.id" >
                    <span class="flex align-center "
                      ><img
                        src="https://res.cloudinary.com/home-to-go/image/upload/v1622623125/hnh9ajbxx6kt13gm1fnx.webp"
                        alt="stay"
                        class="host-img"
                      />
                    </span>
                    <span>
                      <!-- fix hrefs -->
                      <a href="#/stay/60b624e305f90634a567b2ac"
                        >{{stay.name}}</a
                      > </span
                    ><span
                      ><a href="#/stay/60b624e305f90634a567b2ac"
                        >{{stay.loc.country}} , {{stay.loc.city}}</a
                      ></span
                    ><span
                      ><a href="#/stay/60b624e305f90634a567b2ac">$ {{stay.price}}</a></span
                    ><span class="stay-actions"
                      ><button class="clean-btn clickable">
                        <i class="fa fa-edit" aria-hidden="true"></i>Edit
                      </button></span
                    >
                  </div>
                </div>
              </div>
            </section>
            <section class="host-order-list" v-if="shouldShow === 'my orders'">
              <section class="host-order-container">
                <section class="host-order-list">
                  <div class="host-order-list-table">
                    <div class="thead">
                      <div class="flex space-evenly align-center">
                        <span class=" host-img"></span>
                        <span>Guest Name</span>
                        <span>Check in</span>
                        <span>Check out</span>
                        <span>Status</span>
                        <span>Price</span>
                        <span>Actions</span
                        >
                      </div>
                    </div>
                    <div class="tbody">
                      <!-- for in
                      v-for="order in myOrders" :key="order._id" > -->
                          
                      <div v-for="order in myOrders" :key="order._id" class="host-stay-preview flex space-evenly align-center">
                        <span>
                          <img
                            src="https://randomuser.me/api/portraits/women/16.jpg"
                            alt="user"
                            class="host-img"
                        /></span>
                        <span>{{order.buyer.fullname}}</span>
                        <span>{{order.dates.start}}</span>
                        <span>{{order.dates.end}}</span>
                        <span>{{order.status}}</span>
                        <span>$ {{order.stay.price}}</span>
                        <span class="stay-actions flex align-center">
                          <button class="clean-btn clickable">
                            <i class="fa fa-check" aria-hidden="true"></i
                            >Re-Approve
                          </button>
                        </span>
                      </div>
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
export default {
  name: "host-dashboard",
  data() {
    return {
      currUser:null,
      shouldShow: "my orders",
      myOrders: [],
      allStays:[],
      myStays : []
    };
  },
  created() {
    const page = "hostDashboard";
    this.$store.commit({ type: "setCurrPage", page });
    this.myOrders = this.demoOrders
    this.allStays = this.getAllStays
    this.currUser = this.getUser
    this.userStays
  },
  computed: {
    demoOrders() {
      return this.$store.getters.getDemoOrders;
    },
    getUser(){
      return this.$store.getters.loggedinUser ;
    },
    getAllStays() {
      return this.$store.getters.staysToShow;
    },
    userStays(){
      this.allStays.forEach(stay => {
        const stayHost =  stay.host.fullname
        // console.log('host', stayHost)
        // console.log('user', this.currUser.fullname)
        if(this.currUser.fullname === stayHost) {
          // console.log('adding')
          this.myStays.push(stay)
        }
      })
    },
    totalRateAvg(){
      var count = 0
      var sum = 0
      this.myStays.forEach(stay => {
        const sum = stay.reviews.reduce(
        (sum, review) => sum + review.rate,
        0
      );
      var avg = sum / this.stay.reviews.length || 0;
      avg = (Math.round(avg * 100) / 100).toFixed(1);
      count++
      sum+=avg
      })
      return (sum/count).toFixed(1)
    }
    
  },
  methods: {
    showMyStays() {
      this.shouldShow = "my stays";
      console.log(this.shouldShow);
    },
    showMyOrders() {
      this.shouldShow = "my orders";
      console.log(this.shouldShow);
    },
    showMyRates() {
      this.shouldShow = "my rates";
      console.log(this.shouldShow);
    },
  },
  
};
</script>

<style>
</style>