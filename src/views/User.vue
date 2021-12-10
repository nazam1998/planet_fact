<template>
  <div>
    <b-container class="mt-5">
      <b-card>
        <h1>User : {{ username }}</h1>
        <b-card-footer>
          <b-button @click="logOut">Logout</b-button>
        </b-card-footer>
      </b-card>
    </b-container>
  </div>
</template>
<script>
import store from "@/store";
export default {
  name: "User",
  methods: {
    logOut() {
      store.user = null;
      this.$root.$emit("login", null);
      this.$router.push("/login");
    },
  },
  computed: {
    username: function () {
      return store.user;
    },
  },
};
</script>
<style scoped>
</style>