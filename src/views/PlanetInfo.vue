<template>
  <div>
    <p class="text-muted my-4">{{ planetDesc.content }}</p>
    <p class="text-secondary">
      Source :
      <a :href="planetDesc.source" target="_blank" class="source-link"
        >Wikipedia <img :src="require('@/assets/icon-source.svg')"
      /></a>
    </p>
  </div>
</template>
<script>
import store from "@/store";
export default {
  name: "PlanetInfo",
  props: {
    planetInfo: {
      type: String,
      required: true,
    },
  },
  computed: {
    planet: function () {
      return store.planets.find(
        (planet) => planet.slug == this.$route.params.planetSlug
      );
    },
    planetDesc: function () {
      return this.planet.infos.find((info) => info.name == this.planetInfo);
    },
  },
};
</script>
<style scoped>
.source-link {
  color: rgb(184, 183, 183);
  text-decoration: underline;
}
.source-link img {
  margin-left: 5px;
}
</style>