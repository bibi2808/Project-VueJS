export default {
  SET_LOADING: (state, loading = false) => {
    state.isLoading = loading;
  },
  SET_LIST_TASKS:(state, data) => {
    state.listTasks = data;
  }
};
