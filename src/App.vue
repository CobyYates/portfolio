<template>
  <v-app id="inspire">
    <vueHeadful :title="'Coby Yates | Portfolio'" />

    <v-app-bar
      app
      dense
      dark
      class="bar"
    >
      <v-avatar
        size="36px"
        tile
        @click="goHome()"
        class="logo"
      >
        <v-img src="https://i.imgur.com/a8JzMHo.png" />
      </v-avatar>
      <!-- <p class="my-auto pl-3 title font-weight-light">Coby Yates</p> -->
    <v-spacer />
      <!-- <v-btn text>Home</v-btn> -->
      <v-btn text @click="openPDF()">Resume<v-icon right>mdi-download</v-icon></v-btn>
    </v-app-bar>
    
    <v-main class="content">
      <v-container fluid class="py-0 px-0">
        <router-view></router-view>
      </v-container>
    </v-main>
    
  </v-app>
</template>

<script>
import vueHeadful from "vue-headful";
  export default {
    props: {
      source: String,
    },
    components: {
      vueHeadful
    },
    data: () => ({
      drawer: null,
      publicPath: process.env.BASE_URL,
    }),
    methods: {
      openPDF() {
        window.open('http://coberapps.com/img/Resume-Coby Yates.pdf');
      },
      goHome(){
        this.$router.replace('/')
      }
    }
  }
</script>

<style scoped>
.bar {
  opacity: .6;
}
.content {
  margin-top: -50px;
}
.logo {
  cursor: pointer;
}
</style>