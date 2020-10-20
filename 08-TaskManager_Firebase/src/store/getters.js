export default {
	isLogin: state => {
		if (state.currentUser.email === "" && state.currentUser.uid === "") {
			return false;
		}
		return true;
	},
	getCurrentUserId: state => {
		return state.currentUser.uid;
	},
	getUserListVideo: state => {
		return state.currentUser.userListVideo;
	}
};
