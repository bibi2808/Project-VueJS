import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import Datetime from "vue-datetime";
import vueVimeoPlayer from "vue-vimeo-player";

import "vue-datetime/dist/vue-datetime.css";
import "./assets/style.css";
import { auth } from "./config/firebase";

Vue.use(vueVimeoPlayer);
Vue.use(Datetime);

// check login , logout when access user
auth.onAuthStateChanged(function(user) {
  if (user) {
    // sign　in
    // console.log('user',user)
    let data = {
      email: user.email,
      uid: user.uid
    };
    store.commit("SET_CURRENT_USER", data);
    router.push("/");
  } else {
    // sign out
    let data = {
      email: "",
      uid: ""
    };
    store.commit("SET_CURRENT_USER", data);
    router.push("/login");
    // console.log("signed out");
  }
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
