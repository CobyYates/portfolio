<template>
  <v-container fluid>
    <v-sheet
      class="mx-auto mb-10"
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
          <h2 class="white--text font-weight-light">{{languages[model].lang}}</h2>
        </v-row>
      </v-sheet>
    </v-expand-transition>
    <v-divider dark class="mb-3" v-show="model !== null" />
      <v-slide-group dark center-active show-arrows mandatory v-model="model">
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
          @click="selectedProject = project; dialog = true"
        >
          <v-img :src="`${project.logo}`"></v-img>
        </v-card>
      </v-col>
    </v-row>
    

    <v-dialog
      v-model="dialog"
      width="100%"
    >
      <v-card height="100%" width="100%">
        <v-row class="pa-0 ma-0">
          <v-col class="pa-0" cols="7">
            <v-carousel height="100%" hide-delimiters :show-arrows="selectedProject.images.length > 1 && selectedProject.images !== undefined ? true : false">
              <v-carousel-item
                
                v-for="(item,i) in selectedProject.images"
                :key="i.location"
                :src="item.location"
              ></v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col cols="5" class="d-flex flex-column justify-space-between">
            <v-card-title>{{selectedProject.title}}
              <v-spacer />
                <span class="subtitle-2">Type: {{selectedProject.type}}</span>
            </v-card-title>
            <v-card-subtitle>
                Stage: {{selectedProject.stage}}
            </v-card-subtitle>
            <v-divider />
            <v-card-subtitle>{{selectedProject.description}}</v-card-subtitle>
            <v-list>
              <v-subheader>Requirements</v-subheader>
              <v-list-item
                v-for="(item, i) in selectedProject.requirements"
                :key="i"
                dense
              >
                <v-list-item-content>
                  <v-list-item-title>- {{item.text}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-card-text>
              <div>
                
              </div>
              <div>
                <p class="title mb-0 mt-1">Languages Used</p>
                <v-chip
                  v-for="item in selectedProject.languages"
                  :key="item.i"
                  class="ma-2"
                  color="grey lighten-3"
                  label
                >
                  <v-icon :color="item.color" left>{{item.icon}}</v-icon>
                  {{item.text}}
                </v-chip>
              </div>
            </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="openTab(selectedProject.live)" text class="mt-4"><v-icon left>mdi-open-in-new</v-icon>View Live Site</v-btn>
                <v-btn color="black" @click="openTab(selectedProject.github)" text class="mt-4"><v-icon left>mdi-github</v-icon>View Repository</v-btn>
              </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="privateRepo"
    >
      Sorry, this is a private Repository

      <template v-slot:action="{ attrs }">
        <v-btn
          color="primary"
          text
          v-bind="attrs"
          @click="privateRepo = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      show: false,
      model: null,
      selectedProject: {images: []},
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
    openTab(url){
      url !== '' ? window.open(url, "_blank") : this.privateRepo = true
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
</style>
