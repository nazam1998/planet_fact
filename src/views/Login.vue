<template>
  <b-card class="mx-auto w-50 mt-5">
    <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      content-cols-sm
      content-cols-lg="7"
      label="Enter your name"
      label-for="input-horizontal"
    >
      <b-form-input @keyup.enter="login" v-model="username" id="input-horizontal"></b-form-input>
    </b-form-group>
    <b-button @click="login" class="btn btn-primary">Login</b-button>
  </b-card>
</template>
<script>
import store from "@/store";
export default {
  name: "Register",
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    login() {
      store.user = this.username;
      const redirectPath = this.$route.query.redirect || "/user";
      this.$root.$emit("login", this.username);
      this.$router.push(redirectPath);
    },
  },
};
</script>
<style>
</style>