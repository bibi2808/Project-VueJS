import Vue from "vue";
import Vuex from "vuex";

import moduleExample from "./moduleExample";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {},
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {},
  modules: {
    moduleExample
  }
});

export default store;
