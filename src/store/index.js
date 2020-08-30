import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
      {
        title: "Lone Peak Client Management",
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
          { icon: "mdi-vuejs", text: "Vue.js", color: "green" },
          { icon: "mdi-vuetify", text: "Vuetify", color: "blue" },
          {
            icon: "mdi-language-javascript",
            text: "JavaScript",
            color: "amber",
          },
          { icon: "mdi-firebase", text: "Firebase", color: "orange" },
          { icon: "mdi-language-css3", text: "CSS", color: "blue" },
        ],
        logo:
          "https://lonepeakvaluation.com/wp-content/uploads/2017/05/LonePeak-Logo-EPS.png",
        images: [
          { location: "http://images.coberapps.com/LonePeak.png" },
          { location: "http://images.coberapps.com/LonePeakMainMenu.png" },
          { location: "http://images.coberapps.com/LonePeakCase.png" },
        ],
        stage: "Near Complete",
        tags: ["Vue.js", "Vuetify", "Firebase", "HTML", "CSS", "JavaScript"],
      },
      {
        title: "North Alpine Photo",
        github: "https://github.com/CobyYates/northalpine",
        type: "Freelance",
        live: "http://northalpinephoto.com/",
        description:
          "A portfolio site for a photographer and drone operator. He needed a way for him to be contacted and show of his work. I offered to do his website for him since he is my brother.",
        requirements: [{ text: "" }],
        languages: [
          { icon: "mdi-vuejs", text: "Vue.js", color: "green" },
          { icon: "mdi-vuetify", text: "Vuetify", color: "blue" },
          {
            icon: "mdi-language-javascript",
            text: "JavaScript",
            color: "amber",
          },
          { icon: "mdi-language-html5", text: "HTML", color: "orange" },
          { icon: "mdi-language-css3", text: "CSS", color: "blue" },
        ],
        logo:
          "https://github.com/CobyYates/northalpine/blob/master/src/assets/logo.jpg?raw=true",
        images: [{ location: "http://images.coberapps.com/NorthAlpine.png" }],
        stage: "In Development",
        tags: ["Vue.js", "Vuetify", "HTML", "CSS", "JavaScript"],
      },
      {
        title: "Good Grindz",
        github: "http://goodgrindz.com",
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
        logo:
          "https://www.goodgrindz.com/wp-content/uploads/2019/03/Good-Grindz-Calendar.png",
        images: [
          { location: "http://images.coberapps.com/GoodGrindz.png" },
          { location: "http://images.coberapps.com/GoodGrindz2.png" },
          { location: "http://images.coberapps.com/GoodGrindz3.png" },
          { location: "http://images.coberapps.com/GoodGrindz4.png" },
          { location: "http://images.coberapps.com/GoodGrindzHomeFull.png" },
          { location: "http://images.coberapps.com/GoodGrindzFull.png" },
        ],
        stage: "In Development",
        tags: ["WordPress"],
      },
      {
        title: "Boka",
        github: "https://github.com/CobyYates/Boka",
        type: "Freelance, Passion Project",
        live: "https://boka-cms.netlify.app/",
        description:
          "A web app for content creators to display their own portfolio as well as gather potential clients. This creates a one stop shop for both clients and creators to meet and communicate.",
        requirements: [
          { text: "Create a CRM for content creators" },
          { text: "Create dashboard for content creators" },
          {
            text:
              "Create a calendar feature so creators can see how busy they are",
          },
          {
            text: "Filterable creators based upon their type of work",
          },
        ],
        languages: [
          { icon: "mdi-vuejs", text: "Vue.js", color: "green" },
          { icon: "mdi-vuetify", text: "Vuetify", color: "blue" },
          { icon: "mdi-firebase", text: "Firebase", color: "orange" },
        ],
        logo:
          "https://github.com/CobyYates/Boka/blob/master/src/assets/logo.png?raw=true",
        images: [
          { location: "http://images.coberapps.com/BokaHome.png" },
          { location: "http://images.coberapps.com/BokaClients.png" },
          { location: "http://images.coberapps.com/BokaToDo.png" },
          { location: "http://images.coberapps.com/BokaHomeFull.png" },
        ],
        stage: "In Development",
        tags: ["Vue.js", "Vuetify", "Firebase", "HTML", "CSS", "JavaScript"],
      },
      {
        title: "Keystroke App",
        github: "https://github.com/jashment/quiz-knows",
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
          { icon: "mdi-vuejs", text: "Vue.js", color: "green" },
          { icon: "mdi-vuetify", text: "Vuetify", color: "blue" },
          { icon: "mdi-firebase", text: "Firebase", color: "orange" },
          { icon: "mdi-language-css3", text: "CSS", color: "blue" },
          {
            icon: "mdi-language-javascript",
            text: "JavaScript",
            color: "amber",
          },
        ],
        logo:
          "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Utah_Valley_University_seal.svg/1200px-Utah_Valley_University_seal.svg.png",
        images: [{ location: "" }, { location: "" }, { location: "" }],
        stage: "Complete",
        tags: ["Vue.js", "Vuetify", "Firebase", "HTML", "CSS", "JavaScript"],
      },
      {
        title: "Pokemon API",
        github: "https://github.com/CobyYates/pokemans",
        type: "College Project",
        live: "https://coby-yates-pokemon.netlify.app/pokemon.html",
        description:
          "For this project, I learned JavaScript for the first time. The project was to fetch data from an API and display it in a card layout.",
        requirements: [
          { text: "Display at least 25 Pokemon from the PokeAPI" },
          { text: "Be able to fetch a single PokeAPI" },
          { text: "Generate a new Pokemon card" },
        ],
        languages: [
          {
            icon: "mdi-language-javascript",
            text: "JavaScript",
            color: "amber",
          },
          { icon: "mdi-language-html5", text: "HTML", color: "blue" },
          { icon: "mdi-language-css3", text: "CSS", color: "orange" },
        ],
        logo:
          "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png",
        images: [
          { location: "http://images.coberapps.com/Pokemon.png" },
          { location: "http://images.coberapps.com/PokemonFilter.png" },
          { location: "http://images.coberapps.com/PokemonFull.png" },
        ],
        stage: "Complete",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Star Wars API",
        github: "https://github.com/CobyYates/PersonalPortfolio",
        type: "College Project",
        live: "https://coby-yates-pokemon.netlify.app/starwars.html",
        description:
          "For this project, I learned JavaScript and fetched data from the Star Wars API. I utilized JavaScript ES6 to help with filtering the incoming data.",
        requirements: [
          { text: "Create a card layout for representing the incoming data" },
          { text: "Generate list of all the movies from Star Wars" },
          { text: "Be able to filter Male/Female characters using ES6 syntax" },
          { text: "Include navigation" },
        ],
        languages: [
          {
            icon: "mdi-language-javascript",
            text: "JavaScript",
            color: "amber",
          },
          { icon: "mdi-language-html5", text: "HTML", color: "orange" },
          { icon: "mdi-language-css3", text: "CSS", color: "blue" },
        ],
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png",
        images: [
          { location: "http://images.coberapps.com/StarWarsPeople.png" },
          { location: "http://images.coberapps.com/StarWarsFilmsFull.png" },
        ],
        stage: "Complete",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Car Garage",
        github: "https://github.com/CobyYates/Dealership-Frontend",
        type: "College Project",
        live: "https://car-garage.netlify.app/",
        description:
          "This project was over one semester where we learned Vue.js. I learned how to do state management to allow the user to create a dream garage. I had a lot of fun with this project.",
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
          { icon: "mdi-vuejs", text: "Vue.js", color: "green" },
          { icon: "mdi-vuetify", text: "Vuetify", color: "blue" },
          {
            icon: "mdi-language-javascript",
            text: "JavaScript",
            color: "amber",
          },
          { icon: "mdi-language-html5", text: "HTML", color: "orange" },
          { icon: "mdi-language-css3", text: "CSS", color: "blue" },
        ],
        logo: "http://images.coberapps.com/GarageCarsOpen.png",
        images: [
          { location: "http://images.coberapps.com/Garage.png" },
          { location: "http://images.coberapps.com/GarageCarsOpen.png" },
          { location: "http://images.coberapps.com/GarageCarsFull.png" },
        ],
        stage: "Complete",
        tags: ["Vue.js", "Vuetify", "HTML", "CSS", "JavaScript"],
      },
      {
        title: "Car Garage version 2",
        github: "https://github.com/CobyYates/Dealership-RESTful-API",
        type: "College Project",
        live: "https://coby-restful-and-graph-apis.netlify.app/",
        description:
          "This project was over one semester where we learned some GraphQL and MongoDB. We had to create an API hosted on MongoDB, and a GraqhQL backend.",
        requirements: [
          { text: "Encapsulate code as VueJS single-file components" },
          { text: "Communicate between components using props & local store" },
          { text: "Create my own API built and deployed to MongoDB" },
          { text: "Connect my own API using Axios" },
          { text: "Build and work with CRUD within the GraphQL backend" },
        ],
        languages: [
          { icon: "mdi-vuejs", text: "Vue.js", color: "green" },
          { icon: "mdi-vuetify", text: "Vuetify", color: "blue" },
          {
            icon: "mdi-language-javascript",
            text: "JavaScript",
            color: "amber",
          },
          { icon: "mdi-language-html5", text: "HTML", color: "orange" },
          { icon: "mdi-language-css3", text: "CSS", color: "blue" },
          { icon: "mdi-graphql", text: "GraphQL", color: "pink" },
          { icon: "mdi-database", text: "MongoDB", color: "green" },
        ],
        logo: "http://images.coberapps.com/GarageCarsOpen.png",
        images: [{ location: "" }, { location: "" }, { location: "" }],
        stage: "Complete",
        warning:
          "This project requires GraphQL to run locally. Information can be found in the GitHub repository",
        tags: [
          "Vue.js",
          "Vuetify",
          "HTML",
          "CSS",
          "JavaScript",
          "MongoDB",
          "GraphQL",
        ],
      },
      {
        title: "Weather APP",
        github: "https://github.com/CobyYates/React_Weather_App",
        type: "College Project",
        live: "https://cobers-react-weather-app.netlify.app/",
        description:
          "This is a project we had to complete in under a week. I learned as much React as I could in that amount of time and made what you see here.",
        requirements: [
          { text: "Fetch data from a weather API" },
          { text: "Display 1 week of weather" },
          { text: "Ability to switch between C° and F°" },
          { text: "Search weather by zipcode provided by user" },
        ],
        languages: [
          { icon: "mdi-react", text: "React", color: "blue" },
          { icon: "mdi-material-ui", text: "Material UI", color: "blue" },
          {
            icon: "mdi-language-javascript",
            text: "JavaScript",
            color: "amber",
          },
          { icon: "mdi-language-html5", text: "HTML", color: "orange" },
          { icon: "mdi-language-css3", text: "CSS", color: "blue" },
        ],
        logo: "http://images.coberapps.com/Weather.png",
        images: [{ location: "http://images.coberapps.com/Weather.png" }],
        stage: "Complete",
        tags: ["React", "Material UI", "HTML", "CSS", "JavaScript"],
      },
      {
        title: "Pomodoro",
        github: "https://github.com/CobyYates/Pomodoro_App",
        type: "College Project",
        live: "https://coby-yates-pomodoro-app.netlify.app/",
        description:
          "This was a college project where we had to design and make a Pomodoro app. We were able to choose any JavaScript Framework to build it on. I chose to do Vue.js because I was most familar with it and felt I could make it better with a smaller learning curve.",
        requirements: [
          { text: "Ability to add and remove tasks" },
          { text: "Select a task and start a Pomodoro timer" },
          { text: "Ability to pause/reset timer" },
          {
            text:
              "Display how many Pomodoros have been completed for a selected task",
          },
          {
            text:
              "Take a 5 minute break after a Pomodoro, 20 minute break after 4 Pomodoro's",
          },
          {
            text: "Display total Pomodoros completed",
          },
        ],
        languages: [
          { icon: "mdi-vuejs", text: "Vue.js", color: "blue" },
          { icon: "mdi-vuetify", text: "Vuetify", color: "blue" },
          {
            icon: "mdi-language-javascript",
            text: "JavaScript",
            color: "blue",
          },
          { icon: "mdi-language-css3", text: "CSS", color: "blue" },
        ],
        logo: "http://images.coberapps.com/Pomodoro.png",
        images: [{ location: "http://images.coberapps.com/Pomodoro.png" }],
        stage: "Complete",
        tags: ["Vue.js", "Vuetify", "CSS", "JavaScript"],
      },
      {
        title: "Final Score",
        github: "https://github.com/CobyYates/Final-Score",
        type: "College Group Project",
        live: "https://final-score.netlify.app/",
        description:
          "For a group assignment in college, we had to create some type of web app that fullfilled requirements provided. We chose to build a web app where users can save their board game scores and refer to them later on. I built the Yahtzee page and helped a few of the other group members with their code as well. I also taught a fellow student Vue.js so she could complete her portion of the project.",
        requirements: [{ text: "" }, { text: "" }, { text: "" }],
        languages: [
          { icon: "mdi-vuejs", text: "Vue.js", color: "green" },
          { icon: "mdi-vuetify", text: "Vuetify", color: "blue" },
          { icon: "mdi-firebase", text: "Firebase", color: "orange" },
          {
            icon: "mdi-language-javascript",
            text: "JavaScript",
            color: "amber",
          },
          { icon: "mdi-language-html5", text: "HTML", color: "orange" },
          { icon: "mdi-language-css3", text: "CSS", color: "blue" },
        ],
        logo: "http://images.coberapps.com/FinalScoreYahtzee.png",
        images: [
          { location: "http://images.coberapps.com/FinalScoreHome.png" },
          { location: "http://images.coberapps.com/FinalScoreYahtzee.png" },
        ],
        stage: "Complete",
        tags: ["Vue.js", "Vuetify", "Firebase", "HTML", "CSS", "JavaScript"],
      },
      {
        title: "Next.js Pokemon",
        github: "https://github.com/CobyYates/pokemon_api_Next.js",
        type: "College Project",
        live: "https://pokemon-api-next-js.now.sh/",
        description:
          "I built a website using Next.js to fetch and display some data from the Pokemon API. This was my first introduction to Next.js and this project was given a 1 week deadline. That included learning Next.js and building the site.",
        requirements: [
          { text: "Learn Next.js and build site in 1 week" },
          { text: "Fetch data from the PokeAPI" },
          { text: "Be able to display a random Pokemon" },
          { text: "Search for a Pokemon by ID" },
        ],
        languages: [
          { icon: "mdi-react", text: "React", color: "blue" },
          { icon: "mdi-react", text: "Next.js", color: "blue" },
          {
            icon: "mdi-language-javascript",
            text: "JavaScript",
            color: "amber",
          },
          { icon: "mdi-language-html5", text: "HTML", color: "orange" },
        ],
        logo: "http://images.coberapps.com/Nextjs2.png",
        images: [
          { location: "http://images.coberapps.com/Nextjs.png" },
          { location: "http://images.coberapps.com/Nextjs2.png" },
        ],
        stage: "",
        tags: ["Next.js", "HTML", "CSS", "JavaScript", "React"],
      },
      // {
      //   title: "",
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
      //     { icon: "mdi-vuejs", text: "Vue.js", color: "green" },
      //     { icon: "mdi-vuetify", text: "Vuetify", color: "blue" },
      //     { icon: "mdi-firebase", text: "Firebase", color: "green" },
      //     { icon: "mdi-language-javascript", text: "JavaScript", color: "amber" },
      //     { icon: "mdi-language-html5", text: "HTML", color: "orange" },
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
  },
  mutations: {},
  actions: {},
  modules: {},
});
