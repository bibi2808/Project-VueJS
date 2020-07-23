import axiosInstance from "../../plugins/axios";
import { parseJwt } from '../../helpers'

export default {
    async getUserById({ commit }, USERID) {
        try {
            var result = await axiosInstance.get("/member/member.php?userid=" + USERID);
            if(result.data.status === 200){
                commit("SET_USER_INFO",result.data.user);
                return {
                    ok:true,
                    data:result.data.user,
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
    },
    async login({ commit, dispatch }, {email = '', password = ''}){
        commit("SET_LOADING", true);
        try {
            let data = {
                email: email,
                password: password
            }
            var result = await axiosInstance.post('/member/login.php', data);
            commit("SET_LOADING", false);
            if (result.data.status === 200) {
                
                commit("SET_USER_INFO",result.data.user);
                commit("SET_LOGIN_INFO",result.data);
                dispatch("getListPostByUserId",result.data.user.USERID);
                return {
                    ok: true,
                    error: null,
                    data: result.data
                }
            } else{
                return {
                    ok:false,
                    error:result.data.error
                }
            }
        } catch (error) {
            commit("SET_LOADING", false);
            return {
                ok: false,
                error:error.message
            }
        }
    },
    async logout({ commit }) {
        commit("SET_LOGOUT");
    },
    async checkLogin({ commit, dispatch }){
        try {
            let tokenLocal = localStorage.getItem("ACCESS_TOKEN");
            let userObj =  parseJwt(tokenLocal);
            if(userObj){

                let promisUser          = await dispatch("getUserById",userObj.id);
                let promisPostUser      = await dispatch("getListPostByUserId",userObj.id);
                let [userResult, postUserResult] = await Promise.all([promisUser, promisPostUser])

                if(userResult.ok && postUserResult.ok){
                    let data = {
                        user: userResult.data,
                        token: tokenLocal
                    }
                    commit("SET_LOGIN_INFO", data);
                    
                    return{
                        ok:true,
                        error:null
                    }
                }
            }
            return {
                ok:false
            }
            
            
        } catch (error) {
            commit("SET_LOADING", false);
            return {
                ok:false,
                error:error.message
            }
        }
    },
    async getListPostByUserId({ commit }, userid) {
        try {
            let config = {
                params:{
                    userid: userid
                },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem("ACCESS_TOKEN")
                }
            }
            var result = await axiosInstance.get("/post/getListPostUserID.php", config);
            if (result.data.status === 200) {
                let objData = {
                    posts: result.data.posts,
                    userid:userid
                }
                commit("SET_USER_POSTS",objData);
                return {
                    ok:true,
                    error:null
                }
            }
            return {
                ok: false,
                error:null
            }   
            console.log(result);
        } catch (error) {
          return {
            ok: false,
            error: error.message
          };
        }
    },
    async register({ commit, dispatch}, data){
        commit('SET_LOADING', true);
        try {
            let result = await axiosInstance.post('/member/register.php', data);
            commit('SET_LOADING', false);
            console.log(result);
            if(result.data.status === 200){
                let objUser = {
                    user: result.data.user,
                    token: result.data.token
                }
                commit("SET_USER_INFO",result.data.user);
                commit("SET_LOGIN_INFO",objUser);
                dispatch("getListPostByUserId",result.data.user.USERID);
                return {
                    ok:true,
                    error:null
                }
            } else {
                return {
                    ok:false,
                    error:result.data.error
                }
            }
            
        } catch(error) {
            commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    }
}