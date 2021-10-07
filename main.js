import Vue from "vue";
import App from "./App";
import router from "./router";
import Axios from "axios";
Vue.prototype.$http = Axios;

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
