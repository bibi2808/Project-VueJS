import Vue from "vue";
import Vuex from "vuex";

import listBlogs from "../mocks/blogs";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    listBlogs
  },
  getters: {}
});

export default store;
