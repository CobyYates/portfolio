<template>
  <v-app id="inspire">

    <v-app-bar
      app
      dense
      dark
      class="d-flex justify-space-around bar"
    >
    <span>
      <v-avatar
        size="36px"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-avatar>
    </span>
    <span>
      <v-btn text>Home</v-btn>
      <v-btn text>Work</v-btn>
      <v-btn text><v-icon left>mdi-import</v-icon>Resume</v-btn>
    </span>
    </v-app-bar>
    
    <v-main class="content">
      <v-container fluid class="py-0 px-0">
        <router-view></router-view>
      </v-container>
    </v-main>
    
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }} | COBY YATES</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>

<style scoped>
.bar {
  opacity: .6;
}
.content {
  margin-top: -50px;
}
</style>