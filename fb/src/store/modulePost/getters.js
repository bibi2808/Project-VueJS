export default {
  getListPost: state => {
    return state.listPosts;
  },
  getPostDetail: (state, getters, rootState) => {
    // kết nối state của các module với nhau để gộp dữ liệu thành 1 getters
    if (state.postDetail) {
      var USERID = state.postDetail.post.USERID;
      var user = rootState.user.users[USERID];
      var data = {
        post: {
          ...state.postDetail.post,
          fullname: user.fullname,
          profilepicture: user.profilepicture
        },
        categories: state.postDetail.categories
      };
      console.log("data", data);
      return data;
    }
  }
};
