<template>
  <v-container fluid>
    <v-row class="experience grey lighten-3 mt-6 pb-8">
      <v-col>
        <v-row>
          <v-col>
            <h2 class="text-center font-weight-light green--text">EDUCATION</h2>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="8" md="6" lg="4" xl="3">
            <v-card class="d-flex align-center justify-center" height="200">
              <div>
                <v-img
                  src="https://3spuee11v0d8viaql2zwgx44-wpengine.netdna-ssl.com/wp-content/uploads/2015/01/FULL_sloganPF.png"
                  width="150"
                />
              </div>
              <div>
                <v-card-title class="uvu">Wood River High School</v-card-title>
                <v-card-subtitle class="title"
                  >High School Graduate</v-card-subtitle
                >
              </div>
            </v-card>
          </v-col>
          <v-col cols="8" md="6" lg="4" xl="3">
            <v-card class="d-flex align-center justify-center" height="200">
              <div>
                <v-img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Utah_Valley_University_seal.svg/1200px-Utah_Valley_University_seal.svg.png"
                  width="150"
                />
              </div>
              <div>
                <v-card-title class="uvu">Utah Valley University</v-card-title>
                <v-card-subtitle class="title"
                  >Bachelors Degree</v-card-subtitle
                >
                <v-card-text>
                  GPA: 3.47
                </v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.uvu {
  color: #275d38;
}
</style>
