<template>
  <div class="home container-fluid">
    <navbar />
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "../components/navbar";

export default {
  name: "home",
  components: { navbar }
};
</script>
