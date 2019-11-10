<template>
  <div class="container-fluid bg">
    <div class="profile">
      <profileNavbar />
    </div>
  </div>
</template>


<script>
// import router from "@router.js";
import profileNavbar from "../components/profileNavbar";

export default {
  name: "profile",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { profileNavbar }
};
</script>


<style scoped>
.bg {
  min-height: 100vh;
}
</style>