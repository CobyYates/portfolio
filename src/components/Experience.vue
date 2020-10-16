<template>
  <v-container fluid class="py-10">
      <v-row >
        <v-col>
        <h2 class="text-center font-weight-light green--text">WORK EXPERIENCE</h2>
        </v-col>
    </v-row>
      <v-row class="justify-center flex-xl-wrap">
          <v-col
                v-for="item in $store.state.work"
                :key="item.i"
                cols="12"
                sm="8"
                md="6"
                lg="4"
                xl="3"
            >
              <v-card
                height="200"
                class="d-flex align-center justify-center"
              >
              <div class="d-flex align-center pl-4">
                  <v-img :src="`${item.logo}`" width="130" />
              </div>
              <div>
                <v-card-title class="green--text">{{item.company}}</v-card-title>
                <v-card-subtitle>{{item.position}} | <span class="font-weight-bold">{{item.start}} - {{item.end}}</span></v-card-subtitle>
                <v-card-text>
                    <p>{{item.location}}</p>
                </v-card-text>
              </div>
              </v-card>
          </v-col>
          <v-col sm=""
                md=""
                lg=""
                xl="3">
              <v-card  height="200" class="d-flex flex-column justify-center align-center">
                  <p class="title">Want More History?</p>
                  <v-btn color="blue" @click="openLink()" text outlined><v-icon color="blue" left>mdi-linkedin</v-icon>LinkedIn Profile</v-btn>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    methods: {
        openLink(){
            window.open('https://www.linkedin.com/in/coby-yates');
        },
    }
}
</script>

<style scoped>

</style>