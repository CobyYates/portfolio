<template>
  <v-container fluid>
    <v-sheet
      class="mx-auto"
      max-width="95%"
      color="transparent"
    >
    <v-expand-transition class="lang">
      <v-sheet
        v-if="model != null"
        color="transparent"
        height="25"
        class="mb-6"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <h2 class="white--text font-weight-light">{{languages[model].lang}}</h2>
        </v-row>
      </v-sheet>
    </v-expand-transition>
    <v-divider dark class="mb-3" v-show="model !== null" />
      <v-slide-group dark center-active show-arrows mandatory v-model="model">
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
              @click.native="filterProjects(n)"
            >
              {{n.url}}
            </v-icon>
          </v-btn>
        </v-slide-item>
      </v-slide-group>  
    </v-sheet>

    <v-row class="mx-auto justify-center work">
      <v-col
        v-for="project in projects"
        :key="project.i"
        class="d-flex justify-center mx-0 px-0"
      >
        <v-card
          height="300"
          width="300"
          elevation="10"
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
      all: 'all',
      projects: [],
      // projects: ['HTML','CSS','JavaScript','Vue.js','Vuetify','GraphQL','React','WordPress','Firebase','Next.js','Node'],
      cards: [
        {
          title: "Keystroke App",
          subTitle: "UVU Cinema Keystroke App",
          github: "",
          type: "College Capstone",
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
            { icon: "mdi-firebase", text: "Node.js", color: "green" },
          ],
          logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Utah_Valley_University_seal.svg/1200px-Utah_Valley_University_seal.svg.png',
          images: [
            { location: '' },
            { location: '' },
            { location: '' },
          ],
          stage: 'Complete',
          tags: ['Vue.js','Vuetify','Firebase','HTML','CSS','JavaScript']
        },
        {
          title: "Good Grindz",
          subTitle: "Food Truck Website",
          github: "",
          type: "Freelance",
          live: "http://goodgrindz.com",
          description: "Shows details about their business",
          requirements: [
            { text: "Add a menu page so customers can see what they make" },
            { text: "Show their business locations" },
            { text: "Add their social media feeds" },
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
          stage: 'In Development',
          tags: ['WordPress']
        },
        {
          title: "Boka",
          subTitle: "Content Creator Finder",
          github: "https://github.com/CobyYates/Boka",
          type: "Freelance, Passion Project",          
          live: "http://goodgrindz.com",
          description: "",
          requirements: [
            { text: "Create a CRM for content creators" },
            { text: "Create dashboard for content creators" },
          ],
          languages: [
            { icon: "mdi-vuejs", text: "Vue.js", color: "blue" },
            { icon: "mdi-vuetify", text: "Vuetify", color: "blue" },
            { icon: "mdi-firebase", text: "Node.js", color: "green" },
          ],
          logo: 'https://github.com/CobyYates/Boka/blob/master/src/assets/logo.png?raw=true',
          images: [
            { location: '' },
            { location: '' },
            { location: '' },
          ],
          stage: 'In Development',
          tags: ['Vue.js','Vuetify','Firebase','HTML','CSS','JavaScript']
        },
        {
          title: "Lone Peak Client Management",
          subTitle: "Client Management Web Application",
          github: "",
          type: "Freelance",
          live: "http://cms.lonepeakvaluation.com",
          description: "A web app for keeping track of their clients and cases",
          requirements: [
            { text: "Create a web application to live on a subdomain" },
            { text: "Use PHP endpoints to get data from MySQL backend" },
            { text: "Convert a Microsoft Access app into web application" },
            { text: "Include authentication for each employee" },
            { text: "Install SSL to secure the site" },
          ],
          languages: [
            { icon: "mdi-vuejs", text: "Vue.js", color: "blue" },
            { icon: "mdi-vuetify", text: "Vuetify", color: "blue" },
            { icon: "mdi-language-javascript", text: "JavaScript", color: "blue" },
            { icon: "mdi-firebase", text: "Node.js", color: "green" },
          ],
          logo: 'https://lonepeakvaluation.com/wp-content/uploads/2017/05/LonePeak-Logo-EPS.png',
          images: [
            { location: '' },
            { location: '' },
            { location: '' },
          ],
          stage: 'Near Complete',
          tags: ['Vue.js','Vuetify','Firebase','HTML','CSS','JavaScript']
        },
        {
          title: "Pokemon API",
          subTitle: "Pokemon API Project",
          github: "",
          type: "College Project",
          live: "",
          description: "For this project, I learned JavaScript for the first time. The project was to fetch data from an API and display it in a card layout.",
          requirements: [
            { text: "Display at least 25 Pokemon from the PokeAPI" },
            { text: "Be able to fetch a single PokeAPI" },
            { text: "Generate a new Pokemon card" },
          ],
          languages: [
            { icon: "mdi-language-javascript", text: "JavaScript", color: "blue" },
            { icon: "mdi-language-html5", text: "HTML", color: "blue" },
            { icon: "mdi-language-css3", text: "CSS", color: "blue" },
          ],
          logo: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
          images: [
            { location: '' },
            { location: '' },
            { location: '' },
          ],
          stage: 'Complete',
          tags: ['HTML','CSS','JavaScript']
        },
        {
          title: "Star Wars API",
          subTitle: "Project for fetching data form Star Wars API",
          github: "",
          type: "College Project",
          live: "",
          description: "For this project, I learned JavaScript and fetched data from the Star Wars API. I utilized JavaScript ES6 to help with filtering the incoming data.",
          requirements: [
            { text: "Create a card layout for representing the incoming data" },
            { text: "Generate list of all the movies from Star Wars" },
            { text: "Be able to filter Male/Female characters using ES6 syntax" },
            { text: "Include navigation" },
          ],
          languages: [
            { icon: "mdi-language-javascript", text: "JavaScript", color: "blue" },
            { icon: "mdi-language-html5", text: "HTML", color: "blue" },
            { icon: "mdi-language-css3", text: "CSS", color: "blue" },
          ],
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png',
          images: [
            { location: '' },
            { location: '' },
            { location: '' },
          ],
          stage: '',
          tags: ['HTML','CSS','JavaScript']
        },
        {
          title: "Car Garage",
          subTitle: "Vue.js website for building a dream car garage",
          github: "",
          type: "College Project",
          live: "",
          description: "This project was over one semester where we learned Vue.js. I learned how to do state management to allow the user to create a dream garage. I had a lot of fun with this project.",
          requirements: [
            { text: "Encapsulate code as VueJS single-file components" },
            { text: "Communicate between components using props & local store" },
            { text: "Create user form with validation and feedback" },
            { text: "Create a custom directive" },
            { text: "Use animations and transitions" },
            { text: "Connect to an API using Axios" },
            { text: "Manage your application's state using vuex" },
          ],
          languages: [
            { icon: "mdi-vuejs", text: "Vue.js", color: "blue" },
            { icon: "mdi-vuetify", text: "Vuetify", color: "blue" },
            { icon: "mdi-language-javascript", text: "JavaScript", color: "blue" },
            { icon: "mdi-language-html5", text: "HTML", color: "blue" },
            { icon: "mdi-language-css3", text: "CSS", color: "blue" },
          ],
          logo: '',
          images: [
            { location: '' },
            { location: '' },
            { location: '' },
          ],
          stage: 'Complete',
          tags: ['Vue.js','Vuetify','HTML','CSS','JavaScript']
        },
        {
          title: "Car Garage version 2",
          subTitle: "Vue.js website for building a dream car garage utilizing GraphQL & MongoDB",
          github: "",
          type: "College Project",
          live: "",
          description: "This project was over one semester where we learned some GraphQL and MongoDB. We had to create an API hosted on MongoDB, and a GraqhQL backend.",
          requirements: [
            { text: "Encapsulate code as VueJS single-file components" },
            { text: "Communicate between components using props & local store" },
            { text: "Create my own API built and deployed to MongoDB" },
            { text: "Connect my own API using Axios" },
            { text: "Build and work with CRUD within the GraphQL backend" },
          ],
          languages: [
            { icon: "mdi-vuejs", text: "Vue.js", color: "blue" },
            { icon: "mdi-vuetify", text: "Vuetify", color: "blue" },
            { icon: "mdi-language-javascript", text: "JavaScript", color: "blue" },
            { icon: "mdi-language-html5", text: "HTML", color: "blue" },
            { icon: "mdi-language-css3", text: "CSS", color: "blue" },
            { icon: "mdi-language-graphql", text: "GraphQL", color: "Pink" },
            { icon: "mdi-database", text: "MongoDB", color: "Green" },
          ],
          logo: '',
          images: [
            { location: '' },
            { location: '' },
            { location: '' },
          ],
          stage: 'Complete',
          warning: 'This project requires GraphQL to run locally. Information can be found in the GitHub repository',
          tags: ['Vue.js','Vuetify','HTML','CSS','JavaScript','MongoDB','GraphQL']
        },
        {
          title: "Weather APP",
          subTitle: "Weather APP built in React",
          github: "",
          type: "College Project",
          live: "",
          description: "This is a project we had to complete in under a week. I learned as much React as I could in that amount of time and made what you see here.",
          requirements: [
            { text: "Fetch data from a weather API" },
            { text: "Display 1 week of weather" },
            { text: "Ability to switch between C° and F°" },
            { text: "Search weather by zipcode provided by user" },
          ],
          languages: [
            { icon: "mdi-react", text: "React", color: "blue" },
            { icon: "mdi-material-ui", text: "Material UI", color: "blue" },
            { icon: "mdi-language-javascript", text: "JavaScript", color: "blue" },
            { icon: "mdi-language-html5", text: "HTML", color: "blue" },
            { icon: "mdi-language-css3", text: "CSS", color: "blue" },
          ],
          logo: '',
          images: [
            { location: '' },
            { location: '' },
            { location: '' },
          ],
          stage: '',
          tags: ['Vue.js','Vuetify','Firebase','HTML','CSS','JavaScript']
        },
        // {
        //   title: "",
        //   subTitle: "",
        //   github: "",
        //   type: "",
        //   live: "",
        //   description: "",
        //   requirements: [
        //     { text: "" },
        //     { text: "" },
        //     { text: "" },
        //   ],
        //   languages: [
        //     { icon: "mdi-vuejs", text: "Vue.js", color: "blue" },
        //     { icon: "mdi-vuetify", text: "Vuetify", color: "blue" },
        //     { icon: "mdi-firebase", text: "Node.js", color: "green" },
        //     { icon: "mdi-language-javascript", text: "JavaScript", color: "blue" },
        //     { icon: "mdi-language-html5", text: "HTML", color: "blue" },
        //     { icon: "mdi-language-css3", text: "CSS", color: "blue" },
        //   ],
        //   logo: '',
        //   images: [
        //     { location: '' },
        //     { location: '' },
        //     { location: '' },
        //   ],
        //   stage: '',
        //   tags: ['Vue.js','Vuetify','Firebase','HTML','CSS','JavaScript']
        // },
      ],
      languages: [
        { lang: 'HTML', url: 'mdi-language-html5', color: 'orange' },
        { lang: 'CSS', url: 'mdi-language-css3', color: 'blue' },
        { lang: 'JavaScript', url: 'mdi-language-javascript', color: 'yellow' },
        { lang: 'Vue.js', url: 'mdi-vuejs', color: 'green' },
        { lang: 'Vuetify', url: 'mdi-vuetify', color: 'blue' },
        { lang: 'GraphQL', url: 'mdi-graphql', color: 'pink' },
        { lang: 'MongoDB', url: 'mdi-database', color: 'green' },
        { lang: 'React', url: 'mdi-react', color: 'blue' },
        { lang: 'Material UI', url: 'mdi-material-ui', color: 'blue' },
        { lang: 'WordPress', url: 'mdi-wordpress', color: 'blue' },
        { lang: 'Firebase', url: 'mdi-firebase', color: 'orange' },
        { lang: 'Next.js', url: 'mdi-react', color: 'blue' },
        { lang: 'Node', url: 'mdi-nodejs', color: 'green' },
      ]
    }
  },
  methods: {
    filterProjects(lang) {
      this.projects = this.cards.filter(e => e.tags.includes(`${lang.lang}`))
    },
  },
  mounted() {
    this.projects = this.cards
  }
};
</script>

<style scoped>
.tool {
  margin-top: 125px;
}

.opac {
  opacity: .4;
}

.work {
  width: 85%;
}

::v-deep .lang {
  z-index: 99;
}
</style>
