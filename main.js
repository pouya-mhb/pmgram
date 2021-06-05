import Vue from 'vue';
import App from "./App";
import router from "./router";

new Vue({
  el: "#app",

  data: {},

  router,
  template: "<App/>",

  components: {
    App,
  },
  mounted() {},
});