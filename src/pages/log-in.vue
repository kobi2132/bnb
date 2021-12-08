<template>
  <main class="login-container">
    <p></p>
    <section v-if="!this.newUser" class="login-form-container flex column">
      <form class="login-form" @submit.prevent="login">
        <div class="login-form-header">
          <h2>Log in</h2>
        </div>
        <div class="login-form-body flex column">
          <h1>Welcome back</h1>
          <input
            type="text"
            class="login-input"
            name="username"
            autocomplete="off"
            placeholder="Username"
            value=""
          />
          <input
            type="password"
            class="login-input"
            name="password"
            autocomplete="off"
            placeholder="Password"
            value=""
          />
          <button type="submit" class="login-btn clickable">Submit</button>
          <div class="login-actions-btns flex space-between">
            <button
              type="button"
              class="toggle-form-btn actions-btn"
              @click="toggleForm()"
            >
              New user
            </button>
            <button type="button" class="forgot-password-btn actions-btn">
              Forgot Password
            </button>
          </div>
        </div>
      </form>
    </section>
    <section v-else class="login-form-container flex column">
      <form class="login-form" @submit.prevent="login">
        <div class="login-form-header">
          <h2>Sign up</h2>
        </div>
        <div class="login-form-body flex column">
          <h1>Welcome to Kumba</h1>
          <input
            type="text"
            class="login-input"
            name="fullname"
            placeholder="Full name"
            autocomplete="fullname"
            value=""
          />
          <input
            name="password"
            class="login-input"
            type="password"
            placeholder="Password"
            autocomplete="current-password"
            value=""
          />
          <input
            type="text"
            class="login-input"
            name="username"
            placeholder="Username"
            autocomplete="username"
            value=""
          />
          <input
            type="text"
            class="login-input"
            name="email"
            placeholder="Email"
            autocomplete="Email"
            value=""
          />
          <button class="login-btn clickable" type="submit">Sign up</button>
          <div class="login-actions-btn flex space-between">
            <button
              type="button"
              class="toggle-form-btn actions-btn"
              @click="toggleForm()"
            >
              I already have an account
            </button>
          </div>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: "log-in",

  data() {
    return {
      newUser: false,
      loggedinUser: {
        nickname: null,
      },
    };
  },
  methods: {
    toggleForm() {
      this.newUser = !this.newUser;
      console.log(this.newUser);
    },
    login() {
      userService.loginUser(this.loggedinUser);
      this.loggedin = !this.loggedin;
    },
    logout() {
      userService.logoutUser();
      this.loggedinUser.nickname = null;
      this.loggedin = !this.loggedin;
    },
  },
};
</script>

<style>
</style>
