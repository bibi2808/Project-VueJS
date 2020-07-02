export default {
  CHANGE_TASK(state, newTasks) {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    state.listTask = newTasks;
  },
  TOGGLE_FORM(state) {
    if (state.isShowForm) {
      state.taskSelected = null;
    }
    state.isShowForm = !state.isShowForm;
  },
  HANDLE_SEARCH(state, strSearch) {
    state.strSearch = strSearch;
  },
  HANDLE_SORT(state, data) {
    state.orderBy = data.orderBy;
    state.orderDir = data.orderDir;
  },
  ADD_NEW_TASK(state, task) {
    state.listTask.push(task);
  },
  HANDLE_EDIT(state, taskEdit) {
    state.isShowForm = true;
    state.taskSelected = taskEdit;
  }
};
