<template>
  <div class="home">
    <vueHeadful :title="'Coby Yates | Portfolio'" />
    <div class="hero d-flex flex-column justify-center align-center">
      <h1 class="white--text font-weight-light">{{name}}</h1>
      <div class="text-center white--text aboutMe mt-6">
        <h2 class="font-weight-light ">Front-End Developer</h2>
        <h3></h3>
      </div>
    </div>
    <v-row class="work">
      <v-col>
        <Work id="work" ref="work" />
      </v-col>
    </v-row>
    <v-row class="grey lighten-3 py-12">
      <v-col cols="12">
        <v-row class="px-12 pt-12">
          <v-col sm="12" md="6">
            <v-img width="50%" class="mx-auto my-auto elevation-6" src="http://images.coberapps.com/bio.jpg" />
          </v-col>
          <v-col
            sm="12"
            md="6"
            class="d-flex flex-column justify-center align-center"
          >
            <h2 class="text-center">BIO</h2>
            <p
              v-html="item.bio"
              v-for="item in $store.state.about"
              :key="item.i"
            ></p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <Skills />
  </div>
</template>

<script>
// @ is an alias to /src
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import vueHeadful from "vue-headful";
export default {
  name: "Home",
  components: {
    Work,
    Skills,
    vueHeadful,
  },
  data () {
    return {
      name: '< Coby Yates />'
    }
  }
};
</script>

<style scoped>
.hero {
  background-color: #262e37;
  height: 70vh;
  z-index: 0;
  margin: 0;
}

h1 {
  font-size: 65px;
}

.hero:before {
  content: "";
  position: absolute;
  top: 70vh;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: #262e37;
  transform: skew(-83deg);
  transform-origin: top;
  z-index: 0;
}

.aboutMe {
  width: 40%;
}

.about {
  width: 90%;
  margin-top: -120px;
}

::v-deep .over .v-overlay__scrim {
  max-height: 480px!important;
}

.work {
  margin-top: -100px;
  z-index: 99;
}
</style>
