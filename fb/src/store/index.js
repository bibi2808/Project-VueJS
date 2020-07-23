import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import post from "./modulePost";
import user from "./moduleUser";

const store = new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    SET_LOADING: (state, loading = false) => {
      state.isLoading = loading;
    }
  },
  actions: {
    setLoading({ commit }, loading = false) {
      commit("SET_LOADING", loading);
    }
  },
  modules: {
    post,
    user
  }
});

export default store;
