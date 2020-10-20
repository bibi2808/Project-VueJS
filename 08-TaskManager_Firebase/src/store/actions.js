import { usersRef, videoRef, auth } from "../config/firebase";
import "firebase/firestore";
import * as firebase from "firebase/app";

export default {
  setLoading({ commit }, loading = false) {
    commit("SET_LOADING", loading);
  },
  async register({ commit }, { email, password }) {
    commit("SET_LOADING", true);
    try {
      let result = await auth.createUserWithEmailAndPassword(email, password);
      let uid = result.user.uid;
      await usersRef.doc(uid).set({
        email: email,
        role: "member"
      });

      let user = {
        email: email,
        uid: uid
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
      let uid = result.user.uid;
      let video = await videoRef
        .doc(uid)
        .get()
        .then(doc => {
          if (doc.exists) {
            return doc.data().item;
          } else {
            return [];
          }
        });
      let user = {
        email: email,
        uid: uid,
        userListVideo: video
      };
      commit("SET_CURRENT_USER", user);
      commit("SET_LOADING", false);
      localStorage.setItem("listVideoId", JSON.stringify(video));
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
  async registerVideo({ commit, state }, item) {
    try {
      let uid = state.currentUser.uid;
      let result = await videoRef.doc(uid).get();
      if (result.exists) {
        await videoRef.doc(uid).update({
          item: firebase.firestore.FieldValue.arrayUnion(item)
        });
      } else {
        await videoRef.doc(uid).set({
          item: [item]
        });
      }
      let listid = await videoRef.get().then(snap => {
        let item;
        snap.forEach(doc => {
          item = doc.data().item;
          return item;
        });
        return item;
      });
      commit("SET_ADD_VIDEO", listid);
      localStorage.setItem("listVideoId", JSON.stringify(listid));
    } catch (error) {
      console.log("error", error);
    }
  }
};
