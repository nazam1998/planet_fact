<template>
  <div class="planet">
    <b-row class="justify-content-center">
      <b-col cols="5">
        <img
          class="img-fluid img-planet"
          :src="require(`@/assets/${planetImg}`)"
          alt=""
        />
        <img
          v-if="planetInfo == 'geology'"
          class="img-fluid img-geology"
          :src="require(`@/assets/${planet.images.geology}`)"
          alt=""
        />
      </b-col>
      <b-col cols="3 text-left">
        <h1>{{ planet.name }}</h1>
        <router-view :key="$route.path" />
        <b-row class="info-link mb-5 mt-2">
          <router-link
            :to="{ name: 'PlanetInfos', params: { planetInfo: 'overview' } }"
            class="col-12 button-info my-2"
            :style="styleObject"
            :class="{ 'active-button': planetInfo == 'overview' }"
            ><span class="text-muted">01</span> Overview</router-link
          >
          <router-link
            :to="{ name: 'PlanetInfos', params: { planetInfo: 'structure' } }"
            class="col-12 button-info my-2"
            :style="styleObject"
            :class="{ 'active-button': planetInfo == 'structure' }"
            ><span class="text-muted">02</span> Internal Structure</router-link
          >
          <router-link
            :to="{ name: 'PlanetInfos', params: { planetInfo: 'geology' } }"
            class="col-12 button-info my-2"
            :style="styleObject"
            :class="{ 'active-button': planetInfo == 'geology' }"
            ><span class="text-muted">03</span> Surface Geology</router-link
          >
        </b-row>
      </b-col>
    </b-row>
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="2" class="planet-rotate"
          ><span class="text-muted">Rotation Time</span>
          <h4>{{ planet.rotation }}</h4>
        </b-col>
        <b-col cols="2" class="planet-rotate"
          ><span class="text-muted">Revolution Time</span>
          <h4>{{ planet.revolution }}</h4>
        </b-col>
        <b-col cols="2" class="planet-rotate"
          ><span class="text-muted">Radius</span>
          <h4>{{ planet.radius }}</h4>
        </b-col>
        <b-col cols="2" class="planet-rotate"
          ><span class="text-muted">Average Temp.</span>
          <h4>{{ planet.temperature }}</h4>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import store from "@/store";

export default {
  name: "Planet",

  props: {
    planetSlug: {
      type: String,
      required: true,
    },
    planetInfo: {
      type: String,
      required: true,
    },
  },
  computed: {
    planet: function () {
      return store.planets.find((planet) => planet.slug == this.planetSlug);
    },

    planetImg: function () {
      switch (this.planetInfo) {
        case "overview":
          return this.planet.images.planet;
        case "structure":
          return this.planet.images.internal;
      }
      return this.planet.images.planet;
    },
    styleObject: function () {
      let color;
      console.log(this.planet.slug);
      switch (this.planet.slug) {
        case "mercury":
          color = "#419ebb";
          break;
        case "venus":
          color = "#eda249";
          break;
        case "mars":
          color = "#d14c32";
          break;
        case "earth":
          color = "#6d2ed5";
          break;
        case "jupiter":
          color = "#d83a34";
          break;
        case "saturn":
          color = "#cd5120";
          break;
        case "uranus":
          color = "#1ec1a2";
          break;
        case "neptune":
          color = "#2d68f0";
          break;
      }
      return {
        "--background-color-hover": color,
      };
    },
  },
};
</script>
<style scoped>
.planet {
  color: white;
  margin-top: 70px;
}
.img-planet {
  height: 350px;
  width: 350px;
}
.img-geology {
  position: absolute;
  height: 150px;
  width: 150px;
  bottom: 20px;
  left: 250px;
}
.source-link {
  color: rgb(184, 183, 183);
  text-decoration: underline;
}

.info-link a {
  color: white;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  padding: 10px;
  border: 1px solid grey;
}
.info-link span {
  margin-right: 10px;
}
.planet-rotate {
  padding: 10px 20px;
  border: 1px solid grey;
  text-transform: uppercase;
  margin: 0 20px;
  text-align: start;
}
.planet-rotate span {
  font-size: 10px;
}
.button-info:hover {
  text-decoration: none;
  background-color: var(--background-color-hover);
}
.active-button {
  background-color: var(--background-color-hover);
}
</style>