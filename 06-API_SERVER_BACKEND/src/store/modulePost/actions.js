import axiosInstance from "../../plugins/axios";
import { PAGE_SIZE, CURRENT_PAGE } from "../../constants";

export default {
  async getListPostByPaging(
    { commit },
    { pagesize = PAGE_SIZE, currPage = CURRENT_PAGE, tagIndex = null }
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
        var url = "/post/getListByCategory.php";
        config.params.tagIndex = tagIndex;
        var result = await axiosInstance.get(url, config);
      } else {
        var url = "/post/getListPagination.php";
        var result = await axiosInstance.get(url, config);
      }

      commit("SET_LOADING", false);

      if (result.data.status === 200) {
        if (currPage === 1) {
          commit("SET_LIST_POST", result.data.posts);
        } else if (currPage > 1) {
          commit("SET_PUSH_LIST_POST", result.data.posts);
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
  async getPostDetailById({ commit, dispatch }, postId) {
    commit("SET_LOADING", true);
    try {
      var url = "/post/post.php?postid=" + postId;
      var result = await axiosInstance.get(url);

      if (result.data.status === 200) {
        // gọi tiếp sang API user
        var resultUser = await dispatch(
          "getUserById",
          result.data.data.post.USERID
        );
        commit("SET_LOADING", false);
        commit("SET_POST_DETAIL", result.data.data);
        return {
          ok: true,
          data: result.data.data,
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
