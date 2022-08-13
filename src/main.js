import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import "./registerServiceWorker";
import VueSmoothScroll from "vue2-smooth-scroll";
import VueMeta from "vue-meta";

Vue.use(VueMeta);

Vue.use(VueSmoothScroll, {
  offset: -20,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,

  render: function(h) {
    return h(App);
  }
}).$mount("#app");
