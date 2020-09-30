<template>
  <div class="home">
    <div class="hero d-flex flex-column justify-center align-center">
      <v-avatar size="200px" class="mx-auto">
        <v-img src="https://avatars1.githubusercontent.com/u/27262239?s=460&v=4" />
      </v-avatar>
      <div class="text-center white--text aboutMe mt-12">
        <h1 class="font-weight-medium">Front-End Developer, Ideator</h1>
        <h2></h2>
      </div>
    </div>
    <v-row>
      <v-col>
        <h2>My Projects</h2>
        <Work ref="work" class="work" />
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col>
        <About class="about" />
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import About from "@/components/AboutMe";
import Work from "@/components/Work";
export default {
  name: "Home",
  components: {
    // About,
    Work,
  },
};
</script>

<style scoped>
.hero {
  background-color: #262e37;
  height: 80vh;
  margin: 0;
}

.hero:before {
  content: "";
  position: absolute;
  top: 80vh;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: #262e37;
  transform: skew(-83deg);
  transform-origin: top;
}

.aboutMe {
  width: 40%;
}

.about {
  width: 75%;
  margin-top: -120px;
}

.work {
  /* height: 100vh; */
}

</style>
