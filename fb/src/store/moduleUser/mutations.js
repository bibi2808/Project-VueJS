import Vue from "vue";
export default {
  SET_USER_INFO(state, user) {
    Vue.set(state.users, user.USERID, user);
  },
  SET_USER_POSTS(state, { posts, userid }) {
    Vue.set(state.posts, userid, posts);
  },
  SET_LOGIN_INFO(state, { user = null, token = "" }) {
    localStorage.setItem("ACCESS_TOKEN", token);
    state.ACCESS_TOKEN = token;
    state.currentUser = user;
  },
  SET_LOGOUT(state) {
    (state.ACCESS_TOKEN = ""), (state.currentUser = null);
    localStorage.removeItem("ACCESS_TOKEN");
  }
};
