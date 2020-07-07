export default {
  SET_LOADING: (state, loading = true) => {
    state.isLoading = loading;
    console.log("mutation root", state.isLoading);
  }
};
