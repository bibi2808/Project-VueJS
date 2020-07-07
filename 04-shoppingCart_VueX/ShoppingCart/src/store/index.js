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
const localStorage = store => {
  store.subscribe((mutation, state) => {
    // Save data
    window.localStorage.setItem("cart", JSON.stringify(state.cart));
  });
};

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== "production", // không cho phép thay đổi state bên ngoài mutations, chỉ được phép thay đổi state khi sử dụng mutations
  state,
  getters,
  actions,
  mutations,
  modules: {
    cart: moduleCart,
    product: moduleProduct
  },
  plugins: [localStorage]
});

export default store;
