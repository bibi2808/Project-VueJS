import { STATUS_CONFIG } from "../config/const";

export default {
  getListTaskFilter: state => {
    const listTasks = state.listTasks;
    let todo = [],
      inProgress = [],
      toVerify = [],
      done = [];
    for (let key in listTasks) {
      let value = listTasks[key];
      let data = {
        id: key,
        ...value
      };
      if (value.status === STATUS_CONFIG.TODO.value) todo.push(data);
      else if (value.status === STATUS_CONFIG.IN_PROGRESS.value)
        inProgress.push(data);
      else if (value.status === STATUS_CONFIG.TO_VERIFY.value)
        toVerify.push(data);
      else if (value.status === STATUS_CONFIG.DONE.value) done.push(data);
    }
    return {
      todo,
      inProgress,
      toVerify,
      done
    };
  },
  isLogin: state => {
    if (state.currentUser.email !== "" && state.currentUser.uid !== "") {
      return true;
    }
    return false;
  },
  getListEmailUser: state => {
    const listUsers = state.listUsers;
    let arrEmails = [];
    for (let key in listUsers) {
      let value = listUsers[key];
      arrEmails.push(value.email);
    }
    return arrEmails;
  },
  isAdmin: state => {
    return state.currentUser.role === "admin";
  }
};
