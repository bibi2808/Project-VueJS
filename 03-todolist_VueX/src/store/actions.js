export default {
  changeTasks({ commit }, newTasks) {
    commit("CHANGE_TASK", newTasks);
  },
  toggleForm({ commit }) {
    commit("TOGGLE_FORM");
  },
  handleSearch({ commit }, strSearch) {
    commit("HANDLE_SEARCH", strSearch);
  },
  handleSort({ commit }, data) {
    console.log("MAPACTIONS SORT", data);
    commit("HANDLE_SORT", data);
  },
  handleDelete({ commit, state }, taskDelete) {
    let newListTask = state.listTask.filter(item => item.id != data.id);
    // this.listTask = newItems;
    commit("CHANGE_TASK", newListTask);
  }
};
