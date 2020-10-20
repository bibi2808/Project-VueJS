import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import vueVimeoPlayer from "vue-vimeo-player";

import "vue-datetime/dist/vue-datetime.css";
import "./assets/style.css";
import { auth } from "./config/firebase";

Vue.use(vueVimeoPlayer);

let app;
auth.onAuthStateChanged(user => {
  if (!app) {
    new Vue({
      el: "#app",
      router,
      store,
      render: h => h(App)
    });
  }
  if (user) {
    let data = {
      email: user.email,
      uid: user.uid,
      userListVideo: JSON.parse(localStorage.getItem("listVideoId"))
    };
    store.commit("SET_CURRENT_USER", data);
  } else {
    let data = {
      email: "",
      uid: "",
      userListVideo: []
    };
    store.commit("SET_CURRENT_USER", data);
  }
});
