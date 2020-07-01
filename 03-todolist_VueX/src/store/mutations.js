export default {
  CHANGE_TASK(state, newTasks) {
    state.listTask = newTasks;
    console.log("mutation change tasks", newTasks);
  }
};
