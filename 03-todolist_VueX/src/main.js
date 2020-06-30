import Vue from "vue";
import App from "./App";
import "./plugins/index";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
