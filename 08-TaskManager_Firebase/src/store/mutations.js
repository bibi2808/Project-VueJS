export default {
	SET_LOADING: (state, loading = false) => {
		state.isLoading = loading;
	},
	SET_LIST_TASKS: (state, data) => {
		state.listTasks = data;
	},
	SET_CURRENT_USER: (state, data) => {
		state.currentUser = data;
	},
	SET_LIST_USERS: (state, data) => {
		state.listUsers = data;
	},
	SET_ROLE: (state, data) => {
		state.currentUser = {...state.currentUser, role: data.role };
	}
};
