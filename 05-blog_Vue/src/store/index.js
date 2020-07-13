import Vue from "vue";
import Vuex from "vuex";

import listBlogs from "../mocks/blogs";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    listBlogs,
    isLogin: false
  },
  getters: {},
  mutations: {
    SET_LOGIN(state, isLogin) {
      //   console.log(isLogin);
      state.isLogin = isLogin;
    },
    SET_LOGOUT(state, isLogin) {
      state.isLogin = isLogin;
    }
  },
  actions: {
    checkLogin({ commit, state }, { email, password }) {
      if (email === "admin@gmail.com" && password === "admin") {
        commit("SET_LOGIN", true);
        return true;
      } else {
        commit("SET_LOGIN");
        return false;
      }
    },
    checkLogOut({ commit }) {
      commit("SET_LOGOUT", false);
    }
  }
});

export default store;
