export default {
  CHANGE_TASK(state, newTasks) {
    state.listTask = newTasks;
  },
  TOGGLE_FORM(state) {
    // if (this.isShowForm) {
    //   this.taskSelected = null;
    // }
    state.isShowForm = !state.isShowForm;
  },
  HANDLE_SEARCH(state, strSearch) {
    state.strSearch = strSearch;
  },
  HANDLE_SORT(state, data) {
    state.orderBy = data.orderBy;
    state.orderDir = data.orderDir;
    // console.log("MUTATIONs SORT", data.orderBy, data.orderDir);
  }
};
