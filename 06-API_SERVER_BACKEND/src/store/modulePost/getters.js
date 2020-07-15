export default {
  getListPost: state => {
    return state.listPost;
  },
  getDataPostDetail(state, getters, rootState) {
    if (state.postDetail.post) {
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
      console.log(data);
      return data;
    }
  }
};
