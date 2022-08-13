<template>
  <div class="home">
    <vueHeadful :title="'Coby Yates | Portfolio'" />
    <v-row id="top" v-on:scroll.passive="handleScroll" class="pt-0 mt-0 daRow">
      <v-col class="pt-0 mt-0">
        <v-parallax
          src="https://images.pexels.com/photos/773953/pexels-photo-773953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          :height="heightVH"
        >
          <v-overlay :absolute="true" :opacity="0.3" :value="true">
            <div class="hero d-flex flex-column justify-center align-center">
              <h1 class="white--text">{{ name }}</h1>
              <div class="text-center white--text  mt-6">
                <h2 class="green--text display-1 text-no-wrap text-center">
                  Front-End Developer
                </h2>
                <a href="#education" v-smooth-scroll
                  ><v-icon size="70">mdi-chevron-double-down</v-icon></a
                >
              </div>
            </div>
          </v-overlay>
        </v-parallax>
      </v-col>
    </v-row>

    <v-row class="work">
      <v-col>
        <Education id="education" />
      </v-col>
    </v-row>
    <v-row class="work">
      <v-col>
        <Experience class="mt-12" />
      </v-col>
    </v-row>
    <v-row class="grey lighten-3 py-12">
      <v-col cols="12">
        <v-row class="px-12 pt-12">
          <v-col sm="12" md="4">
            <v-img
              width="80%"
              class="mx-auto my-auto elevation-6"
              src="http://images.coberapps.com/about_Me.jpg"
            />
          </v-col>
          <v-col sm="12" md="8" class="d-flex flex-column align-center">
            <h2 class="text-center font-weight-light green--text mb-8">
              ABOUT ME
            </h2>
            <div class="d-flex flex-column justify-space-between">
              <p
                v-html="item.bio"
                v-for="item in $store.state.about"
                :key="item.i"
              ></p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Projects class="mt-12" />
      </v-col>
    </v-row>
    <Skills />
    <a class="back pr-3" href="#top" v-smooth-scroll
      ><v-btn><v-icon large color="blue">mdi-chevron-up</v-icon></v-btn></a
    >
  </div>
</template>

<script>
// @ is an alias to /src
// import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import vueHeadful from "vue-headful";


export default {
  name: "Home",
  components: {
    // Work,
    Education,
    Experience,
    Projects,
    Skills,
    vueHeadful,
  },
  data() {
    return {
      name: "Coby Yates",
      heightVH: `${window.innerHeight}`,
      metaInfo() {
        return {
          title: "Home - Coby Yates Portfolio",
          meta: [
            { name: 'description', content: `I'm a vuejs developer open to all types of projects. With experience in UX/UI and development, I can provide the skills you require.` },
            { property: 'og:title', content: "Home - Coby Yates Portfolio" },
            { property: 'og:site_name', content: 'Home' },
            { property: 'og:type', content: 'website' },
            { name: 'robots', content: 'index,follow' }
          ]
        }
      }
    }
  },
  methods: {
    handleScroll(e) {
    if ((e.target.scrollHeight-300) <= e.target.scrollTop) {
      console.log('helo')
    }
    }
  },
  mounted: function () {
      window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll);
  },
  created() {
    window.scrollTo(0, 0)
  },
}
</script>

<style scoped>
.back {
  position: fixed;
  bottom: 10px;
  right: 10px;
}

a {
  text-decoration: none;
  list-style: none;
}

.hero {
  height: 100vh !important;
}

.hero img {
  margin-top: -200px !important;
}

h1 {
  font-size: 65px;
}

.daRow {
  height: 105vh !important;
}

.aboutMe {
  width: 40%;
}

.about {
  width: 90%;
  margin-top: -120px;
}

::v-deep .over .v-overlay__scrim {
  max-height: 480px !important;
}

.work {
  margin-top: -100px;
  z-index: 99;
}
</style>
