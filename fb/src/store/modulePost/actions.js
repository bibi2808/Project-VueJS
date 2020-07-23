import axiosInstance from "../../plugins/axios";
import { PAGE_SIZE, CURRENT_PAGE } from "../../constants";

export default {
	async getListPostHasPaging({ commit }, { pagesize = PAGE_SIZE, currPage = CURRENT_PAGE, tagIndex = null }) {
		commit("SET_LOADING", true);
		try {
			var config = {
				params: {
					pagesize,
					currPage
				}
			};
			if (tagIndex) {
				config.params.tagIndex = tagIndex;
				var result = await axiosInstance.get("/post/getListByCategory.php",config);
			}else {
				var result = await axiosInstance.get("/post/getListPagination.php",config);
			}
			commit("SET_LOADING", false);
			if (result.data.status === 200) {
				if (currPage === 1)
					commit("SET_LIST_POSTS", result.data.posts);
				else if (currPage > 1) 
				{
					commit("PUSH_LIST_POSTS", result.data.posts);
				}
					
				return {
					ok: true,
					error: null,
					data: result.data.data
				};
		
			}
		} 	catch (error) {
			commit("SET_LOADING", false);
				return {
					ok: false,
					error: error.message
				};
		}
	},
	async getPostDetailById({ commit, dispatch }, postId) {
		commit("SET_LOADING",true);
		try {
			var result = await axiosInstance.get("/post/post.php?postid=" + postId);
			
			if (result.data.status === 200) {
				// goi truc tiep sang API user
				var resultUser = await dispatch("getUserById", result.data.data.post.USERID);

				commit("SET_LOADING", false);
				commit("SET_POST_DETAIL", result.data.data);

				return { 
					ok:true,
					data:result.data.data,
					error:null
				}
			}
		} catch (error) {
			commit("SET_LOADING", false);
			return {
				ok: false,
				error:error.message
			}
		}
	}
};
