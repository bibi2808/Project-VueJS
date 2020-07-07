import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

import moduleCart from "./cart";
import moduleProduct from "./product";

// giống như WATCHER dùng để theo dõi thay đổi của state khi kích hoạt MUTATIONS
const myPlugin = store => {
  // console.log("Myplugin", store);
  store.subscribe((mutation, state) => {
    // console.log("Subscrible is running", mutation, "State is ", state);
  });
};

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state,
  getters,
  actions,
  mutations,
  modules: {
    cart: moduleCart,
    product: moduleProduct
  },
  plugins: [myPlugin]
});
// console.log("Module product", store.state.product);
// console.log("module cart", store.state.cart);
// store.commit("product/increment", 9999);

export default store;
