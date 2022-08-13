<template>
  <v-container class="pa-0" fluid>
    <vueHeadful :title="`Coby Yates | ${project.title}`" />
    <v-parallax class="mt-0 hero" :src="`${project.hero}`">
      <v-overlay :absolute="true" :opacity="0.5" :value="true">
        <v-row class="overlayRow ">
          <v-col
            cols="12"
            sm="12"
            md="10"
            lg="4"
            xl="4"
            class="d-flex justify-center align-center pr-0"
          >
            <v-img
              :src="
                project.projectLogo !== ''
                  ? `${project.projectLogo}`
                  : `${project.logo}`
              "
              max-width="150"
              class="mr-5"
              contain
            />
            <div>
              <h1 class="font-weight-normal">{{ project.title }}</h1>
              <h2
                class="font-weight-light pb-3"
                v-if="project.clientInfo[0].company !== 'College Project'"
              >
                Client: {{ project.clientInfo[0].company }}
              </h2>
              <h2
                class="font-weight-light"
                v-if="project.clientInfo[0].company === 'College Project'"
              >
                {{ project.clientInfo[0].company }} (UVU)
              </h2>
              <h3 class="font-weight-light">
                Project Status:
                <v-chip
                  label
                  :color="
                    project.stage === 'Complete' ? 'green' : 'amber darken-3'
                  "
                  >{{ project.stage }}</v-chip
                >
              </h3>
            </div>
            <v-divider vertical class="pl-12" />
          </v-col>
          <v-col
            cols="12"
            sm="12"
            md="12"
            lg="8"
            xl="8"
            v-if="project.clientComments !== ''"
            class="mt-12 d-flex justify-center"
          >
            <v-row>
              <v-col
                cols="12"
                sm="12"
                md="3"
                lg="3"
                xl="3"
                class="d-flex flex-column justify-center pl-12"
              >
                <v-avatar
                  v-if="project.clientInfo[0].image !== null"
                  size="120"
                  tile
                >
                  <v-img :src="`${project.clientInfo[0].image}`" />
                </v-avatar>
                <p>
                  {{ project.clientInfo[0].position }} at
                  {{ project.clientInfo[0].company }}
                </p>
              </v-col>
              <v-col cols="12 px-0 mx-0" sm="12" md="9" lg="9" xl="9">
                "{{ project.clientComments }}"
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-overlay>
    </v-parallax>
    <v-row class="specs">
      <v-col
        xl="6"
        class="d-flex justify-center align-center blue-grey darken-2 white--text"
      >
        <h2 class="display-2 font-weight-thin">PROJECT SPECS</h2>
      </v-col>
      <v-col xl="6" class="d-flex flex-column justify-center ">
        <div>
          <h4>Languages used in project:</h4>
          <v-chip
            v-for="item in project.languages"
            :key="item.i"
            class="ma-2"
            color="grey lighten-3"
            label
          >
            <v-icon :color="item.color" left>{{ item.icon }}</v-icon>
            {{ item.text }}
          </v-chip>
        </div>
        <h4>
          Description: <span class="subtitle-1">{{ project.description }}</span>
        </h4>
        <h4>
          Project Stage: <span class="subtitle-1">{{ project.stage }}</span>
        </h4>
        <div>
          <h4>Project Requirements:</h4>
          <v-list>
            <v-list-item v-for="item in project.requirements" :key="item.i">
              {{ item.text }}
            </v-list-item>
          </v-list>
        </div>
        <v-row>
          <v-col class="d-flex justify-end">
            <v-btn
              color="green lighten-2"
              class="mr-4"
              @click="openTab(project.live)"
              ><v-icon left>mdi-open-in-new</v-icon>View Live Site</v-btn
            >
            <v-btn
              color="grey darken-3 white--text"
              class="mr-4"
              @click="openTab(project.github)"
              ><v-icon left>mdi-github</v-icon>View Repository</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row
      v-for="(image, i) in project.images"
      :key="image.i"
      :class="i % 2 == 0 ? '' : 'd-flex flex-row-reverse'"
    >
      <v-col sm="12" md="6" lg="6" xl="6" class="pa-0 ma-0">
        <center>
          <v-img :src="image.location">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="green"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </center>
      </v-col>
      <v-col
        sm="12"
        md="6"
        lg="6"
        xl="6"
        class="d-flex flex-column justify-center align-center blue-grey darken-2"
      >
        <h2 class="white--text text-wrap px-10 pb-8 font-weight-thin">
          {{ image.title.toUpperCase() }}
        </h2>
        <h3 class="white--text font-weight-light text-wrap px-10">
          {{ image.details }}
        </h3>
      </v-col>
    </v-row>
    <v-snackbar v-model="privateRepo">
      Sorry, this is a private Repository / Site

      <template v-slot:action="{ attrs }">
        <v-btn color="primary" text v-bind="attrs" @click="privateRepo = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import vueHeadful from "vue-headful";
export default {
  name: "Home",
  data: () => ({
    project: null,
    privateRepo: false,
    metaInfo() {
      return {
        title: "Home - Projects",
        meta: [
          {
            name: "description",
            content: `I have experience in multiple languages and platforms. Check it out!`,
          },
          { property: "og:title", content: "Home - Projects" },
          { property: "og:site_name", content: "Home" },
          { property: "og:type", content: "website" },
          { name: "robots", content: "index,follow" },
        ],
      };
    },
  }),
  components: {
    vueHeadful,
  },
  methods: {
    openTab(url) {
      url !== "" ? window.open(url, "_blank") : (this.privateRepo = true);
    },
  },
  created() {
    window.scrollTo(0, 0);
    this.project = this.$store.state.cards.filter(
      (e) => e.title === this.$route.params.id
    )[0];
  },
};
</script>

<style scoped>
::v-deep .v-parallax__image-container img {
  padding-bottom: 15%;
}

.specs {
  height: 100%;
}

.overlayRow {
  width: 80vw;
}

.divider {
  border: 0.25px solid white;
}

.client {
  height: 100%;
  margin-bottom: 110px;
}

.hero {
  height: 100vh !important;
}
</style>
