<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="transparent">
      <b-navbar-brand href="#">THE PLANETS</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <router-link
              :to="{
                name: 'PlanetInfos',
                params: { planetSlug: planet.slug, planetInfo: 'overview' },
              }"
              v-for="planet in planets"
              :key="planet.slug"
              >{{ planet.name }}</router-link
            >
            <router-link :to="{ name: 'User' }" v-if="isLogged"
              >User</router-link
            >
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  name: "NavBar",
  data() {
    return {
      isLogged: false,
    };
  },
  mounted() {
    this.$root.$on("login", (value) => (this.isLogged = value));
  },

  computed: {
    planets: function () {
      return store.planets;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: white;
  margin: 5px 17px;
}
.navbar {
  border-bottom: 1px solid grey;
}
</style>
