export default {
  changeTasks({ commit }, newTasks) {
    console.log("action change task", newTasks);
    commit("CHANGE_TASK", newTasks);
  }
};
