import database from "../config/firebase";

export default {
  subjectAction({ commit }, subject) {
    console.log("subject", subject);
    commit("SET_SUBJECT", subject);
  },
  dateTimeAction({ commit }, datetime) {
    console.log("datetime", datetime);
    commit("SET_DATETIME", datetime);
  },
  informationAction({ commit }, data) {
    console.log("data", data);
    commit("SET_INFORMATION", data);
  },
  async confirmAction({ commit }, data) {
    let result = await database.collection("contacts").add(data);
    console.log("result", result);
  }
};
