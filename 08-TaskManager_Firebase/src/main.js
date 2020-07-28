import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import Datetime from "vue-datetime";

import "vue-datetime/dist/vue-datetime.css";
import "./assets/style.css";
import { auth } from "./config/firebase";

Vue.use(Datetime);

auth.onAuthStateChanged(function(user) {
	if (user) {
		// console.log('user',user)
		let data = {
			email: user.email,
			uid: user.uid
		};
		store.commit("SET_CURRENT_USER", data);
		router.push("/");
	} else {
		let data = {
			mail: "",
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
