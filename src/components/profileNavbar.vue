<template>
  <div class="row sticky-top">
    <div class="col-12">
      <nav class="navbar">
        <form class="form-inline">
          <button class="btn btn-dark" type="button" @click="backButton">Back</button>
          <h2>{{user.username}}'s Wishes</h2>
          <button class="btn btn-dark" type="button" @click="logoutNav">Logout</button>
        </form>
      </nav>
    </div>
  </div>
</template>


<script>
export default {
  name: "profileNavbar",
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logoutNav() {
      this.$store.dispatch("logoutNav");
    },
    backButton() {
      this.$store.dispatch("backButton");
    }
  },
  components: {}
};
</script>


<style scoped>
.sticky-top {
  position: sticky;
  background-color: wheat;
}
.form-inline {
  display: contents;
}
</style>