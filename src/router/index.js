import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects/:id",
    name: "Projects",
    component: function() {
      return import(/* webpackChunkName: "projects" */ "../views/Projects.vue");
    },
  },
  {
    path: "/recommendations",
    name: "Recommendation",
    component: function() {
      return import(
        /* webpackChunkName: "recommendation" */ "../views/Recommendation.vue"
      );
    },
  },
  {
    path: "/work",
    name: "Work",
    component: function() {
      return import(
        /* webpackChunkName: "work" */ "../views/Work.vue"
      );
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
