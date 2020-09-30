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
        hero:
          "https://images.pexels.com/photos/3759098/pexels-photo-3759098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        images: [
          {
            location: "http://images.coberapps.com/LonePeak.png",
            title: "Login",
            details:
              "The Login Screen for the application. For authentication, I chose to utilize Firebase. I also used a library called idle-vue in order to automatically logout the user after 1 hour of inactivity.",
          },
          {
            location: "http://images.coberapps.com/Lone_Peak_Case.png",
            title: "Case Management",
            details:
              "This page is for details for each case/client project. On one side there are details pertaining to the case/project itself, and the other side has case tasks and a Richtext editor for the case notes. They also needed to set dates and add those important dates to their outlook calendars. Since they typically don't use Microsoft Edge, I add the dates by downloading the information they need into a custom .ics file which, when opened, opens right into a populated meeting in Microsoft Outlook.",
          },
          {
            location: "http://images.coberapps.com/Lone_Peak_Admin.png",
            title: "Admin Dashboard",
            details:
              "The admin dashboard is for approving cases that have been recently posted for approval, specified changes to any existing cases, a list of new cases, and any cases that are closing soon.",
          },
          {
            location:
              "http://images.coberapps.com/Lone_Peak_Client_Profile.png",
            title: "Client Profile",
            details:
              "This page is for viewing all of their clients individually along with their cases. The sections on this page show contacts from the selected contacts company as well as upcoming events for the selected contact.",
          },
          {
            location:
              "http://images.coberapps.com/Lone_Peak_Conflict_Check.png",
            title: "Conflict Check",
            details:
              "This form allows employees to enter new cases for approval. There is logic for adding a new attorney and a new company built into the form. Files can also be uploaded to the server through this form.",
          },
          {
            location: "http://images.coberapps.com/Lone_Peak_Dashboard.png",
            title: "Personal Dashboard",
            details:
              "This is the personal dashboard for each employee when they login. It displays their new tasks, past due tasks, and new comments on the tasks that have been assigned to them. A graph will appear in the bottom right displaying their billable/non-billable hours.",
          },
          {
            location: "http://images.coberapps.com/Lone_Peak_Main_Menu.png",
            title: "Main Menu",
            details:
              "This page filters by employee selected to show all cases, events, and upcoming events. It also can display events and cases for the entire company. Clicking on a case or contact on this page opens that case or contact in other pages.",
          },
          {
            location:
              "http://images.coberapps.com/Lone_Peak_Marketing_Events.png",
            title: "Marketing Events",
            details:
              "This table shows all the events for the company along with filtering based upon the type of event, what company the event is for, and which employee the event is assigned to.",
          },
          {
            location: "http://images.coberapps.com/Lone_Peak_New_Cases.png",
            title: "New Cases",
            details:
              "This table shows the newest cases that have been created and approved for the company. There is also a slider at the top to display cases that have been added in the last 7-365 days (shown by month).",
          },
          {
            location: "http://images.coberapps.com/Lone_Peak_Task_List.png",
            title: "Task List",
            details:
              "Tasks are extremely important for their employees, so this list has a lot of flexibility. A user can filter by employee, tasks that are assigned to them or they have assigned to others. They can also display incomplete, complete, and all tasks. There is also the option to show open, closed and all cases.",
          },
          {
            location: "http://images.coberapps.com/Lone_Peak_Time_Entry.png",
            title: "Time Entry",
            details:
              "Time entry required a lot of very specific functionality. Each cell had to go through rigorous testing to make sure it functioned exatly the way it should (ex. when clicking on start, it should round to the nearest 5 minutes). Each row gradually filters down as the user selects a case, which then populates the available tasks associated to that case for the given user. A user can also download a .xls file with all the data from their time entries and view a report of all their hours within a selected date range to view and add their time into their other billing software.",
          },
        ],
        stage: "Complete",
        clientComments:
          "We hired Coby to develop a web application so that we could more efficiently manage our projects and client relationships. Coby worked very hard over a four-month period – often working 12+ hours days – to meet the agreed upon deadline. As Coby encountered obstacles, he spent his own time to learn and research ways to overcome the obstacles. Coby delivered the project on time and exceeded our expectations. We found Coby’s work to be very reliable without any major bugs or issues. Coby responded within a few hours with a fix for any of the few small bugs that we did find. In addition to exceptional software development skills, Coby was a pleasure to work with. He was always pleasant, open to suggestions, and considerate of others.",
        clientInfo: [
          {
            name: "Matt Germane",
            company: "Lone Peak Valuation",
            position: "Principal",
            image:
              "https://lonepeakvaluation.com/wp-content/uploads/2018/01/Matt.png",
          },
        ],
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
        hero:
          "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/119461834_10224969756250740_3395514406448708858_o.jpg?_nc_cat=109&_nc_sid=e3f864&_nc_ohc=VwRsI9CGEPQAX-ePaOQ&_nc_ht=scontent-den4-1.xx&oh=606e4fbad89da660c8cbece5d005bddb&oe=5F97A248",
        images: [
          {
            location: "http://images.coberapps.com/NorthAlpine.png",
            title: "Temporary Page",
            details: "This project is still in development and design phase.",
          },
        ],
        stage: "In Development",
        clientComments: "",
        clientInfo: [
          {
            name: "Kurt Yates",
            company: "North Alpine Photography",
            position: "Owner",
            image: "",
          },
        ],
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
        hero: "https://i.imgur.com/9J7fcXB.jpg",
        images: [
          { location: "http://images.coberapps.com/GoodGrindz.png" },
          { location: "http://images.coberapps.com/GoodGrindz2.png" },
          { location: "http://images.coberapps.com/GoodGrindz3.png" },
          { location: "http://images.coberapps.com/GoodGrindz4.png" },
          { location: "http://images.coberapps.com/GoodGrindzHomeFull.png" },
          { location: "http://images.coberapps.com/GoodGrindzFull.png" },
        ],
        stage: "In Development",
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "",
            position: "",
            image: "",
          },
        ],
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
        hero:
          "https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        images: [
          { location: "http://images.coberapps.com/BokaHome.png" },
          { location: "http://images.coberapps.com/BokaClients.png" },
          { location: "http://images.coberapps.com/BokaToDo.png" },
          { location: "http://images.coberapps.com/BokaHomeFull.png" },
        ],
        stage: "In Development",
        clientComments: "",
        clientInfo: [
          {
            name: "Kurt Yates",
            company: "Boka",
            position: "Founder",
            image: "",
          },
        ],
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
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "",
            position: "",
            image: "",
          },
        ],
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
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "",
            position: "",
            image: "",
          },
        ],
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
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "",
            position: "",
            image: "",
          },
        ],
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
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "",
            position: "",
            image: "",
          },
        ],
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
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "",
            position: "",
            image: "",
          },
        ],
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
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "",
            position: "",
            image: "",
          },
        ],
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
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "",
            position: "",
            image: "",
          },
        ],
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
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "",
            position: "",
            image: "",
          },
        ],
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
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "",
            position: "",
            image: "",
          },
        ],
        tags: ["Next.js", "HTML", "CSS", "JavaScript", "React"],
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
