import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style.css";
import "./plugins";
import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";
Vue.use(Datetime);

// import database from "./config/firebase";

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
