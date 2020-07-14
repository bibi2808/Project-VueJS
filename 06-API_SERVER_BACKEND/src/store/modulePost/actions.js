import axiosInstance from "../../plugins/axios";

export default {
  async getListPostByPaging(
    { commit },
    { pagesize = 9, currPage = 1, tagIndex = null }
  ) {
    try {
      commit("SET_LOADING", true);
      var config = {
        params: {
          pagesize,
          currPage
        }
      };
      if (tagIndex) {
        config.params.tagIndex = tagIndex;
        var result = await axiosInstance.get(
          "/post/getListByCategory.php",
          config
        );
      } else {
        var result = await axiosInstance.get(
          "/post/getListPagination.php",
          config
        );
      }

      commit("SET_LOADING", false);

      if (result.data.status === 200) {
        commit("SET_LIST_POST", result.data.posts);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
