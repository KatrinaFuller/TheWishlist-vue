<template>
  <div class="container-fluid bg">
    <div class="profile">
      <profileNavbar />
      <div>
        <addListModal />
        <button class="btn m-1" data-toggle="modal" data-target="#add-list-modal">Add List</button>
      </div>
    </div>
  </div>
</template>


<script>
// import router from "@router.js";
import profileNavbar from "../components/profileNavbar";
import addListModal from "../components/addListModal";

export default {
  name: "profile",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { profileNavbar, addListModal }
};
</script>


<style scoped>
.bg {
  min-height: 100vh;
}
</style>