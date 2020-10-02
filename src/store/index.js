import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    langs: [
      { title: "Vue.js", icon: "mdi-vuejs", color: "green" },
      { title: "HTML", icon: "mdi-language-html5", color: "orange" },
      { title: "CSS", icon: "mdi-language-css3", color: "blue" },
      { title: "JavaScript", icon: "mdi-language-javascript", color: "yellow" },
      { title: "SASS", icon: "mdi-sass", color: "pink" },
      { title: "LESS", icon: "mdi-code-tags", color: "green" },
      { title: "C#", icon: "mdi-language-csharp", color: "purple" },
      { title: "C++", icon: "mdi-language-cpp", color: "blue" },
    ],
    frameworks: [
      { title: "Vuetify", icon: "mdi-vuejs", color: "blue" },
      { title: "Bootstrap", icon: "mdi-bootstrap", color: "purple" },
      { title: "Flexbox", icon: "mdi-language-css3", color: "orange" },
      { title: "CSS Grid", icon: "mdi-language-css3", color: "blue" },
    ],
    softwares: [
      { title: "VS Code", icon: "mdi-visual-studio-code", color: "blue" },
      { title: "Adobe Illustrator", icon: "mdi-adobe", color: "red" },
      { title: "Adobe InDesign", icon: "mdi-adobe", color: "red" },
      { title: "Adobe XD", icon: "mdi-adobe", color: "red" },
      { title: "Google Sketchup", icon: "mdi-google", color: "green" },
      { title: "Xactimate", icon: "mdi-alpha-x-circle", color: "blue" },
      { title: "FileZilla", icon: "mdi-upload-multiple", color: "red" },
    ],
    additionals: [
      { title: "Netlify", icon: "mdi-server", color: "teal" },
      { title: "UX/UI Design", icon: "mdi-pencil-ruler", color: "orange" },
      { title: "WordPress", icon: "mdi-wordpress", color: "blue" },
      { title: "Bluehost", icon: "mdi-view-dashboard", color: "blue" },
      { title: "Git Certified", icon: "mdi-git", color: "pink" },
      { title: "A+ Training", icon: "mdi-desktop-tower", color: "white" },
      { title: "App Design", icon: "mdi-pencil-ruler", color: "orange" },
    ],
    experiences: [
      { title: "Node.js", icon: "mdi-nodejs", color: "green" },
      { title: "MongoDB", icon: "mdi-nodejs", color: "green" },
      { title: "Express", icon: "mdi-nodejs", color: "blue" },
      { title: "Mongoose", icon: "mdi-nodejs", color: "blue" },
      { title: "React", icon: "mdi-react", color: "blue" },
      { title: "Next.js", icon: "mdi-react", color: "blue" },
    ],
    about: [
      {
        bio:
          "My name is Coby, I live in Herriman, UT with my wife and daughters. My wife and I love to travel when we get time and have been to Europe and South America since being married.",
      },
      {
        bio:
          "I enjoy <strong>paddleboarding, frisbee golf, fly fishing, listening to podcasts, and watching Twitch streamers.</strong> I love to <strong>travel</strong> and think up new <strong>business ideas</strong>.",
      },
      {
        bio:
          "I graduated from Utah Valley University with a <strong>Bachelors degree in Web and App Development</strong> August 14, 2020. I'm currently <strong>looking for employment</strong> as a front-end web developer or full-stack developer. I really enjoy learning new languages and techniques in programming and am open to learning anything. I'm glad that I decided to go into a career path that excites me and I enjoy.",
      },
      {
        bio:
          "Some of my skills include <strong>Project Management</strong>, <strong>Programming</strong>, <strong>Client Relations</strong>, and being the<strong> 'Go To Guy'</strong> for most things tech or ideation. I was the project manager on most of the teams I was on in college and I have gained great relationships with people who were clients of organizations I worked for.",
      },
    ],
    cards: [
      {
        title: "Lone Peak Client Management",
        github: "",
        type: "Freelance",
        live: "",
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
        projectLogo:
          "https://lonepeakvaluation.com/wp-content/uploads/2017/05/cropped-LPVG-square-logo.jpg",
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
          "A portfolio site for a photographer and drone operator. He needed a way for him to be contacted and show off his work. I offered to do his website for him since he is my brother.",
        requirements: [
          { text: "Create a website that displays his images in a gallary" },
          { text: "Display contact information" },
          { text: "Create a contact form" },
          { text: "Impliment email hosting and configuration" },
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
        logo:
          "https://github.com/CobyYates/northalpine/blob/master/src/assets/logo.jpg?raw=true",
        projectLogo: "http://northalpinephoto.com/img/logo.c628b8e4.jpg",
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
        projectLogo: "",
        hero: "https://i.imgur.com/9J7fcXB.jpg",
        images: [
          {
            location: "http://images.coberapps.com/GoodGrindz.png",
            title: "Home Page",
            details: "",
          },
          {
            location: "http://images.coberapps.com/GoodGrindz2.png",
            title: "Reviews",
            details:
              "As a business, their reviews are a great marketing tool to draw customers in. These are located on the home page to make them easy to find.",
          },
          {
            location: "http://images.coberapps.com/GoodGrindz3.png",
            title: "Menu",
            details: "Just waiting on images and content from their team.",
          },
          {
            location: "http://images.coberapps.com/GoodGrindz4.png",
            title: "Footer",
            details:
              "The footer includes their contact information as well as their addresses so people can find their locations easily.",
          },
          {
            location: "http://images.coberapps.com/GoodGrindzFull.png",
            title: "Full Menu",
            details:
              "Just waiting for content to come in from their team. Once all the content is provided, this page can be updated and launched.",
          },
        ],
        stage: "In Development",
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "Good Grindz",
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
        projectLogo: "",
        hero:
          "https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        images: [
          {
            location: "http://images.coberapps.com/BokaHome.png",
            title: "Home Page",
            details:
              "This website is for content creators so knowing what types of resources this website has is critical to know from the beginning. The user can start by creating an account and logging in. They can also just search for content creators by type displayed under the hero image.",
          },
          {
            location: "http://images.coberapps.com/BokaClients.png",
            title: "Clients",
            details:
              "This page displays a list of clients that have requested to hire the content creator. The creator can see their clients/potential clients as well as their payments, and if they were accepted as a client or not.",
          },
          {
            location: "http://images.coberapps.com/BokaToDo.png",
            title: "To Do List",
            details:
              "This is where the user can add, edit and delete tasks that they have for their projects and personal business needs. They can also create labels to organize their tasks better.",
          },
          {
            location: "http://images.coberapps.com/BokaHomeFull.png",
            title: "Home Page",
            details:
              "This page explains the purpose and features of the site. A user can search for content creators by type, and see reviews. This project is currently on hold.",
          },
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
        projectLogo: "",
        hero:
          "https://images.pexels.com/photos/3921000/pexels-photo-3921000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        // images: [
        //   { location: "", title: "", details: "" },
        //   { location: "", title: "", details: "" },
        //   { location: "", title: "", details: "" },
        // ],
        stage: "Complete",
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "Utah Valley University - Digital Cinema Dept.",
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
        hero:
          "https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        projectLogo: "",
        images: [
          {
            location: "http://images.coberapps.com/Pokemon.png",
            title: "Main Page",
            details:
              "A list of Pokemon fetched from the PokeAPI and displayed in a card layout. ",
          },
          {
            location: "http://images.coberapps.com/PokemonFilter.png",
            title: "Filtering Pokemon",
            details:
              "The Pokemon on the main page can be filtered by type (ie. Fire, Water, etc...). This uses an array filter to filter all the fetched Pokemon by type.",
          },
          {
            location: "http://images.coberapps.com/PokemonFull.png",
            title: "",
            details: "",
          },
        ],
        stage: "Complete",
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "College Project",
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
        hero:
          "https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        projectLogo:
          "https://maxcdn.icons8.com/Share/icon/Logos/star_wars1600.png",
        images: [
          {
            location: "http://images.coberapps.com/StarWarsPeople.png",
            title: "",
            details: "",
          },
          {
            location: "http://images.coberapps.com/StarWarsFilmsFull.png",
            title: "",
            details: "",
          },
        ],
        stage: "Complete",
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "College Project",
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
        hero:
          "https://images.pexels.com/photos/3031749/pexels-photo-3031749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        projectLogo: "",
        images: [
          {
            location: "http://images.coberapps.com/Garage.png",
            title: "",
            details: "",
          },
          {
            location: "http://images.coberapps.com/GarageCarsOpen.png",
            title: "",
            details: "",
          },
          {
            location: "http://images.coberapps.com/GarageCarsFull.png",
            title: "",
            details: "",
          },
        ],
        stage: "Complete",
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "College Project",
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
        projectLogo: "",
        images: [
          { location: "", title: "", details: "" },
          { location: "", title: "", details: "" },
          { location: "", title: "", details: "" },
        ],
        stage: "Complete",
        warning:
          "This project requires GraphQL to run locally. Information can be found in the GitHub repository",
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "College Project",
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
        hero:
          "https://images.pexels.com/photos/1463530/pexels-photo-1463530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        projectLogo: "",
        images: [
          {
            location: "http://images.coberapps.com/Weather.png",
            title: "",
            details: "",
          },
        ],
        stage: "Complete",
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "College Project",
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
        hero:
          "https://images.pexels.com/photos/280254/pexels-photo-280254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        projectLogo: "",
        images: [
          {
            location: "http://images.coberapps.com/Pomodoro.png",
            title: "",
            details: "",
          },
        ],
        stage: "Complete",
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "College Project",
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
        hero:
          "https://images.pexels.com/photos/965879/pexels-photo-965879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        projectLogo: "",
        images: [
          {
            location: "http://images.coberapps.com/FinalScoreHome.png",
            title: "",
            details: "",
          },
          {
            location: "http://images.coberapps.com/FinalScoreYahtzee.png",
            title: "",
            details: "",
          },
        ],
        stage: "Complete",
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "College Project",
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
        hero:
          "https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        projectLogo: "",
        images: [
          {
            location: "http://images.coberapps.com/Nextjs.png",
            title: "",
            details: "",
          },
          {
            location: "http://images.coberapps.com/Nextjs2.png",
            title: "",
            details: "",
          },
        ],
        stage: "Complete",
        clientComments: "",
        clientInfo: [
          {
            name: "",
            company: "College Project",
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
