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
  },
  handleAddnewTask({ commit }, task) {
    // this.listTask.push(task);
    commit("ADD_NEW_TASK", task);
  },
  handleEdit({ commit }, taskSelected) {
    commit("HANDLE_EDIT", taskSelected);
  },
  handleEditTaskById({ commit, state }, taskEdit) {
    let index = state.listTask.findIndex(item => item.id === taskEdit.id);
    let listTaskClone = [...state.listTask];
    if (index !== -1) {
      listTaskClone.splice(index, 1, taskEdit);
      commit("TOGGLE_FORM");
      commit("CHANGE_TASK", listTaskClone);
    }
    commit("");
  }
};
