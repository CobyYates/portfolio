<template>
  <v-container class="pa-0" fluid>
    <vueHeadful title="Coby Yates | Recommendations" />
    <v-parallax
      src="https://images.pexels.com/photos/40973/background-brown-circle-cut-40973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      class="mt-0 mb-5"
      height="650">
      <v-overlay :absolute="true" :opacity="0.5" :value="true">
        <v-row>
          <v-col cols="9" class="mx-auto">
            <h1 class="font-weight-light font-italic">{{quote}}</h1>
            <p class="title mt-3 ml-12">- Mark Zuckerberg</p>
          </v-col>
        </v-row>
      </v-overlay>
    </v-parallax>
      
    <v-row
      class="mx-auto justify-center"
      v-for="item in reviews"
      :key="item.i"
    >
      <v-col>
        <v-card
          color="#385F73"
          height="auto"
          width="90%"
          elevation="8"
          class="mx-auto my-2"
        >
        <div class="d-flex align-end">
          <v-avatar
            class="mt-5 ml-5"
            size="100"
            tile
          >
            <v-img :src="`${item.image}`" />
          </v-avatar>
          <div>
            <v-card-title class="white--text">{{item.name}}</v-card-title>
            <v-card-subtitle class="white--text body-1 font-weight-light py-0">{{item.position}} -  {{item.company}}</v-card-subtitle>
          </div>
        </div>
        <v-card-text class="body-1 font-weight-light white--text">
          "{{item.review}}"
        </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import vueHeadful from "vue-headful";
export default {
  name: "Home",
  data: () => ({
    quote: 'People influence people. Nothing influences people more than a recommendation from a trusted friend. A trusted referral influences people more than the best broadcast message. A trusted referral is the Holy Grail of advertising.',
    reviews: [
      {
        name: 'Matt Germane',
        image: 'https://lonepeakvaluation.com/wp-content/uploads/2018/01/Matt.png',
        company: 'Lone Peak Valuation',
        position: 'Principal',
        review: 'We hired Coby to develop a web application so that we could more efficiently manage our projects and client relationships. Coby worked very hard over a four-month period – often working 12+ hours days – to meet the agreed upon deadline. As Coby encountered obstacles, he spent his own time to learn and research ways to overcome the obstacles. Coby delivered the project on time and exceeded our expectations. We found Coby’s work to be very reliable without any major bugs or issues. Coby responded within a few hours with a fix for any of the few small bugs that we did find. In addition to exceptional software development skills, Coby was a pleasure to work with. He was always pleasant, open to suggestions, and considerate of others.'
      },
      {
        name: 'Daniel Hatch',
        image: 'https://www.uvu.edu/cet/images/hall_of_fame/dan_hatch.jpg',
        company: 'Utah Valley University',
        position: 'Assistant Professor',
        review: 'Coby Yates is a graduate of the Web & App emphasis of the Web Design & Development Bachelor of Science degree here at Utah Valley University in Orem, Utah. He has been in several of my classes and has been one of our top tier students. Two of my classes that he has been in are the Digital Design Practicum and Senior Capstone I & II classes. Both of these courses are team oriented classes. He has always been respectful to other team members and been the top contributor within those groups. Additionally he volunteered to help other students with setup and administering of a website on BlueHost, where he previously was a support technician. Coby pulls his weight and then some. With his senior project he was a leader in the group and often tutored his fellow students to help move the project along. He wrote the bulk of the logic for the web app to perform keystroke capture for a training app. That client was very complementary of his interaction with him on the website app. When faced with challenging deadlines and extra class loads he has been able to manage his workload and complete many projects during his time here at UVU. He is also a father and manages to take care of his family well. He always goes well above and beyond the minimum of the requirements for any project. If he doesn’t know how to tackle the challenge he figures it out and reaches out to others to help him accomplish his assigned tasks. In my practicum class he almost doubled the required hours and developed a large client project.'
      },
      {
        name: 'Jared Seegrist',
        image: 'https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/10922605_801095496594646_4440588254926014983_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=bOoXh8gB3fMAX_sxcR2&_nc_ht=scontent-den4-1.xx&oh=931d540639b06367619e3928499a5085&oe=5F9D478A',
        company: 'RainFire Restoration',
        position: 'Manager',
        review: 'I have known Coby for several years. I have seen his work ethic both personally and professionally. Over the years I have seen his ability to take a task and see it through. Not only does he demonstrate professionalism but an ability to see ahead to the what the final product will look like. Coby has a genuine ability to come up with ideas that have benefited him personally as well as professionally. He will continue to be a great asset to any team he is finds himself a part of.'
      },
      {
        name: 'Bryan Bitner',
        image: 'https://scontent-den4-1.xx.fbcdn.net/v/t31.0-8/322886_130666367040647_2139314181_o.jpg?_nc_cat=102&_nc_sid=174925&_nc_ohc=cspcsK_QupkAX-5GxU7&_nc_oc=AQmrUJ1dhw0S3VnZT1ujG7VBpAST0GDNH8nptVUwFKQOn6tWn06lcFo845sZzsWzlL4hQ6gvBDaRj0VMBmTJKJil&_nc_ht=scontent-den4-1.xx&oh=db3d62245f37ea9a5caa1ceecbd1a622&oe=5F9D71C6',
        company: 'Pro Worx Construction',
        position: 'Owner',
        review: 'During the time he worked for me, he was an outstanding employee. Coby was not just an employee but he became part of the family. During the time I have known him, he has always been a hard working and caring person. He always wants to do the right thing and go the extra mile. Having spent time with him during work hours and during off time I was really able to get to know him. In today’s work environment it is hard to find reliable people who actually wants what is best for others, not just themselves. Coby is that person. Always willing to step in and help, and willing to work for it. For this reason I am happy to recommend him and you would be lucky to have him in any capacity.'
      },
      {
        name: 'Scott Steele',
        image: 'https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/117334730_10158675392123953_4273807075228140207_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=BS3wUq25zdUAX9vFipa&_nc_ht=scontent-den4-1.xx&oh=72fdafa3b41499c1bc4d5017b706a352&oe=5F9AA062',
        company: 'Fusion 5',
        position: 'Owner',
        review: 'I’ve had the opportunity to employ Coby in my own business and was continually impressed with his honesty & diligence as well as his abilities to get things done. Coby has worked for me in the past as a warehouse / deliveries manager. In this role, he performed all required tasks without complaint even when those tasks included aspects that weren’t necessarily appealing. As years have passed, I’ve become increasingly more aware of the qualities that Coby displayed while employed in my business. As for his character, I would also add that I am impressed by Coby’s honesty and self-awareness both with respect to his strengths as well as his weaknesses. This was something that created a great setting for growth that I’m positive he’s since continued. I strongly believe that Coby would be an excellent addition to any team where they find the right seat for him to succeed. Coby constantly seeks to learn and is quick to comprehend with respect to new tasks including technologies.'
      },
    ]
  }),
  components: {
    vueHeadful,
  },
  methods: {
    
  },
  created() {
    window.scrollTo(0, 0)
  },
};
</script>

<style scoped>
::v-deep .v-parallax__image-container img {
  padding-bottom: 115px;
}

.specs {
  height: 100%;
}

.overlayRow {
  width: 80vw;
}

.divider {
  border: 0.25px solid white;
}
</style>
