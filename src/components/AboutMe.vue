<template>
  <v-container fluid class="px-0">
    <v-parallax
    height="300"
    class="mx-0"
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    >
        <v-row
            align="center"
            justify="center"
        >
        <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4">About Me</h1>
            <h4 class="subheading"></h4>
        </v-col>
        </v-row>
    </v-parallax>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
.card {
    width: 100%;
}
</style>