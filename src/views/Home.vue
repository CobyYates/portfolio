<template>
  <div class="home">
    <div class="hero d-flex flex-column justify-center align-center">
      <v-avatar size="200px" class="mx-auto" tile>
        <v-img src="https://i.imgur.com/a8JzMHo.png" />
      </v-avatar>
      <div class="text-center white--text aboutMe mt-12">
        <h1 class="font-weight-medium">Developer, designer & ideator</h1>
        <h2>I design and develop great looking websites. Learning is my passion.</h2>
      </div>
    </div>
    <v-row>
      <v-col>
        <Work class="work" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <About class="about" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/AboutMe";
import Work from "@/components/Work";
export default {
  name: "Home",
  components: {
    About,
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
