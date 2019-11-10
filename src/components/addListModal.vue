<template>
  <div id="add-list-modal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add List</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addList()">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="list name"
                placeholder="Enter name of list"
                v-model="newList.name"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="description"
                placeholder="Enter description"
                v-model="newList.description"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "add-list-modal",
  data() {
    return {
      newList: {
        userId: this.$store.state.user.id
      }
    };
  },
  computed: {},
  methods: {
    addList() {
      this.$store.dispatch("addList", this.newList);
      $(".close").click();
    }
  },
  components: {}
};
</script>


<style scoped>
</style>