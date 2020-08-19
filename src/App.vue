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
      >
        <v-img src="https://i.imgur.com/a8JzMHo.png" />
      </v-avatar>
    <v-spacer />
      <v-btn text>Home</v-btn>
      <v-btn text>Work</v-btn>
      <v-btn text>Resume<v-icon right>mdi-download</v-icon></v-btn>
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