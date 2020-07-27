import database from "../config/firebase";
import { v4 as uuid_v4 } from "uuid";

export default {
  setLoading({ commit }, loading = false) {
    commit("SET_LOADING", loading);
  },
  async createTask({ commit }, data) {
    commit("SET_LOADING", true);
    try {
      let taskId = uuid_v4();
      await database.ref("tasks/" + taskId).set(data);
      commit("SET_LOADING", false);
      return {
        ok: true,
        error: null
      };
    } catch (error) {
      commit("SET_LOADING", false);
      return {
        ok: false,
        error: error.message
      };
    }
  },
  getListTask({ commit }) {
    var list = database.ref("tasts");
    // list.on
  }
};
