<template>
  <v-container fluid>
    <h2 class="text-center font-weight-light green--text">MY PROJECTS</h2>
    <v-row>
      <v-col xl="3" v-for="(item, i) in $store.state.cards" :key="item.i">
        <v-card
          height="650"
          tile
          class="mx-auto my-12"
          max-width="374"
          v-show="i < 4"
        >
          <v-img height="250" class="mx-4" :src="item.logo" contain></v-img>
          <v-card-title>{{ item.title }}</v-card-title>

          <v-card-text class="d-flex flex-column justify-space-between">
            <div class="my-4 subtitle-1">
              Client: {{ item.clientInfo[0].company }}
            </div>

            <div>
              {{ item.description }}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Languages</v-card-title>

          <v-card-text>
            <v-chip class="mx-1" v-for="chip in item.languages" :key="chip.i">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-on="on" v-bind="attrs" :color="chip.color">{{
                    chip.icon
                  }}</v-icon>
                </template>
                <span>{{ chip.text }}</span>
              </v-tooltip>
            </v-chip>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="green" text @click="openProject(item)">
              See Project
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    openProject(project) {
      this.$router.push(`/projects/${project.title}`);
    },
  },
};
</script>

<style></style>
