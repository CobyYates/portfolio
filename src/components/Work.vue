<template>
  <v-container class="pa-0" fluid>
    <vueHeadful title="Coby Yates | All Work" />
    <v-parallax
      src="https://images.pexels.com/photos/1624600/pexels-photo-1624600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      class="mt-0 mb-5 parallax-"
      height="850">
      <v-overlay :absolute="true" :opacity="0.3" :value="true">
        <v-row>
          <v-col cols="9" class="mx-auto">
            <h1 class="quote font-weight-light font-italic">{{quote}}</h1>
            <p class="title mt-3 ml-12">― Jay Samit</p>
          </v-col>
        </v-row>
      </v-overlay>
    </v-parallax>
    <v-sheet
      class="mx-auto my-10"
      max-width="95%"
      color="transparent"
    >
    <v-expand-transition class="lang">
      <v-sheet
        v-if="model != null"
        color="transparent"
        height="25"
        class="mb-6"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <h2 class="green--text font-weight-light lang">{{languages[model].lang}}</h2>
        </v-row>
      </v-sheet>
    </v-expand-transition>
    <v-divider dark class="mb-3" v-show="model !== null" />
      <v-slide-group light center-active show-arrows mandatory v-model="model">
        <v-slide-item
          v-for="n in languages"
          :key="n.i"
          v-slot:default="{ active, toggle }"
        >
          <v-btn
            class="mx-12 py-6"
            height="120"
            width="120"
            icon
          >
            <v-icon
              size="120"
              :input-value="active"
              :class="active && `${n.color}--text` || `${n.color}--text opac`"
              @click="toggle"
              @click.native="filterProjects(n)"
            >
              {{n.url}}
            </v-icon>
          </v-btn>
        </v-slide-item>
      </v-slide-group>  
    </v-sheet>

    <v-row class="mx-auto justify-center work">
      <v-col
        v-for="project in projects"
        :key="project.i"
        class="d-flex justify-center mx-0 px-0"
      >
        <v-card
          height="300"
          color="transparent"
          flat
          width="300"
          class="pa-0 ma-3 d-flex align-center"
          @click="openProject(project); dialog = true"
        >
          <v-img :src="`${project.logo}`"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import vueHeadful from "vue-headful";
export default {
  components: {
    vueHeadful
  },
  data() {
    return {
      show: false,
      model: null,
      selectedProject: null,
      quote: 'Pivoting is not the end of the disruption process, but the beginning of the next leg of your journey.',
      privateRepo: false,
      dialog: false,
      all: 'all',
      projects: [],
      items: [
          {
            src: '../assets/images/Garage.png',
          },
        ],
      
      languages: [
        { lang: 'HTML', url: 'mdi-language-html5', color: 'orange' },
        { lang: 'CSS', url: 'mdi-language-css3', color: 'blue' },
        { lang: 'JavaScript', url: 'mdi-language-javascript', color: 'amber' },
        { lang: 'Vue.js', url: 'mdi-vuejs', color: 'green' },
        { lang: 'Vuetify', url: 'mdi-vuetify', color: 'blue' },
        { lang: 'GraphQL', url: 'mdi-graphql', color: 'pink' },
        { lang: 'MongoDB', url: 'mdi-database', color: 'green' },
        { lang: 'React', url: 'mdi-react', color: 'blue' },
        { lang: 'Material UI', url: 'mdi-material-ui', color: 'blue' },
        { lang: 'WordPress', url: 'mdi-wordpress', color: 'blue' },
        { lang: 'Firebase', url: 'mdi-firebase', color: 'orange' },
        { lang: 'Next.js', url: 'mdi-react', color: 'blue' },
        { lang: 'Node', url: 'mdi-nodejs', color: 'green' },
      ]
    }
  },
  methods: {
    filterProjects(lang) {
      this.projects = this.$store.state.cards.filter(e => e.tags.includes(`${lang.lang}`))
    },
    openProject(project){
      this.$router.push(`/projects/${project.title}`)
    },
  },
  mounted() {
    this.projects = this.$store.state.cards
  }
};
</script>

<style scoped>
.tool {
  margin-top: 125px;
}

.opac {
  opacity: .4;
}

.work {
  width: 85%;
}

::v-deep .lang {
  z-index: 99;
}

.carousel {
  max-height: 100%!important;
}

.title {
  z-index: 99;
}

::v-deep .hero img {
  transform: translate(-50%, 200px)!important;
}

.lang {
  z-index: 99;
}
</style>
