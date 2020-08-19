<template>
  <v-container fluid>
    <v-sheet
      class="mx-auto"
      max-width="95%"
      color="transparent"
    >
      <v-slide-group center-active show-arrows>
        <v-slide-item
          v-for="n in languages"
          :key="n.i"
          v-slot:default="{ active, toggle }"
        >
          <v-btn
            class="mx-12 py-6"
            height="120"
            width="120"
            icon
          >
            <v-icon
              size="120"
              :input-value="active"
              :class="active && `${n.color}--text` || `${n.color}--text opac`"
              @click="toggle"
            >
              {{n.url}}
            </v-icon>
          </v-btn>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>

    <v-row>
      <v-col
        v-for="project in cards"
        :key="project.i"  
      >
        <v-card
          height="300"
          width="300"
          class="pa-10 ma-8"
        >
          <v-img :src="`${project.logo}`"></v-img>
        </v-card>
      </v-col>
    </v-row>
           
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      model: null,
      cards: [
        {
          title: "Keystroke App",
          subTitle: "UVU Cinema Keystroke App",
          github: "",
          live: "",
          description: "Senior Capstone project for UVU Cinema Dept",
          requirements: [
            { text: "Create testing platform for staff and students" },
            { text: "Allow teachers to create their own quizzes" },
            { text: "Record students keystrokes using JavaScript" },
            { text: "Record data in a database" },
            { text: "Allow teachers to create their own quizzes" },
          ],
          languages: [
            { icon: "mdi-vuejs", text: "Vue.js", color: "blue" },
            { icon: "mdi-vuetify", text: "Vuetify", color: "blue" },
            { icon: "mdi-nodejs", text: "Node.js", color: "green" },
          ],
          logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Utah_Valley_University_seal.svg/1200px-Utah_Valley_University_seal.svg.png',
          images: [
            { location: '' },
            { location: '' },
            { location: '' },
          ],
          tags: ['vue','vuetify','firebase']
        },
        {
          title: "Good Grindz",
          subTitle: "Food Truck Website",
          github: "",
          live: "http://goodgrindz.com",
          description: "Shows details about their business",
          requirements: [
            { text: "Add a menu page so customers can see what they make" },
            { text: "" },
            { text: "" },
            { text: "" },
            { text: "" },
          ],
          languages: [
            { icon: "mdi-wordpress", text: "WordPress", color: "blue" },
          ],
          logo: 'https://www.goodgrindz.com/wp-content/uploads/2019/03/Good-Grindz-Calendar.png',
          images: [
            { location: '' },
            { location: '' },
            { location: '' },
          ],
          tags: ['wordpress']
        },
      ],
      languages: [
        { lang: 'HTML', url: 'mdi-language-html5', filter: 'html', color: 'orange' },
        { lang: 'CSS', url: 'mdi-language-css3', filter: 'css', color: 'blue' },
        { lang: 'JavaScript', url: 'mdi-language-javascript', filter: 'javascript', color: 'yellow' },
        { lang: 'Vue.js', url: 'mdi-vuejs', filter: 'vue', color: 'green' },
        { lang: 'Vuetify', url: 'mdi-vuetify', filter: 'vuetify', color: 'blue' },
        { lang: 'GraphQL', url: 'mdi-graphql', filter: '', color: 'pink' },
        { lang: 'React', url: 'mdi-react', filter: 'react', color: 'blue' },
        { lang: 'WordPress', url: 'mdi-wordpress', filter: '', color: 'blue' },
        { lang: 'Firebase', url: 'mdi-firebase', filter: '', color: 'orange' },
        { lang: 'Next.js', url: 'mdi-react', filter: '', color: '' },
        { lang: 'Node', url: 'mdi-nodejs', filter: 'node', color: 'green' },
        { lang: '', url: 'mdi-vuejs', filter: '', color: '' },
      ]
    }
  },
};
</script>

<style scoped>
.tool {
  margin-top: 125px;
}

.opac {
  opacity: .4;
}
</style>
