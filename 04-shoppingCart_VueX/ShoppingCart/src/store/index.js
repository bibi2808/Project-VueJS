import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

import moduleCart from "./cart";
import moduleProduct from "./product";

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    cart: moduleCart,
    product: moduleProduct
  }
});
console.log("Store", store);
console.log("Store-1", store.state);
console.log("Store-2", store.state.cart.countCart);
console.log("Store state", store.commit("increment"));

export default store;
