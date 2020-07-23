import { parseJwt } from "../../helpers";
export default {
  isLogin: state => {
    let userObj = parseJwt(state.ACCESS_TOKEN);
    if (userObj) {
      return true;
    } else {
      return false;
    }
  },
  currentUser: state => {
    return state.currentUser;
  },
  getListPostOfCurrentUser: state => {
    if (state.currentUser) {
      let userCurrentId = state.currentUser.USERID;
      return state.posts[userCurrentId];
    }
  }
};
