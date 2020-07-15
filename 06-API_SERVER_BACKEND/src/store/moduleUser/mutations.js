import Vue from 'vue'

export default {
  SET_USER_INFO(state, data) {
    Vue.set(state.users, data.USERID, data);
  }
};
