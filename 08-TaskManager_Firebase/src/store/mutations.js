export default {
  SET_LOADING: (state, loading = false) => {
    state.isLoading = loading;
  },
  SET_CURRENT_USER: (state, data) => {
    state.currentUser = data;
  },
  SET_ADD_VIDEO: (state, data) => {
    state.currentUser.userListVideo = data;
  }
};
