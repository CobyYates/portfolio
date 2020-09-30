<template>
  <v-container class="pa-0" fluid>
    <vueHeadful :title="`Coby Yates | ${project.title}`" />
    <v-parallax class="mt-0" :src="`${project.hero}`" height="650">
      <v-overlay :absolute="true" :opacity="0.5" :value="true">
        <v-row class="overlayRow pb-12">
          <v-col cols="6" class="mx-auto">
            <h1 class="font-weight-normal">{{ project.title }}</h1>
            <h2 class="font-weight-light">
              Client: {{ project.clientInfo[0].company }}
            </h2>
          </v-col>
        </v-row>
        <v-row v-if="project.clientComments !== ''">
          <v-col>
            <v-row class="align-center">
              <v-col cols="1 ml-auto">
                <v-avatar
                  v-if="project.clientInfo[0].image !== null"
                  size="120"
                  tile
                >
                  <v-img :src="`${project.clientInfo[0].image}`" />
                </v-avatar>
                <p>{{ project.clientInfo[0].position }} at
                {{ project.clientInfo[0].company }}</p>
              </v-col>
              <v-col cols="9" class="mr-auto"> "{{ project.clientComments }}" </v-col>
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
      <v-col xl="6" class="d-flex flex-column justify-center pl-12">
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
      <v-col xl="6" class="pa-0 ma-0">
        <center>
          <v-img :src="image.location" />
        </center>
      </v-col>
      <v-col
        xl="6"
        class="d-flex flex-column justify-center align-center blue-grey darken-2"
      >
        <h2 class="white--text text-wrap px-10 pb-8 font-weight-thin">{{ image.title.toUpperCase() }}</h2>
        <h3 class="white--text font-weight-light text-wrap px-10">
          {{ image.details }}
        </h3>
      </v-col>
    </v-row>
    <v-snackbar v-model="privateRepo">
      Sorry, this is a private Repository

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
  }),
  components: {
    vueHeadful,
  },
  methods: {
    openTab(url) {
      url !== "" ? window.open(url, "_blank") : (this.privateRepo = true);
    },
  },
  mounted() {
    window.scrollTo(0, 0)
    this.project = this.$store.state.cards.filter(
      (e) => e.title === this.$route.params.id
    )[0];
  },
};
</script>

<style scoped>
::v-deep .v-parallax__image-container img {
  padding-bottom: 115px;
}

.specs {
  height: 100%;
}

.overlayRow {
  width: 70vw;
}

.divider {
  border: 0.25px solid white;
}
</style>
