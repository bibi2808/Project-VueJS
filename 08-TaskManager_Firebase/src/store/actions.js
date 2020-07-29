import { tasksRef, userRef, auth } from "../config/firebase";
import { v4 as uuid_v4 } from "uuid";

export default {
	setLoading({ commit }, loading = false) {
		commit("SET_LOADING", loading);
	},
	onListener({ commit }) {
		let flag = false;
		commit("SET_LOADING", true);
		tasksRef.on("value", function(snapshot) {
		if (!flag) {
			flag = true;
			commit("SET_LOADING", false);
		}
		commit("SET_LIST_TASKS", snapshot.toJSON());
		});
	},
	async createTask({ commit }, data) {
		commit("SET_LOADING", true);
		try {
			let taskId = uuid_v4();
			await tasksRef.child(taskId).set(data);
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
	onListenerUser({ commit }) {
		userRef.on("value", function(snapshot) {
		commit("SET_LIST_USERS", snapshot.toJSON());
		});
	},
	async register({ commit }, { email, password }) {
		commit("SET_LOADING", true);
		try {
			let result = await auth.createUserWithEmailAndPassword(email, password);
			await userRef.child(result.user.uid).set({
				email: email,
				role: "member"
			});

			let user = {
				email: email,
				uid: result.user.uid
			};
			commit("SET_CURRENT_USER", user);
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
	async login({ commit }, { email, password }) {
		commit("SET_LOADING", true);
		try {
			let result = await auth.signInWithEmailAndPassword(email, password);
			let user = {
				email: email,
				uid: result.user.uid
			};
			commit("SET_CURRENT_USER", user);
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
	async getTaskById({ commit }, taskId) {
		commit("SET_LOADING", true);
		try {
			let result = await tasksRef.child(taskId).once("value");
			commit("SET_LOADING", false);
			if (result.val()) {
				return {
				ok: true,
				task: result.val()
				};
			}
			return {
				ok: false,
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
	async getUserCustomField({ commit, state }) {
		let uid = state.currentUser.uid;
		try {
			let result = await userRef.child(uid).once("value");
			if (result.val()) {
				commit("SET_ROLE", result.val());
				return {
					ok: true,
					data: result.val()
				};
			}
			return {
				ok: false,
				data: null
			};
		} catch (error) {
			return {
				ok: false,
				error: error.message
			};
		}
	}
};
