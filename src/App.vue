<template>
  <v-app id="inspire">
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
      <v-btn color="green darken-1" text to="/work">All Work</v-btn>
      <v-btn color="green darken-1" text to="/recommendations">Recommendations</v-btn>
      <v-btn color="green darken-1" text @click="openPDF()">Resume<v-icon right>mdi-download</v-icon></v-btn>
    </v-app-bar>
    
    <v-main class="content">
      <v-container fluid class="py-0 px-0">
        <router-view></router-view>
      </v-container>
    </v-main>
    
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      publicPath: process.env.BASE_URL,
    }),
    methods: {
      openPDF() {
        window.open('http://coberapps.com/img/Resume--Coby Yates.pdf');
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