

export default {
  // nếu currentPage = 1 => thay thế array root
  SET_LIST_POST(state, data) {
    state.listPost = data;
  },
  // nếu currentPage > 1  => load more data => cộng 2 arr với nhau
  SET_PUSH_LIST_POST(state, data) {
    state.listPost = [...state.listPost, ...data];
  },
  SET_POST_DETAIL(state, data) {
    state.postDetail = data;
  }
};
