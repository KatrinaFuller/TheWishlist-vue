<template>
  <div class="navbar">
    <form class="form-inline">
      <button class="btn" type="button" @click="logoutNav" v-if="user.email">Logout</button>
      <button class="btn" type="button" @click="loginNav" v-else>Login</button>
      <button
        class="btn"
        type="button"
        @click="usernameButton"
        v-if="user.email"
      >Hello, {{user.username}}</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    loginNav() {
      this.$store.dispatch("loginNav");
    },
    logoutNav() {
      this.$store.dispatch("logoutNav");
    },
    usernameButton() {
      this.$store.dispatch("usernameButton");
    }
  },
  components: {}
};
</script>


<style scoped>
.navbar {
  background-color: wheat;
}
</style>