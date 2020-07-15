import axiosInstance from "../../plugins/axios";

export default {
  async getUserById({ commit }, userId) {
    try {
      var url = "/member/member.php?userid=" + userId;
      var result = await axiosInstance.get(url);
      if (result.data.status === 200) {
        commit("SET_USER_INFO", result.data.user);
        return {
          ok: true,
          data: result.data.user,
          error: null
        };
      }
    } catch (error) {
      commit("SET_LOADING", false);
      return {
        ok: false,
        error: error.message
      };
    }
  }
};
